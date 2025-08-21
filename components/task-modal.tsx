
"use client";

import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { addTask, updateTask, deleteTask } from "@/store/slices/categorySlice";
import type { Task } from "@/types/category";
import { motion } from "motion/react";
import { IconX } from "@tabler/icons-react";

function formatDate(date: Date) {
  return date.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export default function TaskModal({
  categoryId,
  onClose,
  task,
}: {
  categoryId: string;
  onClose: () => void;
  task?: Task;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.tasks);

  const categoryIndex = categories.findIndex((c) => c.id === categoryId);
  const category = categories[categoryIndex];
  const existingCount = category?.tasks.length ?? 0;

  const [name, setName] = useState(task?.name ?? "");
  const [date, setDate] = useState(task?.date ?? formatDate(new Date()));
  const [difficulty, setDifficulty] = useState<Task["difficulty"]>(
    task?.difficulty ?? "low"
  );
  const [tag, setTag] = useState<Task["tag"]>(task?.tag ?? "code");
  const [assignedTo, setAssignedTo] = useState(task?.assignedTo ?? "");

  const isValid = useMemo(() => name.trim().length > 0, [name]);

  const generatedId = `#${String(categoryIndex + 1).repeat(3)}${existingCount + 1}`;

  const handleAddOrUpdate = () => {
    if (!isValid || categoryIndex === -1) return;

    const newTask: Task = {
      id: task?.id ?? generatedId,
      date,
      name: name.trim(),
      difficulty,
      tag,
      assignedTo: assignedTo.trim(),
    };

    if (task) {
      dispatch(updateTask({ categoryId, task: newTask }));
    } else {
      dispatch(addTask({ categoryId, task: newTask }));
    }

    onClose();
  };

  const handleDelete = () => {
    if (task) {
      dispatch(deleteTask({ categoryId, taskId: task.id }));
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{
            y: "-100vh",
            opacity: 0,
        }}
        animate={{
            y: 0,
            opacity: 1,
        }}
        transition={{
            duration: 0.3,
            ease: "easeInOut",
            type: "spring",
            stiffness: 300,
            damping: 30,
        }}
        className="bg-white w-full max-w-md rounded-xl p-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">
            {task ? "Update Task" : "Add Task"}
          </h2>
          <button className="text-sm text-subheading hover:text-primary" onClick={onClose}>
            <IconX size={24} />
          </button>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Name *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Task title"
              className="w-full border border-border rounded-lg px-3 py-2 outline-none focus:ring-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Task ID</label>
            <input
              value={task?.id ?? generatedId}
              disabled
              className="w-full border border-border rounded-lg px-3 py-2 bg-gray-100 text-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-border rounded-lg px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">Difficulty</label>
              <select
                value={difficulty}
                onChange={(e) =>
                  setDifficulty(e.target.value as Task["difficulty"])
                }
                className="w-full border border-border rounded-lg px-3 py-2"
              >
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
                <option value="critical">critical</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Tag</label>
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value as Task["tag"])}
                className="w-full border border-border rounded-lg px-3 py-2"
              >
                <option value="code">code</option>
                <option value="getastra">getastra</option>
                <option value="hypejab">hypejab</option>
                <option value="others">others</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Assigned To</label>
            <input
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              placeholder="person@company.com"
              className="w-full border border-border rounded-lg px-3 py-2 outline-none focus:ring-2"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            className="px-3 py-1.5 rounded-lg border border-border"
            onClick={onClose}
          >
            Cancel
          </button>
          {task && (
            <button
              className="px-3 py-1.5 rounded-lg bg-red-500 text-white"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
          <button
            disabled={!isValid}
            className={`px-3 py-1.5 rounded-lg text-white ${
              isValid ? "bg-primary" : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={handleAddOrUpdate}
          >
            {task ? "Update Task" : "Add Task"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
