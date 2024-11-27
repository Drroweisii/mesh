import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

export function MenuItem({ icon: Icon, label, onClick }: MenuItemProps) {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}