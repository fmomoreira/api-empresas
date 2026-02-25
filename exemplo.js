const empresas = [
  {
    cnpj: "12.345.678/0001-90",
    razaoSocial: "Tech Solutions Ltda",
    nomeFantasia: "TechSol",
    telefone: "(11) 98765-4321",
    email: "contato@techsol.com.br",
    endereco: "Rua das Flores, 123",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01234-567",
    setor: "Tecnologia",
    dataFundacao: "2015-03-15",
    numeroFuncionarios: 50,
    faturamentoAnual: 2500000.00,
    ativo: true,
    observacoes: "Empresa especializada em desenvolvimento de software"
  },
  {
    cnpj: "23.456.789/0001-01",
    razaoSocial: "Comércio Brasil S.A.",
    nomeFantasia: "Brasil Shop",
    telefone: "(21) 97654-3210",
    email: "vendas@brasilshop.com.br",
    endereco: "Av. Paulista, 456",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cep: "20123-456",
    setor: "Comércio",
    dataFundacao: "2010-07-20",
    numeroFuncionarios: 120,
    faturamentoAnual: 5800000.00,
    ativo: true,
    observacoes: "Rede de lojas de varejo"
  },
  {
    cnpj: "34.567.890/0001-12",
    razaoSocial: "Indústria Metal Forte Ltda",
    nomeFantasia: "MetalForte",
    telefone: "(19) 96543-2109",
    email: "industrial@metalforte.com.br",
    endereco: "Rodovia dos Bandeirantes, Km 78",
    cidade: "Campinas",
    estado: "SP",
    cep: "13045-678",
    setor: "Indústria",
    dataFundacao: "2008-11-10",
    numeroFuncionarios: 200,
    faturamentoAnual: 12000000.00,
    ativo: true,
    observacoes: "Fabricação de peças metálicas"
  },
  {
    cnpj: "45.678.901/0001-23",
    razaoSocial: "Serviços Médicos Vida S.A.",
    nomeFantasia: "Clínica Vida",
    telefone: "(31) 95432-1098",
    email: "atendimento@clinicavida.com.br",
    endereco: "Rua Saúde, 789",
    cidade: "Belo Horizonte",
    estado: "MG",
    cep: "30123-789",
    setor: "Saúde",
    dataFundacao: "2012-05-25",
    numeroFuncionarios: 85,
    faturamentoAnual: 4200000.00,
    ativo: true,
    observacoes: "Clínica médica multiespecialidades"
  },
  {
    cnpj: "56.789.012/0001-34",
    razaoSocial: "Educação e Cultura Ltda",
    nomeFantasia: "Escola Futuro",
    telefone: "(41) 94321-0987",
    email: "secretaria@escolafuturo.com.br",
    endereco: "Av. Educação, 321",
    cidade: "Curitiba",
    estado: "PR",
    cep: "80234-890",
    setor: "Educação",
    dataFundacao: "2005-02-14",
    numeroFuncionarios: 65,
    faturamentoAnual: 1800000.00,
    ativo: true,
    observacoes: "Instituição de ensino fundamental e médio"
  },
  {
    cnpj: "67.890.123/0001-45",
    razaoSocial: "Transportes Rápido Ltda",
    nomeFantasia: "Rápido Express",
    telefone: "(51) 93210-9876",
    email: "logistica@rapidoexpress.com.br",
    endereco: "Rua Transporte, 654",
    cidade: "Porto Alegre",
    estado: "RS",
    cep: "90345-901",
    setor: "Logística",
    dataFundacao: "2018-09-30",
    numeroFuncionarios: 150,
    faturamentoAnual: 7500000.00,
    ativo: true,
    observacoes: "Empresa de transporte e logística"
  },
  {
    cnpj: "78.901.234/0001-56",
    razaoSocial: "Alimentos Naturais S.A.",
    nomeFantasia: "Natural Food",
    telefone: "(85) 92109-8765",
    email: "vendas@naturalfood.com.br",
    endereco: "Av. Orgânica, 987",
    cidade: "Fortaleza",
    estado: "CE",
    cep: "60456-012",
    setor: "Alimentos",
    dataFundacao: "2016-04-18",
    numeroFuncionarios: 45,
    faturamentoAnual: 3200000.00,
    ativo: true,
    observacoes: "Produção de alimentos orgânicos"
  },
  {
    cnpj: "89.012.345/0001-67",
    razaoSocial: "Construção Civil Master Ltda",
    nomeFantasia: "Master Construções",
    telefone: "(62) 91098-7654",
    email: "obras@masterconstrucoes.com.br",
    endereco: "Setor Industrial, Quadra 10",
    cidade: "Goiânia",
    estado: "GO",
    cep: "74567-123",
    setor: "Construção Civil",
    dataFundacao: "2007-12-05",
    numeroFuncionarios: 180,
    faturamentoAnual: 9800000.00,
    ativo: true,
    observacoes: "Construtora de médio porte"
  },
  {
    cnpj: "90.123.456/0001-78",
    razaoSocial: "Consultoria Empresarial Pro S.A.",
    nomeFantasia: "Pro Consultoria",
    telefone: "(61) 90987-6543",
    email: "contato@proconsultoria.com.br",
    endereco: "SCS Quadra 2, Bloco C",
    cidade: "Brasília",
    estado: "DF",
    cep: "70302-234",
    setor: "Consultoria",
    dataFundacao: "2019-06-12",
    numeroFuncionarios: 30,
    faturamentoAnual: 2100000.00,
    ativo: true,
    observacoes: "Consultoria em gestão empresarial"
  },
  {
    cnpj: "01.234.567/0001-89",
    razaoSocial: "Moda e Estilo Ltda",
    nomeFantasia: "Fashion Style",
    telefone: "(48) 99876-5432",
    email: "vendas@fashionstyle.com.br",
    endereco: "Rua da Moda, 159",
    cidade: "Florianópolis",
    estado: "SC",
    cep: "88015-345",
    setor: "Moda",
    dataFundacao: "2014-08-22",
    numeroFuncionarios: 40,
    faturamentoAnual: 1500000.00,
    ativo: true,
    observacoes: "Boutique de roupas e acessórios"
  }
];

// Função para filtrar empresa por CNPJ
function filtrarPorCNPJ(cnpj) {
  return empresas.find(empresa => empresa.cnpj === cnpj);
}

// Função para editar telefone passando CNPJ como identificador
function editarTelefone(cnpj, novoTelefone) {
  const empresa = empresas.find(emp => emp.cnpj === cnpj);
  
  if (empresa) {
    empresa.telefone = novoTelefone;
    return { sucesso: true, mensagem: "Telefone atualizado com sucesso", empresa };
  }
  
  return { sucesso: false, mensagem: "Empresa não encontrada" };
}

// Função para excluir empresa por CNPJ
function excluirPorCNPJ(cnpj) {
  const indice = empresas.findIndex(empresa => empresa.cnpj === cnpj);
  
  if (indice !== -1) {
    const empresaRemovida = empresas.splice(indice, 1);
    return { sucesso: true, mensagem: "Empresa excluída com sucesso", empresa: empresaRemovida[0] };
  }
  
  return { sucesso: false, mensagem: "Empresa não encontrada" };
}

// Exemplos de uso:
 console.log(filtrarPorCNPJ("12.345.678/0001-90"));
// console.log(editarTelefone("12.345.678/0001-90", "(11) 99999-8888"));
// console.log(excluirPorCNPJ("12.345.678/0001-90"));