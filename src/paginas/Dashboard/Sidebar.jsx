import { FiHome, FiBarChart2, FiSettings, FiHelpCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './Sidebar.css';
import NAAT from '../../assets/completo_blanco.png';

const Sidebar = ({ activeView, setActiveView, isOpen, toggleSidebar }) => {
  const menuItems = [
    { id: 'inicio', icon: <FiHome />, label: 'Inicio' },
    { id: 'reportes', icon: <FiBarChart2 />, label: 'Reportes' },
    { id: 'config', icon: <FiSettings />, label: 'Configuración' },
    { id: 'ayuda', icon: <FiHelpCircle />, label: 'Ayuda' },
  ];

  return (
    <nav className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div 
          className="logo-wrapper"
          onClick={toggleSidebar}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src={NAAT} 
            alt="NAAT Logo" 
            className="top-logo"
          />
          {isOpen && <h1 className="dashboard-title">Dashboard</h1>}
        </div>
      </div>

      <div className="menu-items">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-item ${activeView === item.id ? 'active' : ''}`}
            onClick={() => setActiveView(item.id)}
          >
            <span className="icon">{item.icon}</span>
            {isOpen && <span className="label">{item.label}</span>}
          </button>
        ))}
      </div>
    </nav>
  );
};

Sidebar.propTypes = {
  activeView: PropTypes.string.isRequired,
  setActiveView: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
