import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmpresaTable from './components/EmpresaTable';
import EmpresaModal from './components/EmpresaModal';
import Input from './components/Input';
import Button from './components/Button';
import Footer from './components/Footer';
import useDebounce from './hooks/useDebounce';
import { theme } from './theme/colors';

const API_URL = 'http://localhost:3000/api/empresas';

function App() {
  const [empresas, setEmpresas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmpresa, setEditingEmpresa] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchCnpj, setSearchCnpj] = useState('');
  const debouncedSearchCnpj = useDebounce(searchCnpj, 3000);

  useEffect(() => {
    fetchEmpresas();
  }, []);

  useEffect(() => {
    fetchEmpresas(debouncedSearchCnpj);
  }, [debouncedSearchCnpj]);

  const fetchEmpresas = async (cnpj = '') => {
    try {
      setLoading(true);
      const url = cnpj ? `${API_URL}?cnpj=${encodeURIComponent(cnpj)}` : API_URL;
      const response = await axios.get(url);
      setEmpresas(response.data);
    } catch (error) {
      console.error('Erro ao buscar empresas:', error);
      alert('Erro ao carregar empresas. Verifique se o backend está rodando.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingEmpresa(null);
    setIsModalOpen(true);
  };

  const handleEdit = (empresa) => {
    setEditingEmpresa(empresa);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta empresa?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchEmpresas();
      } catch (error) {
        console.error('Erro ao excluir empresa:', error);
        alert('Erro ao excluir empresa.');
      }
    }
  };

  const handleSave = async (empresaData) => {
    try {
      if (editingEmpresa) {
        await axios.put(`${API_URL}/${editingEmpresa.id}`, empresaData);
      } else {
        await axios.post(API_URL, empresaData);
      }
      setIsModalOpen(false);
      fetchEmpresas();
    } catch (error) {
      console.error('Erro ao salvar empresa:', error);
      alert('Erro ao salvar empresa.');
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background, paddingBottom: '60px' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-lg shadow-lg p-6" style={{ backgroundColor: theme.colors.surface }}>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold" style={{ color: theme.colors.text.primary }}>Gerenciamento de Empresas</h1>
            <Button onClick={handleCreate} variant="primary">
              + Nova Empresa
            </Button>
          </div>

          <div className="mb-6 max-w-md">
            <Input
              label="Pesquisar por CNPJ"
              type="text"
              value={searchCnpj}
              onChange={(e) => setSearchCnpj(e.target.value)}
              placeholder="Digite o CNPJ para filtrar..."
            />
            {searchCnpj && (
              <p className="text-sm mt-2" style={{ color: theme.colors.text.secondary }}>
                Buscando após 3 segundos sem digitar...
              </p>
            )}
          </div>

          {loading ? (
            <div className="text-center py-8">
              <p style={{ color: theme.colors.text.secondary }}>Carregando...</p>
            </div>
          ) : (
            <>
              {searchCnpj && empresas.length === 0 ? (
                <div className="text-center py-8">
                  <p style={{ color: theme.colors.text.secondary }}>Nenhuma empresa encontrada com o CNPJ informado.</p>
                </div>
              ) : (
                <EmpresaTable
                  empresas={empresas}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              )}
            </>
          )}
        </div>
      </div>

      {isModalOpen && (
        <EmpresaModal
          empresa={editingEmpresa}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
