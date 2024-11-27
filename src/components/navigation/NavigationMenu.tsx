import React from 'react';
import { Home, Users, Settings, HelpCircle } from 'lucide-react';
import { MenuItem } from './MenuItem';

const menuItems = [
  { icon: Home, label: 'Dashboard' },
  { icon: Users, label: 'Users' },
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help' },
];

export function NavigationMenu() {
  return (
    <nav className="h-full py-4">
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.label}>
            <MenuItem icon={item.icon} label={item.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}