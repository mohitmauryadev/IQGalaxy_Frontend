import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Eco Guardian — Advanced + Animated
 * Features:
 * - Planet Health system (0–100) with dynamic sky/background
 * - Resources: coins, trees, energy, water, pollution
 * - Actions: Plant Tree, Clean River, Install Solar, Recycle Waste, Build Park
 * - Random Events every 12s (drought, heatwave, litter storm, eco-award bonus)
 * - Passive decay & pollution drift every 3s (game loop)
 * - Quests (daily eco-quests style) with progress, rewards, confetti burst
 * - Animated planet, floating clouds, pulsing rings, progress bars
 * - Event log + Toasts
 */

export default function EcoGuardianGame() {
  // Core state
  const [health, setHealth] = useState(60);
  const [coins, setCoins] = useState(120);
  const [trees, setTrees] = useState(10);
  const [energy, setEnergy] = useState(20);
  const [water, setWater] = useState(40);
  const [pollution, setPollution] = useState(40);

  // UI + meta
  const [toasts, setToasts] = useState([]);
  const [log, setLog] = useState([
    "Welcome Guardian! Keep the planet green and citizens happy 🌿",
  ]);
  const [burst, setBurst] = useState(false); // confetti-like burst
  const [tick, setTick] = useState(0);

  // Quests
  const [quests, setQuests] = useState([
    { id: "tree5", text: "Plant 5 trees", progress: 0, target: 5, reward: 30, done: false },
    { id: "clean2", text: "Clean the river 2 times", progress: 0, target: 2, reward: 25, done: false },
    { id: "solar1", text: "Install 1 solar field", progress: 0, target: 1, reward: 40, done: false },
  ]);

  // Helpers
  const clamp = (v, min = 0, max = 100) => Math.max(min, Math.min(max, v));
  const addLog = (msg) => setLog((l) => [msg, ...l].slice(0, 10));
  const pushToast = (msg, type = "info") =>
    setToasts((t) => [...t, { id: Date.now() + Math.random(), msg, type }]);

  const sky = useMemo(() => {
    // Dynamic background by health
    if (health >= 80) return "from-emerald-100 via-sky-100 to-indigo-100";
    if (health >= 60) return "from-sky-100 via-amber-50 to-indigo-50";
    if (health >= 40) return "from-yellow-100 via-orange-50 to-rose-50";
    return "from-rose-100 via-rose-200 to-amber-200";
  }, [health]);

  const planetColor = useMemo(() => {
    if (health >= 80) return "bg-emerald-400";
    if (health >= 60) return "bg-emerald-300";
    if (health >= 40) return "bg-yellow-300";
    return "bg-rose-300";
  }, [health]);

  const face = useMemo(() => {
    if (health >= 80) return "😊";
    if (health >= 60) return "🙂";
    if (health >= 40) return "😟";
    return "😵";
  }, [health]);

  // Confetti-like burst
  const doBurst = () => {
    setBurst(true);
    setTimeout(() => setBurst(false), 900);
  };

  // Quest progress helper
  const bumpQuest = (id) => {
    setQuests((qs) =>
      qs.map((q) =>
        q.id === id && !q.done
          ? { ...q, progress: Math.min(q.progress + 1, q.target) }
          : q
      )
    );
  };

  // Quest rewards checker
  useEffect(() => {
    setQuests((qs) =>
      qs.map((q) => {
        if (!q.done && q.progress >= q.target) {
          pushToast(`Quest complete: ${q.text} +${q.reward} coins 🎉`, "success");
          setCoins((c) => c + q.reward);
          doBurst();
          addLog(`Quest complete → ${q.text}`);
          return { ...q, done: true };
        }
        return q;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quests.map((q) => `${q.id}:${q.progress}:${q.done}`).join("|")]);

  // Passive game loop (every 3s)
  useEffect(() => {
    const iv = setInterval(() => {
      setTick((t) => t + 1);
      setPollution((p) => clamp(p + 1.5 - trees * 0.02 - energy * 0.01, 0, 100)); // more trees/energy reduce drift
      setWater((w) => clamp(w - 0.6 + trees * 0.005, 0, 100)); // trees help retain water a bit
      // health derives from balanced stats
      setHealth((h) =>
        clamp(
          h +
            (trees * 0.03 + energy * 0.02 + water * 0.02) -
            (pollution * 0.05 + (pollution > 70 ? 0.5 : 0)),
          0,
          100
        )
      );
    }, 3000);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trees, energy, water, pollution]);

  // Random events (every ~12s)
  const eventsRef = useRef(false);
  useEffect(() => {
    if (eventsRef.current) return;
    eventsRef.current = true;

    const randomEventLoop = setInterval(() => {
      const roll = Math.random();
      if (roll < 0.25) {
        // Heatwave
        setWater((w) => clamp(w - 8));
        setHealth((h) => clamp(h - 5));
        addLog("🌞 Heatwave! Water decreased, health dropped.");
        pushToast("Heatwave hit! Save water. 💧", "warn");
      } else if (roll < 0.5) {
        // Litter storm
        setPollution((p) => clamp(p + 10));
        setHealth((h) => clamp(h - 4));
        addLog("🗑 Litter storm increased pollution.");
        pushToast("Litter storm! Try Recycling ♻", "warn");
      } else if (roll < 0.7) {
        // Drought easing (lucky rain)
        setWater((w) => clamp(w + 10));
        addLog("🌧 Gentle rains boosted water levels.");
        pushToast("Rains arrived! Water up. 🌧", "info");
      } else {
        // Eco-award!
        const bonus = 20;
        setCoins((c) => c + bonus);
        addLog(`🏅 Eco-Award! Community donated ${bonus} coins.`);
        pushToast(`Eco-Award! +${bonus} coins 🎖`, "success");
        doBurst();
      }
    }, 12000);

    return () => clearInterval(randomEventLoop);
  }, []);

  // Actions
  const canAfford = (cost) => coins >= cost;

  const actions = [
    {
      key: "plant-tree",
      title: "Plant Tree",
      emoji: "🌳",
      cost: 10,
      run: () => {
        if (!canAfford(10)) return pushToast("Not enough coins!", "error");
        setCoins((c) => c - 10);
        setTrees((t) => clamp(t + 1));
        setPollution((p) => clamp(p - 3));
        setHealth((h) => clamp(h + 3));
        bumpQuest("tree5");
        addLog("🌳 Planted a tree. Pollution down, health up.");
      },
    },
    {
      key: "clean-river",
      title: "Clean River",
      emoji: "🧼",
      cost: 14,
      run: () => {
        if (!canAfford(14)) return pushToast("Not enough coins!", "error");
        setCoins((c) => c - 14);
        setWater((w) => clamp(w + 8));
        setPollution((p) => clamp(p - 4));
        setHealth((h) => clamp(h + 2));
        bumpQuest("clean2");
        addLog("🧽 Cleaned the river. Water up, pollution down.");
      },
    },
    {
      key: "install-solar",
      title: "Install Solar",
      emoji: "🔆",
      cost: 24,
      run: () => {
        if (!canAfford(24)) return pushToast("Not enough coins!", "error");
        setCoins((c) => c - 24);
        setEnergy((e) => clamp(e + 10));
        setPollution((p) => clamp(p - 5));
        setHealth((h) => clamp(h + 4));
        bumpQuest("solar1");
        addLog("🔆 Installed solar field. Clean energy rising.");
        doBurst();
      },
    },
    {
      key: "recycle",
      title: "Recycle Waste",
      emoji: "♻",
      cost: 8,
      run: () => {
        if (!canAfford(8)) return pushToast("Not enough coins!", "error");
        setCoins((c) => c - 8);
        setPollution((p) => clamp(p - 6));
        setHealth((h) => clamp(h + 2));
        addLog("♻ Recycled waste effectively. Pollution reduced.");
      },
    },
    {
      key: "build-park",
      title: "Build Park",
      emoji: "🏞",
      cost: 30,
      run: () => {
        if (!canAfford(30)) return pushToast("Not enough coins!", "error");
        setCoins((c) => c - 30);
        setTrees((t) => clamp(t + 4));
        setHealth((h) => clamp(h + 6));
        setPollution((p) => clamp(p - 5));
        addLog("🏞 Built a public park. Citizens happier, air cleaner.");
        doBurst();
      },
    },
  ];

  // Health bar gradient
  const healthBar = useMemo(() => {
    if (health >= 80) return "bg-gradient-to-r from-emerald-400 to-green-500";
    if (health >= 60) return "bg-gradient-to-r from-lime-400 to-yellow-400";
    if (health >= 40) return "bg-gradient-to-r from-amber-400 to-orange-500";
    return "bg-gradient-to-r from-rose-500 to-red-600";
  }, [health]);

  // Generic Stat Bar
  const StatBar = ({ label, value, suffix = "%" }) => (
    <div className="w-full">
      <div className="flex justify-between text-sm font-medium text-slate-700">
        <span>{label}</span>
        <span>
          {Math.round(value)}
          {suffix}
        </span>
      </div>
      <div className="h-2 mt-1 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          className="h-2 bg-slate-800"
          style={{ width: `${clamp(value)}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${clamp(value)}%` }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  );

  // Toast component
  const Toasts = () => (
    <div className="fixed top-4 right-4 space-y-2 z-50">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3 }}
            className={`px-4 py-3 rounded-xl shadow-lg text-sm ${
              t.type === "success"
                ? "bg-emerald-500 text-white"
                : t.type === "warn"
                ? "bg-amber-500 text-slate-900"
                : t.type === "error"
                ? "bg-rose-500 text-white"
                : "bg-slate-800 text-white"
            }`}
          >
            {t.msg}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  return (
    <div className={`min-h-screen w-full bg-gradient-to-b ${sky} relative overflow-hidden`}>
      <Toasts />

      {/* floating clouds */}
      <motion.div
        className="absolute -top-10 left-0 w-64 h-32 bg-white/40 blur-2xl rounded-full"
        animate={{ x: ["-10%", "110%"], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 28, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-16 left-10 w-72 h-32 bg-white/30 blur-2xl rounded-full"
        animate={{ x: ["110%", "-10%"], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 34, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Eco Guardian <span className="text-emerald-600">Advanced</span>
            </h1>
            <p className="text-slate-600 mt-2">
              Build a greener world: balance trees, water, clean energy and reduce pollution. 🌍
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-600">Coins</span>
            <span className="px-4 py-2 rounded-xl bg-amber-200 text-amber-900 font-bold shadow">
              💰 {coins}
            </span>
          </div>
        </div>

        {/* Main */}
        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          {/* Planet + actions */}
          <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl overflow-hidden">
            {/* Planet */}
            <div className="relative flex items-center justify-center py-8">
              {/* Rings */}
              <motion.div
                className="absolute w-80 h-80 rounded-full border-2 border-emerald-300/50"
                animate={{ scale: [1, 1.06, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-96 h-96 rounded-full border-2 border-emerald-200/40"
                animate={{ scale: [1.05, 1, 1.05] }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              {/* Planet body */}
              <motion.div
                className={`relative ${planetColor} w-64 h-64 rounded-full shadow-2xl flex items-center justify-center`}
                animate={{ scale: [1, health >= 80 ? 1.04 : 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* continents */}
                <motion.div
                  className="absolute -left-2 -top-1 w-24 h-16 bg-emerald-700/50 rounded-full"
                  animate={{ x: [0, 8, -6, 0], y: [0, 4, -3, 0] }}
                  transition={{ duration: 7, repeat: Infinity }}
                />
                <motion.div
                  className="absolute right-3 top-10 w-20 h-14 bg-emerald-800/40 rounded-full"
                  animate={{ x: [0, -6, 4, 0], y: [0, -3, 3, 0] }}
                  transition={{ duration: 7, repeat: Infinity, delay: 0.8 }}
                />

                {/* face */}
                <div className="text-5xl">{face}</div>

                {/* confetti burst */}
                <AnimatePresence>
                  {burst && (
                    <>
                      {[...Array(14)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-white/80"
                          initial={{ opacity: 1, x: 0, y: 0 }}
                          animate={{
                            opacity: 0,
                            x: (Math.random() - 0.5) * 260,
                            y: (Math.random() - 0.5) * 260,
                          }}
                          transition={{ duration: 0.9, ease: "easeOut" }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Health */}
            <div className="mt-2">
              <div className="flex justify-between text-sm font-semibold text-slate-700">
                <span>Planet Health</span>
                <span>{Math.round(health)}%</span>
              </div>
              <div className="h-3 mt-2 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className={`h-3 ${healthBar}`}
                  style={{ width: `${health}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${health}%` }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
              {actions.map((a) => (
                <motion.button
                  key={a.key}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ y: -2 }}
                  onClick={a.run}
                  className="flex flex-col items-center gap-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold shadow hover:shadow-md transition"
                >
                  <span className="text-xl">{a.emoji}</span>
                  <span className="text-slate-800">{a.title}</span>
                  <span className="text-[11px] text-slate-500">Cost: {a.cost}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Stats + Quests + Log */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4">City Stats</h3>
              <div className="grid gap-4">
                <StatBar label="Trees" value={trees} />
                <StatBar label="Clean Energy" value={energy} />
                <StatBar label="Water Reserve" value={water} />
                <StatBar label="Pollution (lower is better)" value={100 - pollution} />
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Eco Quests</h3>
              <div className="space-y-3">
                {quests.map((q) => {
                  const pct = (q.progress / q.target) * 100;
                  return (
                    <div key={q.id} className="border border-slate-200 rounded-2xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-slate-800">{q.text}</p>
                          <p className="text-xs text-slate-500">
                            Reward: +{q.reward} coins
                          </p>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full ${
                          q.done ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"
                        }`}>
                          {q.done ? "Completed" : `${q.progress}/${q.target}`}
                        </span>
                      </div>
                      <div className="h-2 mt-3 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-2 bg-emerald-500"
                          style={{ width: `${pct}%` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Event Log</h3>
              <ul className="space-y-2 max-h-44 overflow-auto pr-1">
                {log.map((item, i) => (
                  <li key={i} className="text-sm text-slate-700">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer tip */}
        <div className="mt-8 text-center text-slate-500 text-sm">
          Tip: Balance actions. Trees + Solar cut pollution, River boosts water, Parks lift health fast.
        </div>
      </div>
    </div>
  );
}