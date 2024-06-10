import React from 'react';

const ContatoList = ({ contatos }) => {
  return (
    <div>
      <h2>Lista de Contatos</h2>
      <ul>
        {contatos.map(contato => (
          <li key={contato.id}>
            <strong>{contato.nome}</strong> - {contato.email} - {contato.telefone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContatoList;
