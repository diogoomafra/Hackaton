# Backend - Tecnologias e Arquitetura

## Visão Geral
Sistema de backend para dashboard de geolocalização em tempo real, desenvolvido para hackathon 24h.

## Stack Tecnológica

### Core Backend
- **Python 3.9+**: Linguagem principal do backend
- **FastAPI**: Framework web moderno e rápido para APIs REST
- **Uvicorn**: Servidor ASGI para execução do FastAPI

### Banco de Dados e Armazenamento
- **Firebase Realtime Database**: Armazenamento dos dados de geolocalização em tempo real
- **Firebase Admin SDK**: Integração Python com Firebase

### APIs Externas
- **OpenStreetMap API**: Serviços de mapas e geocodificação
- **Nominatim**: Geocodificação reversa (coordenadas → endereços)

### Dependências Python
```
fastapi>=0.104.0
uvicorn>=0.24.0
firebase-admin>=6.2.0
requests>=2.31.0
python-dotenv>=1.0.0
pydantic>=2.4.0
```

## Arquitetura do Sistema

### Fluxo de Dados
1. **Dispositivo IoT** → Firebase Realtime Database
2. **Firebase** → FastAPI (via Firebase Admin SDK)
3. **FastAPI** → OpenStreetMap API (processamento de coordenadas)
4. **FastAPI** → Frontend Dashboard (dados processados)

### Estrutura de Dados
```json
{
  "device_id": "string",
  "latitude": "float",
  "longitude": "float", 
  "timestamp": "datetime",
  "accuracy": "float"
}
```

### Endpoints Principais
- `GET /locations` - Buscar todas as localizações
- `GET /locations/{device_id}` - Localizações por dispositivo
- `GET /locations/latest` - Última localização registrada
- `POST /locations` - Adicionar nova localização (para testes)

## Configuração do Ambiente
- Variáveis de ambiente para credenciais Firebase
- Configuração de CORS para frontend
- Rate limiting para APIs externas