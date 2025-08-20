"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import TaskCategories from "./task-categories";

const initialCategories = [
  { id: "draft", name: "Draft", tasks: [{ id: "t1", title: "Sample Draft" }] },
  { id: "unsolved", name: "Unsolved", tasks: [{ id: "t2", title: "Bug #42" }] },
  { id: "review", name: "Under review", tasks: [] },
  { id: "solved", name: "Solved", tasks: [] },
  { id: "attention", name: "Need Attention", tasks: [] },
];

export default function Tasks() {
  const [categories, setCategories] = useState(initialCategories);

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;

    if (!over) return;

    const fromCategories = categories.find((c) =>
      c.tasks.some((t) => t.id === active.id)
    );
    const toCategories = categories.find((c) => c.id === over.id);

    console.log("from ->", fromCategories, "to ->", toCategories);
    

    if (!fromCategories || !toCategories) return;

    if (fromCategories.id !== toCategories.id) {
      const task = fromCategories.tasks.find((t) => t.id === active.id)!;
      setCategories((prev) =>
        prev.map((cat) => {
          if (cat.id === fromCategories.id) {
            return { ...cat, tasks: cat.tasks.filter((t) => t.id !== task.id) };
          }
          if (cat.id === toCategories.id) {
            return { ...cat, tasks: [...cat.tasks, task] };
          }
          return cat;
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
