import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { View } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function Layout({ children, currentView, onViewChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar currentView={currentView} onViewChange={onViewChange} />
      <TopBar />
      <main className="ml-60 pt-16 p-8 min-h-screen overflow-x-hidden">
        <div className="max-w-[1200px] mx-auto py-4">
          {children}
        </div>
      </main>
    </div>
  );
}
