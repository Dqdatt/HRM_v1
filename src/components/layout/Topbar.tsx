import { useState, useRef, useEffect } from 'react';
import { Bell, ChevronDown, Settings, LogOut } from 'lucide-react';
import { ModuleId, MODULE_TABS } from '../../constants/navigation';
import { useLanguage } from '../../contexts/LanguageContext';

interface TopbarProps {
  activeModule: ModuleId;
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onSelectModule: (moduleId: ModuleId) => void;
}

export const Topbar = ({ activeModule, activeTab, onSelectTab, onSelectModule }: TopbarProps) => {
  const { t } = useLanguage();
  const tabs = MODULE_TABS[activeModule] || [];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-[56px] px-8 flex items-center justify-between bg-white border-b border-hr-border shrink-0">
      {/* Left side: Tabs */}
      <div className="flex-1 flex items-center h-full">
        {tabs.length > 0 ? (
          <div className="flex gap-6 overflow-x-auto no-scrollbar h-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`h-full border-b-2 transition-colors whitespace-nowrap text-sm font-medium ${
                  activeTab === tab.id
                    ? 'border-hr-accent text-hr-accent'
                    : 'border-transparent text-hr-secondary hover:text-hr-title'
                }`}
              >
                {t(`tab.${tab.id}`)}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center h-full">
            <h1 className="text-lg font-bold text-hr-title capitalize">{activeModule.replace('-', ' ')} Overview</h1>
          </div>
        )}
      </div>

      {/* Right side: User info */}
      <div className="flex items-center gap-6 ml-4 shrink-0">
        <div className="relative cursor-pointer hover:bg-gray-50 p-1 rounded-full transition-colors">
          <Bell className="w-5 h-5 text-hr-secondary" />
          <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </div>
        <div className="relative" ref={dropdownRef}>
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img 
              alt="Profile" 
              className="w-8 h-8 rounded-full object-cover border border-hr-border" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uj6M0E683OrCLrVsbus4foEiVJvxlJUfrICeN-bS1l6OPA9k9hp-MLttsbmXMdH6cUdHZWbUgsERMGIRixtMh7c3u4jaZqrrge6DQCqDM9UyaUclGO5BOPRfmfZavj4cdLTxfRZytLcl9RCSgSYxzJ0n3O5Uy0iRidB604ZvdYrbsfw6SltggLmMFhHzp6qoKV8Js9D4heVqRdlU4-fa7fuSpK84NX-aUjOyNhQvV0kr4Qj1Rjd5xC7YF1WBlSEq3UQP7eNyRwBtg"
            />
            <span className="text-sm font-medium text-hr-title group-hover:text-hr-accent transition-colors">
              Hang Minh Nguyen
            </span>
            <ChevronDown className="w-4 h-4 text-hr-secondary group-hover:text-hr-accent transition-colors" />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-hr-border py-2 z-50">
              <button 
                onClick={() => {
                  onSelectModule('settings');
                  setIsDropdownOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-hr-title hover:bg-gray-50 transition-colors"
              >
                <Settings className="w-4 h-4 text-hr-secondary" />
                <span>{t('nav.settings')}</span>
              </button>
              <div className="h-px bg-hr-border my-1" />
              <button 
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                <LogOut className="w-4 h-4" />
                <span>Log Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
