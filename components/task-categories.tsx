"use client";

import { useDroppable } from "@dnd-kit/core";
import { IconDots, IconPlus } from "@tabler/icons-react";
import Cards from "./cards";

export default function TaskCategories({
  categories,
}: {
  categories: { id: string; name: string; tasks: { id: string; title: string }[] }[];
}) {
  return (
    <div className="flex items-start gap-8 mb-4">
      {categories.map((category) => (
        <CategoryColumn key={category.id} category={category} />
      ))}
    </div>
  );
}

function CategoryColumn({
  category,
}: {
  category: { id: string; name: string; tasks: { id: string; title: string }[] };
}) {
  const { setNodeRef } = useDroppable({ id: category.id });

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col min-w-[16rem] bg-white rounded-lg p-3"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-sm">
          <div className="size-1 bg-primary rounded-full"></div>
          <div className="font-medium text-primary">{category.name}</div>
          <div className="font-medium text-subheading">{category.tasks.length}</div>
        </div>
        <div className="flex items-center gap-2 text-subheading">
          <IconDots size={20} />
          <IconPlus size={20} />
        </div>
      </div>

      <Cards tasks={category.tasks} />
    </div>
  );
}
