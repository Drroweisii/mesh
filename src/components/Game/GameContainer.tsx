import React, { Suspense } from 'react';
import { Scene } from './Scene';
import { GameUI } from './GameUI';
import { useGameState } from '../../hooks/useGameState';
import { LoadingSpinner } from '../ui/LoadingSpinner';

export function GameContainer() {
  const { gameState } = useGameState();

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-900 to-black">
      <Suspense fallback={<LoadingSpinner />}>
        <Scene />
      </Suspense>
      <GameUI score={gameState.score} level={gameState.level} />
    </div>
  );
}