# Frontend - Gerenciamento de Empresas

Interface React com TailwindCSS para consumir a API de empresas.

## Instalação

```bash
npm install
```

## Executar

```bash
npm start
```

A aplicação abrirá automaticamente em `http://localhost:3001`

## Funcionalidades

- Listagem de empresas em tabela
- Criação de novas empresas
- Edição de empresas via modal
- Exclusão de empresas com confirmação
- Interface responsiva e moderna

## Configuração

A URL da API está configurada em `src/App.js`:
```javascript
const API_URL = 'http://localhost:3000/api/empresas';
```

Certifique-se de que o backend está rodando antes de iniciar o frontend.

## Tecnologias

- React 18
- TailwindCSS
- Axios
