import React from 'react'
import { LocationIcon, DemographicsIcon, FilterIcon } from './Icons'

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'location', label: 'Localização', icon: LocationIcon },
    { id: 'demographics', label: 'Demografia', icon: DemographicsIcon },
    { id: 'filters', label: 'Filtros', icon: FilterIcon }
  ]

  return (
    <div className="sidebar">
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '2rem', 
          marginBottom: '8px',
          fontWeight: '300',
          lineHeight: '1.2'
        }}>
          Dashboard Geolocalização
        </h1>
        <p style={{ 
          color: '#ff8c00', 
          fontSize: '1rem',
          fontWeight: '500'
        }}>
          Hackaton Felinux 2024
        </p>
      </div>

      <nav style={{ marginBottom: '40px' }}>
        {menuItems.map(item => (
          <div
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
          >
            <span style={{ marginRight: '12px', display: 'flex', alignItems: 'center' }}>
              <item.icon 
                size={20} 
                color={activeSection === item.id ? '#642764' : '#ff8c00'} 
              />
            </span>
            {item.label}
          </div>
        ))}
      </nav>

      <div style={{ 
        position: 'absolute', 
        bottom: '30px', 
        left: '20px', 
        right: '40px',
        padding: '20px',
        background: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '12px',
        fontSize: '0.9rem',
        border: '1px solid rgba(255, 140, 0, 0.3)'
      }}>
        <div style={{ color: '#ff8c00', fontWeight: 'bold', marginBottom: '5px' }}>Status:</div>
        <div style={{ marginBottom: '10px' }}>Conectado</div>
        <div style={{ color: '#ff8c00', fontWeight: 'bold', marginBottom: '5px' }}>Última atualização:</div>
        <div>{new Date().toLocaleTimeString('pt-BR')}</div>
      </div>
    </div>
  )
}

export default Sidebar