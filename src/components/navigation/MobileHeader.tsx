import React from 'react';
import { Menu } from 'lucide-react';

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 px-4 h-16 flex items-center justify-between z-50">
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-100 rounded-lg"
        aria-label="Toggle Menu"
      >
        <Menu className="w-6 h-6 text-gray-600" />
      </button>
      <h1 className="text-xl font-semibold text-gray-800">Your App</h1>
      <div className="w-10" />
    </header>
  );
}