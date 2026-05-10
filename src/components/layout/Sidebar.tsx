import { 
  LayoutGrid, 
  CalendarCheck, 
  Users, 
  UserPlus, 
  CreditCard, 
  BarChart3, 
  Settings, 
  BrainCircuit,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';
import { ModuleId } from '../../constants/navigation';
import { useLanguage } from '../../contexts/LanguageContext';

interface SidebarProps {
  activeModule: ModuleId;
  onSelectModule: (moduleId: ModuleId) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar = ({ activeModule, onSelectModule, isCollapsed, onToggleCollapse }: SidebarProps) => {
  const { t } = useLanguage();

  const navItems = [
    { id: 'dashboard', icon: LayoutGrid, label: t('nav.dashboard') },
    { id: 'timesheet', icon: CalendarCheck, label: t('nav.timesheet') },
    { id: 'staff', icon: Users, label: t('nav.staffs'), expandable: true },
    { id: 'hiring', icon: UserPlus, label: t('nav.hiring'), expandable: true },
    { id: 'payroll', icon: CreditCard, label: t('nav.payrolls'), expandable: true },
    { id: 'reports', icon: BarChart3, label: t('nav.reports'), expandable: true },
    { id: 'aicenter', icon: BrainCircuit, label: t('nav.aicenter'), expandable: true },
  ];

  return (
    <aside className={`bg-white border-r border-hr-border flex flex-col p-4 md:p-6 space-y-8 h-full transition-all duration-300 ${isCollapsed ? 'w-[80px] items-center' : 'w-[220px]'}`}>
      <div className={`flex items-center justify-between w-full ${isCollapsed ? 'flex-col gap-4' : ''}`}>
        <div className={`flex items-center gap-1.5 ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="w-6 h-6 bg-hr-accent rounded-full flex items-center justify-center shrink-0">
            <div className="w-2 h-2 bg-hr-logo-dot rounded-full" />
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold text-hr-title tracking-tight whitespace-nowrap">
              hrment<span className="text-hr-logo-dot">.</span>
            </span>
          )}
        </div>
        <button 
          onClick={onToggleCollapse}
          className="flex items-center justify-center p-1.5 text-hr-secondary hover:text-hr-accent hover:bg-gray-50 rounded-md transition-colors"
        >
          {isCollapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
        </button>
      </div>

      <nav className="flex flex-col gap-1 overflow-y-auto no-scrollbar flex-1 w-full">
        {navItems.map((item) => (
          <div key={item.id} className="relative group">
            {activeModule === item.id && (
              <div className="absolute -left-4 md:-left-6 top-0 bottom-0 w-1 bg-hr-accent rounded-r-md" />
            )}
            <button
              onClick={() => onSelectModule(item.id as ModuleId)}
              className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} px-3 py-2 rounded-lg transition-colors ${
                activeModule === item.id 
                  ? 'text-hr-accent bg-hr-accent-bg/30' 
                  : 'text-hr-secondary hover:text-hr-accent hover:bg-gray-50'
              }`}
              title={isCollapsed ? item.label : undefined}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 shrink-0" />
                {!isCollapsed && (
                  <span className={`text-[15px] whitespace-nowrap ${activeModule === item.id ? 'font-semibold' : 'font-medium'}`}>
                    {item.label}
                  </span>
                )}
              </div>
            </button>
          </div>
        ))}

        {/* Settings button removed from here */}
      </nav>

      {/* Bottom Actions */}
      <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-hr-border w-full">
        {/* Settings button moved to Topbar dropdown */}
      </div>
    </aside>
  );
};
