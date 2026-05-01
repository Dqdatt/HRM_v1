import { useState } from 'react';
import Layout from './components/Layout';
import Overview from './pages/Overview';
import Tasks from './pages/Tasks';
import Recruitment from './pages/Recruitment';
import Calendar from './pages/Calendar';
import Notes from './pages/Notes';
import Dashboard from './pages/Dashboard';
import AIAssistant from './pages/AIAssistant';
import Settings from './pages/Settings';
import { View } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('overview');

  const renderView = () => {
    switch (currentView) {
      case 'overview': return <Overview />;
      case 'tasks': return <Tasks />;
      case 'recruitment': return <Recruitment />;
      case 'calendar': return <Calendar />;
      case 'notes': return <Notes />;
      case 'reports': return <Dashboard />;
      case 'assistant': return <AIAssistant />;
      case 'settings': return <Settings />;
      default: return <Overview />;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {renderView()}
    </Layout>
  );
}
