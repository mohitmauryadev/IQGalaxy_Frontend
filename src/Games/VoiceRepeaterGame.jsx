import React, { useState, useRef } from "react";
import { motion } from "framer-motion";


export default function VoiceRepeaterGame() {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [playing, setPlaying] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioRef = useRef(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunksRef.current = [];

    mediaRecorderRef.current.ondataavailable = (e) => {
      audioChunksRef.current.push(e.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  const playAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.volume = 0.8; // soft volume
      audio.playbackRate = 0.95; // slightly slower
      audioRef.current = audio;
      setPlaying(true);

      // Stop mouth animation after audio ends
      audio.onended = () => setPlaying(false);
      audio.play();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-200 to-yellow-200">
      {/* Cute Baby Character */}
      <div className="w-52 h-52 flex flex-col items-center justify-center mb-6 relative">
        <motion.div
          className="w-40 h-40 rounded-full bg-pink-300 flex items-center justify-center shadow-lg"
          animate={{ scale: playing ? [1, 1.05, 1] : 1 }}
          transition={{ repeat: playing ? Infinity : 0, duration: 0.5 }}
        >
          <span className="text-6xl">👶</span>
        </motion.div>

        {/* Mouth Animation */}
        <motion.div
          className="w-16 h-6 bg-red-400 rounded-full absolute bottom-10"
          animate={{ scaleY: playing ? [1, 0.3, 1] : 1 }}
          transition={{ repeat: playing ? Infinity : 0, duration: 0.3 }}
        />
      </div>

      {/* Controls */}
      <div className="space-x-4">
        {!recording ? (
          <button
            onClick={startRecording}
            className="px-6 py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600"
          >
            🎤 Start Speaking
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="px-6 py-3 bg-red-500 text-white rounded-xl shadow hover:bg-red-600"
          >
            ⏹ Stop
          </button>
        )}

        <button
          onClick={playAudio}
          disabled={!audioUrl}
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 disabled:bg-gray-400"
        >
          🔊 Repeat Voice
        </button>
      </div>

      {/* Instruction */}
      <p className="mt-6 text-lg font-semibold text-gray-700 text-center max-w-xs">
        Bolke dekho! Baby character tumhari awaaz cute way mein repeat karega 😃
      </p>
    </div>
  );
}