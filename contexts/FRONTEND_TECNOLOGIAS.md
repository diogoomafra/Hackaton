# Frontend - Dashboard de Geolocalização e Demografia

## Stack Tecnológica

### Core Frontend
- **Vite + React**: Build tool moderno e framework reativo
- **HTML5/CSS3/JavaScript**: Base da aplicação web
- **Recharts**: Biblioteca para gráficos e visualizações

### Mapas e Geolocalização
- **OpenStreetMap API**: Tiles de mapa e geocodificação
- **React-Leaflet**: Componentes React para mapas interativos
- **Leaflet**: Engine de mapas

### Design System
- **Cores**: Roxo (#642764), Laranja (#ff8c00), Preto (#000000)(traços), Branco (#f5f5f5)
- **Visual**: Moderno, arredondado, responsivo
- **UX**: Focado na experiência do usuário

## Layout e Estrutura

### Divisão da Tela
- **Sidebar Esquerda (30%)**: Menu de navegação e filtros
- **Área Principal (70%)**: Visualização de dados

### Seções Principais

#### 1. Seção de Localização
- Mapa interativo com OpenStreetMap
- Pin de localização baseado em lat/lng do Firebase
- Zoom automático na localização
- Informações de endereço via geocodificação reversa

#### 2. Seção Demográfica (Dados Censo IBGE)
- **Gráfico de Pizza (Recharts)**:
  - Quantidade de pessoas por residência
  - Distribuição por faixa etária
  - Distribuição por faixa de renda
- Cores personalizadas para cada categoria
- Tooltips informativos
- Legendas interativas

## Estrutura de Componentes
```
src/
├── components/
│   ├── Map/
│   │   ├── LocationMap.jsx
│   │   └── MapPin.jsx
│   ├── Charts/
│   │   ├── DemographicPieChart.jsx
│   │   └── ChartLegend.jsx
│   ├── Sidebar/
│   │   ├── Navigation.jsx
│   │   └── Filters.jsx
│   └── Layout/
│       ├── Dashboard.jsx
│       └── MainContent.jsx
├── styles/
│   ├── globals.css
│   └── components/
└── utils/
    ├── api.js
    └── mapUtils.js
```

## Target Platform
- **Desktop Only**: Aplicação governamental para uso em estações de trabalho
- **Resolução mínima**: 1366x768px
- **Layout fixo**: Sidebar 30% + área principal 70%

## Funcionalidades UX
- Transições suaves entre seções
- Loading states para dados
- Estados de erro amigáveis
- Feedback visual para interações
- Acessibilidade (ARIA labels, contraste)

## Dependências
```json
{
  "react": "^18.2.0",
  "vite": "^4.4.0",
  "recharts": "^2.8.0",
  "react-leaflet": "^4.2.0",
  "leaflet": "^1.9.0",
  "axios": "^1.5.0"
}
```