import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
  id: number;
  completed: boolean;
  text: string;
}

export interface ITodosSliceState {
  todos: ITodo[];
}

const initialState: ITodosSliceState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: Date.now(),
          completed: false,
          text: action.payload,
        },
      ];
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id !== action.payload) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
