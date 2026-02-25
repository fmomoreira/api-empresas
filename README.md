# API de Gerenciamento de Empresas

Sistema completo de gerenciamento de empresas com API REST e interface React.

## 📋 Estrutura do Projeto

```
APIEmpresas/
├── backend/          # API REST com Express e Node.js
│   ├── routes/       # Rotas da API
│   ├── server.js     # Servidor principal
│   └── package.json  # Dependências do backend
└── frontend/         # Interface React com TailwindCSS
    ├── src/          # Código fonte React
    ├── public/       # Arquivos públicos
    └── package.json  # Dependências do frontend
```

## 🚀 Como Executar

### Backend (API)

1. Navegue até a pasta backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`

**Documentação Swagger:** `http://localhost:3000/api-docs`

### Frontend (React)

1. Navegue até a pasta frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie a aplicação:
```bash
npm start
```

A aplicação estará rodando em `http://localhost:3001` (ou outra porta se 3000 estiver ocupada)

## 📚 API Endpoints

Base URL: `http://localhost:3000/api/empresas`

- **GET** `/api/empresas` - Lista todas as empresas
- **GET** `/api/empresas/:id` - Busca uma empresa por ID
- **POST** `/api/empresas` - Cria uma nova empresa
- **PUT** `/api/empresas/:id` - Atualiza uma empresa
- **DELETE** `/api/empresas/:id` - Exclui uma empresa

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Swagger UI Express
- CORS

### Frontend
- React
- TailwindCSS
- Axios

## 📝 Funcionalidades

- ✅ Criar empresas
- ✅ Listar empresas em tabela
- ✅ Editar empresas (modal)
- ✅ Excluir empresas
- ✅ Documentação Swagger automática
- ✅ Interface moderna e responsiva

## 💡 Observações

- O backend deve estar rodando antes de iniciar o frontend
- Os dados são armazenados em memória (reiniciar o servidor limpa os dados)
- A porta padrão do backend é 3000
- A porta padrão do frontend é 3001
