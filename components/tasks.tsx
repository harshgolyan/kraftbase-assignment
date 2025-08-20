"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import TaskCategories from "./task-categories";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store/store";
import { moveTask } from "@/store/slices/categorySlice";

export default function Tasks() {
  const categories = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over) return;

    const fromCat = categories.find((c) =>
      c.tasks.some((t) => t.id === active.id)
    );
    const toCat = categories.find((c) => c.id === over.id);

    if (fromCat && toCat && fromCat.id !== toCat.id) {
      dispatch(
        moveTask({
          taskId: active.id as string,
          fromCategoryId: fromCat.id,
          toCategoryId: toCat.id,
        })
      );
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden min-h-[30rem] h-auto overflow-x-scroll">
        <TaskCategories categories={categories} />
      </div>
    </DndContext>
  );
}
