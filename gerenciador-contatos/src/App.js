import React, { useState } from 'react';
import './App.css';
import ContatoForm from './components/ContatoForm';
import ContatoList from './components/ContatoList';

function App() {
  const [contatos, setContatos] = useState([]);

  const addContato = (contato) => {
    setContatos([...contatos, contato]);
  };

  const editarContato = (id, novoContato) => {
    const novosContatos = contatos.map(contato => (contato.id === id ? novoContato : contato));
    setContatos(novosContatos);
  };

  const deletarContato = (id) => {
    const novosContatos = contatos.filter(contato => contato.id !== id);
    setContatos(novosContatos);
  };

  return (
    <div className="App">
      <h1>Gerenciador de Contatos</h1>
      <ContatoForm addContato={addContato} />
      <ContatoList
        contatos={contatos}
        editarContato={editarContato}
        deletarContato={deletarContato}
      />
    </div>
  );
}

export default App;





