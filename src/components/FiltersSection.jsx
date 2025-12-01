import React, { useState } from 'react'
import { SearchIcon, ListIcon } from './Icons'

const FiltersSection = () => {
  const [filters, setFilters] = useState({
    ageRange: '',
    incomeRange: '',
    residenceType: ''
  })

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div>
      <div className="section">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <SearchIcon size={24} color="#ff8c00" />
          Filtros de Pesquisa
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#ff8c00' }}>
              Faixa Etária
            </label>
            <select 
              style={{ 
                width: '100%', 
                padding: '10px', 
                borderRadius: '8px', 
                border: '2px solid #ff8c00',
                fontSize: '1rem'
              }}
              value={filters.ageRange}
              onChange={(e) => handleFilterChange('ageRange', e.target.value)}
            >
              <option value="">Todas as idades</option>
              <option value="0-18">0-18 anos</option>
              <option value="19-35">19-35 anos</option>
              <option value="36-60">36-60 anos</option>
              <option value="60+">60+ anos</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#ff8c00' }}>
              Faixa de Renda
            </label>
            <select 
              style={{ 
                width: '100%', 
                padding: '10px', 
                borderRadius: '8px', 
                border: '2px solid #ff8c00',
                fontSize: '1rem'
              }}
              value={filters.incomeRange}
              onChange={(e) => handleFilterChange('incomeRange', e.target.value)}
            >
              <option value="">Todas as rendas</option>
              <option value="0-2">Até 2 salários mínimos</option>
              <option value="2-5">2-5 salários mínimos</option>
              <option value="5-10">5-10 salários mínimos</option>
              <option value="10+">Acima de 10 salários</option>
            </select>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#ff8c00' }}>
            Tipo de Residência
          </label>
          <select 
            style={{ 
              width: '100%', 
              padding: '10px', 
              borderRadius: '8px', 
              border: '2px solid #ff8c00',
              fontSize: '1rem'
            }}
            value={filters.residenceType}
            onChange={(e) => handleFilterChange('residenceType', e.target.value)}
          >
            <option value="">Todos os tipos</option>
            <option value="casa">Casa</option>
            <option value="apartamento">Apartamento</option>
            <option value="kitnet">Kitnet</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <button 
          style={{
            marginTop: '20px',
            padding: '12px 30px',
            backgroundColor: '#ff8c00',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
          onClick={() => console.log('Filtros aplicados:', filters)}
        >
          Aplicar Filtros
        </button>
      </div>

      <div className="section">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ListIcon size={24} color="#ff8c00" />
          Filtros Ativos
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {Object.entries(filters).map(([key, value]) => 
            value && (
              <span 
                key={key}
                style={{
                  backgroundColor: '#642764',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '15px',
                  fontSize: '0.9rem'
                }}
              >
                {value}
              </span>
            )
          )}
          {!Object.values(filters).some(v => v) && (
            <p style={{ color: '#ff8c00', fontStyle: 'italic' }}>
              Nenhum filtro ativo
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default FiltersSection