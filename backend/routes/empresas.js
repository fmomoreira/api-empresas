const express = require('express');
const router = express.Router();

let empresas = [
  { id: 1, nome: 'Empresa A', cnpj: '12.345.678/0001-90', email: 'contato@empresaa.com', telefone: '(11) 98765-4321' },
  { id: 2, nome: 'Empresa B', cnpj: '98.765.432/0001-10', email: 'contato@empresab.com', telefone: '(21) 91234-5678' },
];

let nextId = 3;

/**
 * @swagger
 * components:
 *   schemas:
 *     Empresa:
 *       type: object
 *       required:
 *         - nome
 *         - cnpj
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-gerado da empresa
 *         nome:
 *           type: string
 *           description: Nome da empresa
 *         cnpj:
 *           type: string
 *           description: CNPJ da empresa
 *         email:
 *           type: string
 *           description: Email da empresa
 *         telefone:
 *           type: string
 *           description: Telefone da empresa
 *       example:
 *         id: 1
 *         nome: Empresa Exemplo
 *         cnpj: 12.345.678/0001-90
 *         email: contato@exemplo.com
 *         telefone: (11) 98765-4321
 */

/**
 * @swagger
 * /api/empresas:
 *   get:
 *     summary: Lista todas as empresas
 *     tags: [Empresas]
 *     parameters:
 *       - in: query
 *         name: cnpj
 *         schema:
 *           type: string
 *         description: Filtrar empresas por CNPJ (busca parcial)
 *     responses:
 *       200:
 *         description: Lista de empresas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Empresa'
 */
router.get('/', (req, res) => {
  const { cnpj } = req.query;
  
  let resultado = empresas;
  
  if (cnpj) {
    const cnpjLimpo = cnpj.replace(/[^\d]/g, '');
    
    if (cnpjLimpo.length > 0) {
      resultado = empresas.filter(e => {
        const empresaCnpjLimpo = e.cnpj.replace(/[^\d]/g, '');
        return empresaCnpjLimpo.includes(cnpjLimpo);
      });
    }
  }
  
  res.json(resultado);
});

/**
 * @swagger
 * /api/empresas/{id}:
 *   get:
 *     summary: Busca uma empresa por ID
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da empresa
 *     responses:
 *       200:
 *         description: Empresa encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empresa'
 *       404:
 *         description: Empresa não encontrada
 */
router.get('/:id', (req, res) => {
  const empresa = empresas.find(e => e.id === parseInt(req.params.id));
  if (!empresa) {
    return res.status(404).json({ message: 'Empresa não encontrada' });
  }
  res.json(empresa);
});

/**
 * @swagger
 * /api/empresas:
 *   post:
 *     summary: Cria uma nova empresa
 *     tags: [Empresas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - cnpj
 *             properties:
 *               nome:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empresa'
 *       400:
 *         description: Dados inválidos
 */
router.post('/', (req, res) => {
  const { nome, cnpj, email, telefone } = req.body;
  
  if (!nome || !cnpj) {
    return res.status(400).json({ message: 'Nome e CNPJ são obrigatórios' });
  }

  const novaEmpresa = {
    id: nextId++,
    nome,
    cnpj,
    email: email || '',
    telefone: telefone || ''
  };

  empresas.push(novaEmpresa);
  res.status(201).json(novaEmpresa);
});

/**
 * @swagger
 * /api/empresas/{id}:
 *   put:
 *     summary: Atualiza uma empresa existente
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da empresa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Empresa atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empresa'
 *       404:
 *         description: Empresa não encontrada
 */
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = empresas.findIndex(e => e.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Empresa não encontrada' });
  }

  const { nome, cnpj, email, telefone } = req.body;
  
  empresas[index] = {
    ...empresas[index],
    nome: nome || empresas[index].nome,
    cnpj: cnpj || empresas[index].cnpj,
    email: email !== undefined ? email : empresas[index].email,
    telefone: telefone !== undefined ? telefone : empresas[index].telefone
  };

  res.json(empresas[index]);
});

/**
 * @swagger
 * /api/empresas/{id}:
 *   delete:
 *     summary: Exclui uma empresa
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da empresa
 *     responses:
 *       200:
 *         description: Empresa excluída com sucesso
 *       404:
 *         description: Empresa não encontrada
 */
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = empresas.findIndex(e => e.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Empresa não encontrada' });
  }

  empresas.splice(index, 1);
  res.json({ message: 'Empresa excluída com sucesso' });
});

module.exports = router;
