import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import DashHome from './DashHome';
import './Dashboard.css';

const Dashboard = () => {
  const [activeView, setActiveView] = useState('inicio');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboard-container">
      <Sidebar 
        activeView={activeView}
        setActiveView={setActiveView}
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <main className={`main-content ${sidebarOpen ? '' : 'collapsed'}`}>
        <Header />
        <DashHome activeView={activeView} />
      </main>
    </div>
  );
};

export default Dashboard;
