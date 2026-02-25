import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmpresaTable from './components/EmpresaTable';
import EmpresaModal from './components/EmpresaModal';

const API_URL = 'http://localhost:3000/api/empresas';

function App() {
  const [empresas, setEmpresas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmpresa, setEditingEmpresa] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEmpresas();
  }, []);

  const fetchEmpresas = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
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
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Gerenciamento de Empresas</h1>
            <button
              onClick={handleCreate}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              + Nova Empresa
            </button>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-600">Carregando...</p>
            </div>
          ) : (
            <EmpresaTable
              empresas={empresas}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
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
    </div>
  );
}

export default App;
