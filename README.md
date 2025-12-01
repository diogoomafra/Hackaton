# 🚀 Hackaton ETEFMC 2025 - Dashboard de Geolocalização

> Projeto desenvolvido durante o **Hackaton 2025** - simulado técnico da conclusão do terceiro ano do curso de Desenvolvimento de Sistemas, realizado em 24 horas.

## 📋 Sobre o Projeto

Dashboard web para visualização de dados de geolocalização em tempo real, com integração Firebase e mapas interativos. O sistema permite monitorar dispositivos IoT e visualizar informações demográficas associadas às localizações.

## 🛠️ Tecnologias Utilizadas

### Backend
- **Python 3.9+** - Linguagem principal
- **FastAPI** - Framework web moderno para APIs REST
- **Firebase Realtime Database** - Armazenamento em tempo real
- **Firebase Admin SDK** - Integração com Firebase
- **Uvicorn** - Servidor ASGI

### Frontend
- **React 18** - Framework JavaScript
- **Vite** - Build tool moderno
- **React-Leaflet** - Mapas interativos
- **Recharts** - Gráficos e visualizações
- **OpenStreetMap** - Tiles de mapa

## 🏗️ Estrutura do Projeto

```
HackatonFelinux/
├── backend/
│   ├── main.py              # API FastAPI principal
│   └── Mapa.py             # Lógica de mapas
├── frontend/
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── styles/         # Estilos CSS
│   │   ├── App.jsx         # Aplicação principal
│   │   └── main.jsx        # Entry point
│   ├── static/             # Arquivos estáticos
│   ├── templates/          # Templates HTML
│   └── index.html          # Página principal
├── Hackaton/
│   ├── contexts/           # Documentação técnica
│   ├── package.json        # Dependências Node.js
│   ├── requirements.txt    # Dependências Python
│   └── vite.config.js      # Configuração Vite
└── example.env             # Exemplo de variáveis de ambiente
```

## 🚀 Como Executar

### Pré-requisitos
- Python 3.9+
- Node.js 16+
- Conta Firebase com Realtime Database

### 1. Configuração do Ambiente

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd HackatonFelinux

# Copie o arquivo de exemplo das variáveis de ambiente
copy example.env .env
```

### 2. Configure as Variáveis de Ambiente

Edite o arquivo `.env` com suas credenciais do Firebase:

```env
FIREBASE_PROJECT_ID=seu-projeto-firebase
FIREBASE_PRIVATE_KEY_ID=sua-private-key-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
sua-chave-privada-aqui
-----END PRIVATE KEY-----"
FIREBASE_CLIENT_EMAIL=seu-service-account@projeto.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=seu-client-id
FIREBASE_DATABASE_URL=https://seu-projeto-default-rtdb.firebaseio.com/
```

### 3. Backend (FastAPI)

```bash
# Instale as dependências Python
cd Hackaton
pip install -r requirements.txt

# Execute o servidor
cd ../backend
python main.py
```

O backend estará disponível em: `http://localhost:8000`

### 4. Frontend (React)

```bash
# Instale as dependências Node.js
cd Hackaton
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

O frontend estará disponível em: `http://localhost:5173`

## 📡 Endpoints da API

### Localizações
- `GET /` - Informações da API
- `GET /locations` - Todas as localizações
- `GET /locations/{device_id}` - Localizações por dispositivo
- `GET /locations/latest` - Última localização
- `GET /api/map-data` - Dados para o mapa

### Dashboard
- `GET /dashboard` - Dashboard React
- `GET /home` - Página inicial com dados

## 🎨 Funcionalidades

### Dashboard Principal
- **Mapa Interativo**: Visualização de localizações em tempo real
- **Gráficos Demográficos**: Dados do censo IBGE
- **Filtros**: Busca por dispositivo e período
- **Responsivo**: Interface adaptável

### Visualizações
- Mapa com marcadores de dispositivos
- Gráficos de pizza para dados demográficos
- Informações de localização detalhadas
- Atualização automática dos dados

## 🔧 Configuração do Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
2. Ative o Realtime Database
3. Gere uma chave de conta de serviço
4. Configure as regras de segurança do database
5. Adicione as credenciais no arquivo `.env`

### Estrutura dos Dados no Firebase

```json
{
  "locations": {
    "location_id": {
      "device_id": "string",
      "latitude": "float",
      "longitude": "float",
      "timestamp": "datetime",
      "accuracy": "float"
    }
  }
}
```

## 🎯 Objetivos do Hackaton

Este projeto foi desenvolvido como parte do **Hackaton 2025**, simulado técnico da conclusão do terceiro ano do curso de Desenvolvimento de Sistemas, com os seguintes objetivos:

- ✅ Integração de tecnologias modernas (React + FastAPI + Firebase)
- ✅ Desenvolvimento de dashboard interativo
- ✅ Implementação de mapas em tempo real
- ✅ Visualização de dados demográficos
- ✅ API RESTful completa
- ✅ Interface responsiva e moderna

## 👥 Equipe

- Davi Lourenço
- Diogo Mafra
- Evellyn Fernandes
- Juliana Custódio
- Marina Magalhães

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais durante o Hackaton 2025.

---

**Desenvolvido com ❤️ durante o Hackaton ETEFMC 2025**