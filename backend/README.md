# Backend - API de Empresas

API REST para gerenciamento de empresas com documentação Swagger.

## Instalação

```bash
npm install
```

## Executar

```bash
npm start
```

Para desenvolvimento com auto-reload:
```bash
npm run dev
```

## Documentação

Acesse a documentação Swagger em: `http://localhost:3000/api-docs`

## Endpoints

- **GET** `/api/empresas` - Lista todas as empresas
- **GET** `/api/empresas/:id` - Busca empresa por ID
- **POST** `/api/empresas` - Cria nova empresa
- **PUT** `/api/empresas/:id` - Atualiza empresa
- **DELETE** `/api/empresas/:id` - Exclui empresa

## Exemplo de Requisição POST

```json
{
  "nome": "Empresa Exemplo",
  "cnpj": "12.345.678/0001-90",
  "email": "contato@exemplo.com",
  "telefone": "(11) 98765-4321"
}
```
