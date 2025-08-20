"use client";

import { useDraggable } from "@dnd-kit/core";
import { IconStar, IconRosetteDiscountCheck, IconLoader } from "@tabler/icons-react";
import { Task } from "@/types/category";

export default function Cards({ tasks }:{tasks: Task[]}) {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

function TaskCard({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-[16rem] border border-border rounded-lg p-3 bg-white shadow cursor-grab active:cursor-grabbing"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-subheading">
          <div className="font-medium">#{task.id}</div>
          <div className="text-sm flex items-center gap-1">
            <div className="h-1 w-1 rounded-full bg-subheading" />
            {task.date}
          </div>
        </div>
        <IconStar size={20} className="fill-secondary text-secondary" />
      </div>
      <div className="font-semibold text-lg mt-1">{task.name}</div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1 text-sm flex-wrap">
          <div className="border px-1 border-border rounded-full font-medium">{task.difficulty}</div>
          <div className="border px-1 border-border rounded-full font-medium">{task.tag}</div>
          <div className="flex items-center gap-1 text-subheading font-medium">
            <IconLoader size={18} />
            5.0
          </div>
        </div>
        <IconRosetteDiscountCheck
          size={25}
          className="text-white fill-secondary min-w-4"
        />
      </div>
    </div>
  );
}
