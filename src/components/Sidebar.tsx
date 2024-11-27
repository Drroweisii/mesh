import React from 'react';
import { Home, Users, Settings, HelpCircle } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard' },
  { icon: Users, label: 'Users' },
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help' },
];

export function Sidebar() {
  return (
    <nav className="h-full py-4">
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.label}>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}