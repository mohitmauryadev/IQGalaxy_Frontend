import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Smart City Builder — Advanced + Animated + Result Based
 * - Budget system + per-build turn limit
 * - Placeable tiles (Road, House, School, Hospital, Park, Factory, Solar, Metro, EV Station, Water Plant)
 * - Live indices: Happiness, Eco, Economy, Traffic
 * - Random Events (traffic jam, festival, rain boost, smog wave, investor visit)
 * - Animated cars + metro + floating HUD
 * - Endgame Report Card + Reset
 */

const GRID_W = 10;
const GRID_H = 6;
const MAX_TURNS = 24;

const palette = [
  {
    key: "road",
    label: "Road",
    emoji: "🛣",
    cost: 30,
    color: "bg-slate-300",
    impact: { traffic: +6, eco: -1, economy: +2, happy: +1 },
  },
  {
    key: "house",
    label: "Housing",
    emoji: "🏠",
    cost: 40,
    color: "bg-orange-200",
    impact: { economy: +3, happy: +4, eco: -1, traffic: +2 },
  },
  {
    key: "school",
    label: "School",
    emoji: "🏫",
    cost: 80,
    color: "bg-yellow-200",
    impact: { happy: +6, economy: +4, eco: +1 },
  },
  {
    key: "hospital",
    label: "Hospital",
    emoji: "🏥",
    cost: 90,
    color: "bg-red-200",
    impact: { happy: +7, economy: +2, eco: +1 },
  },
  {
    key: "park",
    label: "Park",
    emoji: "🌳",
    cost: 50,
    color: "bg-green-200",
    impact: { eco: +6, happy: +4, traffic: -1 },
  },
  {
    key: "factory",
    label: "Factory",
    emoji: "🏭",
    cost: 75,
    color: "bg-stone-300",
    impact: { economy: +8, eco: -6, happy: -2, traffic: +3 },
  },
  {
    key: "solar",
    label: "Solar",
    emoji: "🔆",
    cost: 70,
    color: "bg-amber-200",
    impact: { eco: +7, economy: +3 },
  },
  {
    key: "metro",
    label: "Metro",
    emoji: "🚇",
    cost: 110,
    color: "bg-indigo-200",
    impact: { traffic: -8, happy: +3, economy: +4, eco: +2 },
  },
  {
    key: "ev",
    label: "EV Station",
    emoji: "⚡",
    cost: 60,
    color: "bg-blue-200",
    impact: { eco: +4, traffic: -2, economy: +2 },
  },
  {
    key: "water",
    label: "Water Plant",
    emoji: "🚰",
    cost: 65,
    color: "bg-cyan-200",
    impact: { happy: +3, eco: +3, economy: +2 },
  },
];

const clamp = (v, a = 0, b = 100) => Math.max(a, Math.min(b, v));

export default function SmartCityBuilder() {
  const [budget, setBudget] = useState(700);
  const [turns, setTurns] = useState(0);
  const [selected, setSelected] = useState(palette[0].key);
  const [tiles, setTiles] = useState(() =>
    Array.from({ length: GRID_W * GRID_H }, () => null)
  );

  // City indices
  const [happy, setHappy] = useState(45);
  const [eco, setEco] = useState(45);
  const [economy, setEconomy] = useState(45);
  const [traffic, setTraffic] = useState(45); // lower is better? We'll show "Flow" inversely in UI.

  const [events, setEvents] = useState([]);
  const [showReport, setShowReport] = useState(false);

  // Animated HUD background by overall balance score
  const balanceScore = useMemo(() => {
    // traffic inverted (lower traffic => higher flow score)
    const flow = clamp(100 - traffic);
    return Math.round((happy + eco + economy + flow) / 4);
  }, [happy, eco, economy, traffic]);

  const sky = useMemo(() => {
    if (balanceScore >= 80) return "from-emerald-100 via-sky-100 to-indigo-100";
    if (balanceScore >= 60) return "from-sky-100 via-amber-50 to-indigo-50";
    if (balanceScore >= 40) return "from-yellow-100 via-orange-50 to-rose-50";
    return "from-rose-100 via-rose-200 to-amber-200";
  }, [balanceScore]);

  // Random events every ~12s (skip after game ends)
  useEffect(() => {
    if (showReport) return;
    const id = setInterval(() => {
      const r = Math.random();
      if (r < 0.2) {
        setTraffic((t) => clamp(t + 8));
        pushEvent("🚗 Traffic Jam in Downtown! Traffic worsened.");
      } else if (r < 0.4) {
        setEco((e) => clamp(e + 7));
        pushEvent("🌧 Rain restored greenery! Eco improved.");
      } else if (r < 0.6) {
        setEconomy((e) => clamp(e + 8));
        pushEvent("💼 Investor visit! Economy boosted.");
      } else if (r < 0.8) {
        setHappy((h) => clamp(h + 6));
        pushEvent("🎉 City Festival lifted happiness!");
      } else {
        setEco((e) => clamp(e - 6));
        setHappy((h) => clamp(h - 4));
        pushEvent("🌫 Smog wave hit! Eco & happiness dropped.");
      }
    }, 12000);
    return () => clearInterval(id);
  }, [showReport]);

  const pushEvent = (msg) =>
    setEvents((ev) => [msg, ...ev].slice(0, 8));

  // Place building
  const onPlace = (idx) => {
    if (showReport) return;
    if (tiles[idx]) return; // already occupied
    const item = palette.find((p) => p.key === selected);
    if (!item) return;

    if (budget < item.cost) {
      pushEvent("❗ Not enough budget for this project.");
      return;
    }

    // Apply
    const newTiles = [...tiles];
    newTiles[idx] = item.key;
    setTiles(newTiles);
    setBudget((b) => b - item.cost);
    setTurns((t) => t + 1);

    // Impacts
    setHappy((v) => clamp(v + (item.impact.happy || 0)));
    setEco((v) => clamp(v + (item.impact.eco || 0)));
    setEconomy((v) => clamp(v + (item.impact.economy || 0)));
    setTraffic((v) => clamp(v + (item.impact.traffic || 0)));

    pushEvent(`✅ Built ${item.label}. Indices updated.`);

    // Small adjacency bonus: Park next to Houses boosts happiness more
    if (item.key === "park") {
      const adj = adjacentIndices(idx);
      const housesNear = adj.filter((i) => newTiles[i] === "house").length;
      if (housesNear > 0) {
        setHappy((v) => clamp(v + housesNear * 2));
        pushEvent("🌿 Park near homes! Bonus happiness.");
      }
    }

    // End conditions
    setTimeout(() => {
      if (budget - item.cost <= 0 || turns + 1 >= MAX_TURNS) {
        setShowReport(true);
        pushEvent("📊 Budget/turn limit reached. Showing City Report.");
      }
    }, 50);
  };

  const adjacentIndices = (idx) => {
    const x = idx % GRID_W;
    const y = Math.floor(idx / GRID_W);
    const arr = [];
    if (x > 0) arr.push(idx - 1);
    if (x < GRID_W - 1) arr.push(idx + 1);
    if (y > 0) arr.push(idx - GRID_W);
    if (y < GRID_H - 1) arr.push(idx + GRID_W);
    return arr;
  };

  const reset = () => {
    setBudget(700);
    setTurns(0);
    setTiles(Array.from({ length: GRID_W * GRID_H }, () => null));
    setHappy(45);
    setEco(45);
    setEconomy(45);
    setTraffic(45);
    setEvents(["🔄 New term begins. Plan your smart city wisely!"]);
    setShowReport(false);
  };

  // Metro animation line exists if at least one metro placed
  const hasMetro = useMemo(() => tiles.some((t) => t === "metro"), [tiles]);
  const hasRoad = useMemo(() => tiles.some((t) => t === "road"), [tiles]);

  // Tiny helpers
  const Stat = ({ label, value, goodHigh = true }) => {
    // if goodHigh=false => invert (for Traffic we’ll show Flow)
    const val = clamp(goodHigh ? value : 100 - value);
    const bar = val >= 75
      ? "from-emerald-400 to-green-500"
      : val >= 50
      ? "from-lime-400 to-yellow-400"
      : val >= 30
      ? "from-amber-400 to-orange-500"
      : "from-rose-500 to-red-600";

    return (
      <div>
        <div className="flex justify-between text-sm font-semibold text-slate-700">
          <span>{label}</span>
          <span>{Math.round(val)}%</span>
        </div>
        <div className="h-2 mt-1 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className={`h-2 bg-gradient-to-r ${bar}`}
            style={{ width: `${val}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${val}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    );
  };

  const Tile = ({ idx, kind }) => {
    const item = palette.find((p) => p.key === kind);
    if (!item) return (
      <button
        onClick={() => onPlace(idx)}
        className="w-full h-full bg-white/70 hover:bg-white/90 transition rounded-xl border border-slate-200"
        title="Empty"
      />
    );

    return (
      <motion.div
        className={`w-full h-full ${item.color} rounded-xl border border-white shadow-inner flex items-center justify-center text-lg`}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
      >
        <span title={item.label}>{item.emoji}</span>
      </motion.div>
    );
  };

  return (
    <div className={`min-h-screen w-full bg-gradient-to-b ${sky} relative overflow-hidden`}>
      {/* Floating cars (if roads exist) */}
      {hasRoad && (
        <>
          <motion.div
            className="absolute top-10 left-[-80px] text-xl"
            animate={{ x: ["-80px", "120%"] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          >
            🚗
          </motion.div>
          <motion.div
            className="absolute top-20 left-[-80px] text-xl"
            animate={{ x: ["120%", "-80px"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            🚙
          </motion.div>
        </>
      )}

      {/* Floating metro (if metro exists) */}
      {hasMetro && (
        <motion.div
          className="absolute bottom-12 left-[-140px] text-2xl"
          animate={{ x: ["-140px", "120%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
          🚆
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Smart City Builder <span className="text-indigo-600">Advanced</span>
            </h1>
            <p className="text-slate-600 mt-2">
              Plan, build, and balance a modern city: economy, ecology, mobility & happiness.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-600">Budget</span>
            <span className="px-4 py-2 rounded-xl bg-amber-200 text-amber-900 font-bold shadow">
              💰 {budget}
            </span>
            <span className="text-sm font-semibold text-slate-600">Turns</span>
            <span className="px-4 py-2 rounded-xl bg-slate-200 text-slate-900 font-bold shadow">
              {turns}/{MAX_TURNS}
            </span>
          </div>
        </div>

        {/* Top HUD stats */}
        <div className="mt-6 grid md:grid-cols-4 gap-4">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 shadow">
            <Stat label="Happiness" value={happy} />
          </div>
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 shadow">
            <Stat label="Eco Index" value={eco} />
          </div>
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 shadow">
            <Stat label="Economy" value={economy} />
          </div>
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 shadow">
            <Stat label="Traffic Flow" value={traffic} goodHigh={false} />
          </div>
        </div>

        {/* Builder area */}
        <div className="mt-8 grid lg:grid-cols-[330px_1fr] gap-6">
          {/* Palette */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-5 shadow-lg">
            <h3 className="text-lg font-bold text-slate-900">Build Palette</h3>
            <p className="text-sm text-slate-600 mb-3">Choose a project, then click on the map.</p>
            <div className="grid grid-cols-2 gap-3">
              {palette.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setSelected(p.key)}
                  className={`rounded-2xl border px-3 py-3 text-left shadow hover:shadow-md transition ${
                    selected === p.key ? "border-indigo-500 bg-white" : "border-slate-200 bg-white/80"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{p.emoji}</span>
                    <span className="font-semibold text-slate-800">{p.label}</span>
                  </div>
                  <div className="mt-1 text-xs text-slate-600">Cost: {p.cost}</div>
                </button>
              ))}
            </div>

            <div className="mt-5 flex gap-2">
              <button
                onClick={reset}
                className="flex-1 rounded-xl bg-slate-900 text-white font-semibold py-2 shadow hover:opacity-90"
              >
                Reset City
              </button>
              <button
                onClick={() => setShowReport(true)}
                className="flex-1 rounded-xl bg-indigo-600 text-white font-semibold py-2 shadow hover:bg-indigo-700"
              >
                Show Report
              </button>
            </div>

            {/* Events */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-slate-800">City Events</h4>
              <ul className="mt-2 space-y-1 max-h-40 overflow-auto pr-1">
                {events.map((e, i) => (
                  <li key={i} className="text-xs text-slate-700">• {e}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map grid */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-5 shadow-lg">
            <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${GRID_W}, minmax(0, 1fr))` }}>
              {tiles.map((t, i) => (
                <div key={i} className="aspect-square">
                  <Tile idx={i} kind={t} />
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Tip: Parks near Housing boost Happiness more. Metro reduces Traffic big-time.
            </p>
          </div>
        </div>

        {/* Bottom banner score */}
        <div className="mt-8 bg-white/70 backdrop-blur-xl rounded-2xl p-4 shadow text-center">
          <p className="text-sm text-slate-600">
            City Balance Score:
            <span className="ml-2 font-bold text-slate-900">{balanceScore}</span>/100
            {balanceScore >= 80 ? " — Futuristic! 🚀" : balanceScore >= 60 ? " — On the rise! 🌟" : " — Keep improving! 📈"}
          </p>
        </div>
      </div>

      {/* Report Modal */}
      <AnimatePresence>
        {showReport && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h3 className="text-2xl font-extrabold text-slate-900">City Report Card</h3>
              <p className="text-slate-600 text-sm mb-4">
                Turns used: {turns}/{MAX_TURNS} · Budget left: {budget}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <ReportStat label="Happiness" value={happy} />
                <ReportStat label="Eco Index" value={eco} />
                <ReportStat label="Economy" value={economy} />
                <ReportStat label="Traffic Flow" value={100 - traffic} />
              </div>

              <div className="mt-4 p-4 rounded-2xl bg-slate-50 border">
                <p className="text-sm text-slate-700">
                  Overall Balance Score: <span className="font-bold">{balanceScore}</span>/100
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  {balanceScore >= 85
                    ? "Outstanding city! Sustainable, prosperous, and happy. 🌈"
                    : balanceScore >= 70
                    ? "Great work! A few tweaks could make it world-class. 💡"
                    : balanceScore >= 55
                    ? "Promising base. Add parks, transit, and schools to uplift. 🌱"
                    : "Needs improvement. Reduce traffic & pollution; add public services. 🔧"}
                </p>
              </div>

              <div className="mt-6 flex gap-3 justify-end">
                <button
                  onClick={() => setShowReport(false)}
                  className="rounded-xl px-4 py-2 border border-slate-200 hover:bg-slate-50"
                >
                  Continue
                </button>
                <button
                  onClick={reset}
                  className="rounded-xl px-4 py-2 bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700"
                >
                  Start New City
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ReportStat({ label, value }) {
  const v = clamp(value);
  const bar =
    v >= 75
      ? "from-emerald-400 to-green-500"
      : v >= 50
      ? "from-lime-400 to-yellow-400"
      : v >= 30
      ? "from-amber-400 to-orange-500"
      : "from-rose-500 to-red-600";
  return (
    <div>
      <div className="flex justify-between text-sm font-semibold text-slate-700">
        <span>{label}</span>
        <span>{Math.round(v)}%</span>
      </div>
      <div className="h-2 mt-1 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-2 bg-gradient-to-r ${bar}`}
          style={{ width: `${v}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${v}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}



// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function SmartCityBuilder() {
//   const [score, setScore] = useState(50); // Environment health starts from 50

//   const addTree = () => setScore(score + 10);
//   const addFactory = () => setScore(score - 15);
//   const addSolar = () => setScore(score + 8);
//   const addCar = () => setScore(score - 10);

//   const getStatus = () => {
//     if (score >= 80) return "🌍 Excellent! Nature is Thriving!";
//     if (score >= 50) return "🌱 Balanced! Keep Improving!";
//     return "☠ Oh no! The Earth is Polluted!";
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-200 to-blue-300 p-6">
//       <h1 className="text-3xl font-bold text-green-800 mb-4">
//         🌱 Eco Guardian Game
//       </h1>
//       <p className="text-lg mb-2">Environment Health: {score}</p>
//       <p className="font-semibold mb-6">{getStatus()}</p>

//       <div className="grid grid-cols-2 gap-4 mb-8">
//         {/* Tree Button */}
//         <motion.button
//           whileTap={{ scale: 0.9 }}
//           className="p-4 bg-green-500 rounded-2xl text-white font-bold shadow-lg hover:bg-green-600"
//           onClick={addTree}
//         >
//           🌳 Plant Tree (+10)
//         </motion.button>

//         {/* Factory Button */}
//         <motion.button
//           whileTap={{ scale: 0.9 }}
//           className="p-4 bg-gray-700 rounded-2xl text-white font-bold shadow-lg hover:bg-gray-800"
//           onClick={addFactory}
//         >
//           🏭 Build Factory (-15)
//         </motion.button>

//         {/* Solar Button */}
//         <motion.button
//           whileTap={{ scale: 0.9 }}
//           className="p-4 bg-yellow-400 rounded-2xl text-black font-bold shadow-lg hover:bg-yellow-500"
//           onClick={addSolar}
//         >
//           ☀ Install Solar (+8)
//         </motion.button>

//         {/* Car Button */}
//         <motion.button
//           whileTap={{ scale: 0.9 }}
//           className="p-4 bg-red-500 rounded-2xl text-white font-bold shadow-lg hover:bg-red-600"
//           onClick={addCar}
//         >
//           🚗 Add Car (-10)
//         </motion.button>
//       </div>

//       {/* Animated City Scene */}
//       <div className="w-full max-w-md h-60 bg-white rounded-2xl shadow-xl relative overflow-hidden">
//         {/* Sun */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 3 }}
//           className="absolute top-4 right-6 text-4xl"
//         >
//           ☀
//         </motion.div>

//         {/* Trees */}
//         {score > 60 && (
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             className="absolute bottom-6 left-6 text-5xl"
//           >
//             🌳
//           </motion.div>
//         )}

//         {/* Factory */}
//         {score < 70 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="absolute bottom-6 right-6 text-5xl"
//           >
//             🏭
//           </motion.div>
//         )}

//         {/* Smoke if pollution */}
//         {score < 40 && (
//           <motion.div
//             animate={{ y: [0, -20, 0], opacity: [1, 0, 1] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//             className="absolute bottom-32 right-8 text-3xl"
//           >
//             💨
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }