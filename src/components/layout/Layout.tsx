import { useState } from 'react';
import { motion } from 'motion/react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { ModuleId, MODULE_TABS } from '../../constants/navigation';

interface LayoutProps {
  activeModule: ModuleId;
  activeTab: string;
  onSelectModule: (moduleId: ModuleId) => void;
  onSelectTab: (tabId: string) => void;
  children: React.ReactNode;
}

export const Layout = ({ activeModule, activeTab, onSelectModule, onSelectTab, children }: LayoutProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen w-full flex font-sans bg-white overflow-hidden">
        <Sidebar 
          activeModule={activeModule} 
          onSelectModule={onSelectModule} 
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
        
        <div className="flex-1 flex flex-col overflow-hidden bg-[#F9FBFC]">
          <Topbar 
            activeModule={activeModule} 
            activeTab={activeTab} 
            onSelectTab={onSelectTab} 
            onSelectModule={onSelectModule}
          />
          
          <div className="flex-1 overflow-y-auto no-scrollbar p-6 md:p-8">
            {children}
          </div>
        </div>
    </div>
  );
};
