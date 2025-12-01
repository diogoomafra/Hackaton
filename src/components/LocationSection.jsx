import React from 'react'

const LocationSection = () => {
  return (
    <div>
      <div className="section">
        <h2>Mapa de Localização</h2>
        <div style={{ 
          height: '450px', 
          background: 'rgba(0, 0, 0, 0.2)', 
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px dashed rgba(255, 140, 0, 0.5)',
          position: 'relative'
        }}>
          <div style={{ textAlign: 'center', color: '#f5f5f5' }}>
            <div style={{ fontSize: '4rem', marginBottom: '15px' }}>🗺️</div>
            <p style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Mapa interativo será carregado aqui</p>
            <p style={{ fontSize: '1rem', opacity: 0.7, color: '#ff8c00' }}>
              OpenStreetMap + React-Leaflet
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Informações de Localização</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div>
            <h3 style={{ color: '#ff8c00', marginBottom: '15px', fontSize: '1.3rem' }}>Coordenadas</h3>
            <div style={{ color: '#f5f5f5', fontSize: '1.1rem', lineHeight: '1.8' }}>
              <p><strong>Latitude:</strong> -23.5505</p>
              <p><strong>Longitude:</strong> -46.6333</p>
            </div>
          </div>
          <div>
            <h3 style={{ color: '#ff8c00', marginBottom: '15px', fontSize: '1.3rem' }}>Endereço</h3>
            <div style={{ color: '#f5f5f5', fontSize: '1.1rem', lineHeight: '1.8' }}>
              <p><strong>Cidade:</strong> São Paulo</p>
              <p><strong>País:</strong> Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationSection