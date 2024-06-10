// Contatos Reducer (contatosSlice.js)
import { createSlice } from '@reduxjs/toolkit';

let nextContatoId = 1;

const initialState = {
  contatos: [],
};

export const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: (state, action) => {
      const { nome, email, telefone } = action.payload;
      state.contatos.push({
        id: nextContatoId++,
        nome,
        email,
        telefone,
      });
    },
    editarContato: (state, action) => {
      const { id, nome, email, telefone } = action.payload;
      const contato = state.contatos.find(contato => contato.id === id);
      if (contato) {
        contato.nome = nome;
        contato.email = email;
        contato.telefone = telefone;
      }
    },
    deletarContato: (state, action) => {
      const id = action.payload;
      state.contatos = state.contatos.filter(contato => contato.id !== id);
    },
  },
});

export const { adicionarContato, editarContato, deletarContato } = contatosSlice.actions;

export default contatosSlice.reducer;








