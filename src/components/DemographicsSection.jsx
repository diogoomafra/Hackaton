import React from 'react'
import { ChartIcon, MoneyIcon } from './Icons'

const DemographicsSection = () => {
  return (
    <div>
      <div className="section">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ChartIcon size={24} color="#ff8c00" />
          Dados Demográficos
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          
          <div style={{ 
            height: '300px', 
            backgroundColor: '#f9f9f9', 
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px dashed #ff8c00'
          }}>
            <div style={{ textAlign: 'center', color: '#642764' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏠</div>
              <p><strong>Pessoas por Residência</strong></p>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                Gráfico de Pizza - Recharts
              </p>
            </div>
          </div>

          <div style={{ 
            height: '300px', 
            backgroundColor: '#f9f9f9', 
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px dashed #ff8c00'
          }}>
            <div style={{ textAlign: 'center', color: '#642764' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>👥</div>
              <p><strong>Faixa Etária</strong></p>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                Distribuição por idade
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="section">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <MoneyIcon size={24} color="#ff8c00" />
          Distribuição de Renda
        </h2>
        <div style={{ 
          height: '250px', 
          backgroundColor: '#f9f9f9', 
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px dashed #642764'
        }}>
          <div style={{ textAlign: 'center', color: '#642764' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💵</div>
            <p><strong>Faixa de Renda Familiar</strong></p>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
              Dados do Censo IBGE
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemographicsSection