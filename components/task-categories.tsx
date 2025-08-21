"use client";

import { useDroppable } from "@dnd-kit/core";
import { IconDots, IconPlus } from "@tabler/icons-react";
import Cards from "./cards";
import { Category } from "@/types/category";
import TaskModal from "./task-modal";
import { useState } from "react";

export default function TaskCategories({
    categories,
}: {
    categories: Category[];
}) {
    const [isAddOpen, setIsAddOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  return (
    <>
      <div className="flex items-start gap-8 mb-4">
        {categories.map((category) => (
          <CategoryColumn
            key={category.id}
            category={category}
            onAdd={() => {
              setActiveCategoryId(category.id);
              setIsAddOpen(true);
            }}
          />
        ))}
      </div>

      {isAddOpen && activeCategoryId && (
        <TaskModal
          categoryId={activeCategoryId}
          onClose={() => {
            setIsAddOpen(false);
            setActiveCategoryId(null);
          }}
        />
      )}
    </>
  );
}

function CategoryColumn({ category, onAdd }: { category: Category; onAdd: () => void }) {
    const { setNodeRef } = useDroppable({ id: category.id });

    return (
        <div
            ref={setNodeRef}
            className="flex flex-col min-w-[16rem] bg-white rounded-lg p-3"
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm">
                    <div className={`h-1 w-1 ${category.color} rounded-full`} />
                    <div className="font-medium text-primary">
                        {category.name}
                    </div>
                    <div className="font-medium text-subheading">
                        {category.tasks.length}
                    </div>
                </div>
                <div className="flex items-center gap-2 text-subheading">
                    <IconDots size={20} className="cursor-pointer hover:bg-secondary rounded-full" />
                    <IconPlus size={20} className="cursor-pointer hover:bg-secondary rounded-full" onClick={onAdd} />
                </div>
            </div>

            <Cards tasks={category.tasks} />
        </div>
    );
}
