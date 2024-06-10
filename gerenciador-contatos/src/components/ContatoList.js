// ContatoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editarContato, deletarContato } from '../redux/contatosSlice';

const ContatoList = () => {
  const contatos = useSelector(state => state.contatos.contatos);
  const dispatch = useDispatch();

  const handleEdit = (contato) => {
    const novoNome = prompt('Digite o novo nome:', contato.nome);
    const novoEmail = prompt('Digite o novo email:', contato.email);
    const novoTelefone = prompt('Digite o novo telefone:', contato.telefone);
    dispatch(editarContato({ id: contato.id, nome: novoNome, email: novoEmail, telefone: novoTelefone }));
  };

  const handleDelete = (contato) => {
    const confirmarExclusao = window.confirm(`Deseja realmente excluir o contato ${contato.nome}?`);
    if (confirmarExclusao) {
      dispatch(deletarContato(contato.id));
    }
  };

  return (
    <div>
      <h2>Lista de Contatos</h2>
      <ul>
        {contatos.map(contato => (
          <li key={contato.id}>
            <strong>{contato.nome}</strong> - {contato.email} - {contato.telefone}
            <button className="edit" onClick={() => handleEdit(contato)}>Editar</button>
            <button className="delete" onClick={() => handleDelete(contato)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContatoList;



















