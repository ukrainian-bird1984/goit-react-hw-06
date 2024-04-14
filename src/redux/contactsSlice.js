import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  // Ім'я слайсу
  name: "tasks",
  // Початковий стан редюсера слайсу
  initialState: [],
  // Об'єкт редюсерів
  reducers: {
    addTask(state, action) {},
    deleteTask(state, action) {},
    toggleCompleted(state, action) {},
  },
});

// Генератори екшенів
const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

// Редюсер слайсу
const tasksReducer = tasksSlice.reducer;
