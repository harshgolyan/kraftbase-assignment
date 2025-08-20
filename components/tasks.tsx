"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import TaskCategories from "./task-categories";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store/store";
import { moveTask } from "@/store/slices/categorySlice";

export default function Tasks() {
    const categories = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch();

    // console.log("Categories:", categories);
    
    const handleDragEnd = (e: DragEndEvent) => {
        const { active, over } = e;
        if (!over) return;

        const fromCategories = categories.find((c) =>
            c.tasks.some((t) => t.id === active.id)
        );
        const toCategories = categories.find((c) => c.id === over.id);

        // console.log("From Categories:", fromCategories, "To Categories:", toCategories);
        
        if (fromCategories && toCategories && fromCategories.id !== toCategories.id) {
            dispatch(
                moveTask({
                    taskId: active.id as string,
                    fromCategoryId: fromCategories.id,
                    toCategoryId: toCategories.id,
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
