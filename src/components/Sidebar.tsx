import React from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  UserPlus, 
  Calendar, 
  FileText, 
  BarChart3, 
  Bot, 
  Settings, 
  HelpCircle, 
  LogOut,
  Infinity
} from 'lucide-react';
import { cn } from '../lib/utils';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

const navItems: { view: View; label: string; icon: React.ElementType }[] = [
  { view: 'overview', label: 'Tổng quan', icon: LayoutDashboard },
  { view: 'tasks', label: 'Công việc', icon: CheckSquare },
  { view: 'recruitment', label: 'Tuyển dụng', icon: UserPlus },
  { view: 'calendar', label: 'Lịch', icon: Calendar },
  { view: 'notes', label: 'Ghi chú', icon: FileText },
  { view: 'reports', label: 'Báo cáo', icon: BarChart3 },
  { view: 'assistant', label: 'AI Assistant', icon: Bot },
  { view: 'settings', label: 'Cài đặt', icon: Settings },
];

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-60 border-r border-slate-200 bg-white flex flex-col p-4 z-50">
      <div className="flex items-center gap-3 px-3 py-4 mb-6">
        <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <Infinity size={20} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-primary-container tracking-tight">Work OS</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Silent Partner</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => onViewChange(item.view)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group text-sm font-medium",
              currentView === item.view 
                ? "bg-[#E3F2FD] text-[#1A237E]" 
                : "text-slate-500 hover:bg-slate-50"
            )}
          >
            <item.icon 
              size={18} 
              className={cn(
                "transition-colors",
                currentView === item.view ? "text-[#1A237E]" : "text-slate-400 group-hover:text-slate-500"
              )} 
            />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="pt-4 border-t border-slate-100 space-y-1">
        <button className="w-full flex items-center gap-3 text-slate-500 px-3 py-2 hover:bg-slate-50 rounded-xl transition-all text-sm">
          <HelpCircle size={18} className="text-slate-400" />
          <span>Trợ giúp</span>
        </button>
        <button className="w-full flex items-center gap-3 text-error px-3 py-2 hover:bg-red-50 rounded-xl transition-all text-sm font-medium">
          <LogOut size={18} />
          <span>Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
}
