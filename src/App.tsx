import { useState } from 'react';
import { Layout } from './components/layout/Layout';
import { ModuleId, MODULE_TABS } from './constants/navigation';

// Modules
import { Dashboard } from './pages/Dashboard/Dashboard';
import { TimesheetModule } from './pages/Timesheet/TimesheetModule';
import { StaffList } from './pages/Staff/StaffList';
import { StaffDetail } from './pages/Staff/StaffDetail';
import { HiringModule } from './pages/Hiring/HiringModule';
import { PayrollModule } from './pages/Payroll/PayrollModule';
import { Report } from './pages/Report/Report';
import { AICenterModule } from './pages/AICenter/AICenterModule';
import { SettingModule } from './pages/Setting/SettingModule';

export default function App() {
  const [activeModule, setActiveModule] = useState<ModuleId>('dashboard');
  
  // Initialize active tab based on module
  const getDefaultTab = (moduleId: ModuleId) => {
    const tabs = MODULE_TABS[moduleId];
    return tabs && tabs.length > 0 ? tabs[0].id : '';
  };
  
  const [activeTab, setActiveTab] = useState<string>(getDefaultTab('dashboard'));
  
  // Specific internal routing state for drill-down pages like Staff Detail
  const [selectedStaffId, setSelectedStaffId] = useState<string | null>(null);

  const handleSelectModule = (moduleId: ModuleId) => {
    setActiveModule(moduleId);
    setActiveTab(getDefaultTab(moduleId));
    // Reset any drill-down state
    if (moduleId !== 'staff') setSelectedStaffId(null);
  };

  const renderContent = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />;
      case 'timesheet':
        return <TimesheetModule activeTab={activeTab} />;
      case 'staff':
        if (selectedStaffId) {
          return <StaffDetail onBack={() => setSelectedStaffId(null)} />;
        }
        return <StaffList onSelectStaff={setSelectedStaffId} />;
      case 'hiring':
        return <HiringModule activeTab={activeTab} />;
      case 'payroll':
        return <PayrollModule activeTab={activeTab} />;
      case 'reports':
        return <Report />;
      case 'aicenter':
        return <AICenterModule activeTab={activeTab} />;
      case 'settings':
        return <SettingModule activeTab={activeTab} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout 
      activeModule={activeModule}
      activeTab={activeTab}
      onSelectModule={handleSelectModule}
      onSelectTab={setActiveTab}
    >
      {renderContent()}
    </Layout>
  );
}
