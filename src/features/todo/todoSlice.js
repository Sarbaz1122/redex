

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, text: 'Learn Redux Toolkit' },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: nanoid(),
        text: action.payload,
      });
    },

    removeTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;

