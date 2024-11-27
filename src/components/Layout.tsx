import React from 'react';
import { X } from 'lucide-react';
import { NavigationMenu } from './navigation/NavigationMenu';

interface LayoutProps {
  children: React.ReactNode;
  isSidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export function Layout({ children, isSidebarOpen, onCloseSidebar }: LayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity lg:hidden z-40"
          onClick={onCloseSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:relative inset-y-0 left-0 z-50 w-64 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <div className="h-full bg-white border-r border-gray-200">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 lg:hidden">
            <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
            <button
              onClick={onCloseSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <NavigationMenu />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {children}
      </div>
    </div>
  );
}