import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LIMIT_TODOS, TODOS_API } from "../utils/config";

export const getTodos: any = createAsyncThunk(
  "todos/getTodos",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(TODOS_API + LIMIT_TODOS, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        throw new Error("SERVER ERROR!");
      }
      const todos = await response.json();
      return todos;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const createTodo: any = createAsyncThunk(
  "todos/createTodo",
  async function (value: string, { rejectWithValue }) {
    try {
      const response = await fetch(TODOS_API, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ title: value, completed: false }),
      });
      if (!response.ok) {
        throw new Error("SERVER ERROR!");
      }
      const todo = await response.json();
      return todo;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodo: any = createAsyncThunk(
  "todos/deleteTodo",
  async function (value: number, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(TODOS_API + value, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        throw new Error("SERVER ERROR!");
      }
      dispatch(removeTodo(value));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const checkedTodo: any = createAsyncThunk(
  "todos/checkedTodo",
  async function (value: ITodo, { rejectWithValue }) {
    try {
      const response = await fetch(TODOS_API + value.id, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          id: value.id,
          title: value.title,
          completed: value.completed,
        }),
      });
      if (!response.ok) {
        throw new Error("SERVER ERROR!");
      }
      const todo = await response.json();
      console.log(todo);
      return todo;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export interface ITodo {
  id: number;
  completed: boolean;
  title: string;
}

export interface ITodosSliceState {
  todos: ITodo[];
  status: null | string;
  error: null | string;
}

const initialState: ITodosSliceState = {
  todos: [],
  status: null,
  error: null,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: {
    [getTodos.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [createTodo.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [deleteTodo.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [checkedTodo.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getTodos.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.todos = action.payload;
    },
    [createTodo.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.todos = [action.payload, ...state.todos];
    },
    [checkedTodo.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.todos = state.todos.map((todo) => {
        if (todo.title !== action.payload.title ) return todo;
        return {
          ...todo,
          completed: !action.payload.completed,
        };
      });
    },
    [getTodos.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [createTodo.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [deleteTodo.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [checkedTodo.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
