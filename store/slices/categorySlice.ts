
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Task } from "@/types/category";
import { taskCategories } from "@/lib/utils";

const initialState: Category[] = taskCategories;

interface MoveTaskPayload {
  taskId: string;
  fromCategoryId: string;
  toCategoryId: string;
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ categoryId: string; task: Task }>) => {
      const { categoryId, task } = action.payload;
      const category = state.find(c => c.id === categoryId);
      if (category) category.tasks.push(task);
    },
    updateTask: (state, action: PayloadAction<{ categoryId: string; task: Task }>) => {
      const { categoryId, task } = action.payload;
      const category = state.find(c => c.id === categoryId);
      if (category) {
        const index = category.tasks.findIndex(t => t.id === task.id);
        if (index !== -1) category.tasks[index] = task;
      }
    },
    moveTask: (state, action: PayloadAction<MoveTaskPayload>) => {
      const { taskId, fromCategoryId, toCategoryId } = action.payload;
      if (fromCategoryId === toCategoryId) return;

      const fromCat = state.find((c) => c.id === fromCategoryId);
      const toCat = state.find((c) => c.id === toCategoryId);
      if (!fromCat || !toCat) return;

      const task = fromCat.tasks.find((t) => t.id === taskId);
      if (!task) return;

      fromCat.tasks = fromCat.tasks.filter((t) => t.id !== taskId);
      toCat.tasks.push(task);
    },
    deleteTask: (state, action: PayloadAction<{ categoryId: string; taskId: string }>) => {
      const { categoryId, taskId } = action.payload;
      const category = state.find(c => c.id === categoryId);
      if (category) {
        category.tasks = category.tasks.filter(t => t.id !== taskId);
      }
    }
  }
});

export const { addTask, updateTask, deleteTask, moveTask } = categoriesSlice.actions;
export default categoriesSlice.reducer;
