"use client";

import { useRef, useState } from "react";

type Props = {
  audioUrl: string;
};

export default function AudioPlayer({ audioUrl }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;

    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;

    if (duration) {
      setProgress((current / duration) * 100);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="mx-auto mt-8 w-full max-w-2xl">
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      <div className="flex flex-col items-center">

        {/* Play button */}
        <button
          onClick={toggleAudio}
          aria-label={isPlaying ? "توقف صدا" : "پخش صدا"}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-[#A98252] text-xl text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#8F6B43]"
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>

        {/* Text */}
        <p className="mt-3 text-sm text-[#6B5545]">
          {isPlaying ? "در حال پخش توضیحات..." : "شنیدن توضیحات این بخش"}
        </p>

        {/* Progress line */}
        <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-[#D8CCBC]">
          <div
            className="h-full bg-[#A98252] transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>
    </div>
  );
}

