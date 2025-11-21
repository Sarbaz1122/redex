
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

    // ✅ EDIT FUNCTION (correct place)
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.items.find((item) => item.id === id);
      if (todo) {
        todo.text = newText;
      }
    }
  },
});

// ✅ Make sure to export updateTodo here
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
