import React from 'react';

interface GameUIProps {
  score?: number;
  level?: number;
}

export function GameUI({ score = 0, level = 1 }: GameUIProps) {
  return (
    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
        <p className="text-gray-800 font-semibold">
          Level: <span className="text-blue-600">{level}</span>
        </p>
      </div>
      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
        <p className="text-gray-800 font-semibold">
          Score: <span className="text-green-600">{score}</span>
        </p>
      </div>
    </div>
  );
}