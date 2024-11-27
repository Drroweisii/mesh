import { useState } from 'react';

interface GameState {
  score: number;
  level: number;
}

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    level: 1,
  });

  const updateScore = (newScore: number) => {
    setGameState(prev => ({ ...prev, score: newScore }));
  };

  const updateLevel = (newLevel: number) => {
    setGameState(prev => ({ ...prev, level: newLevel }));
  };

  return {
    gameState,
    updateScore,
    updateLevel,
  };
}