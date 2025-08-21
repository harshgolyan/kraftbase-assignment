"use client";

import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";
import {
    IconStar,
    IconRosetteDiscountCheck,
    IconLoader,
} from "@tabler/icons-react";
import { Task } from "@/types/category";
import { difficultyColors, tagColors } from "@/types/category";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import TaskModal from "./task-modal";

export default function Cards({ tasks }: { tasks: Task[] }) {
    const searchedValue = useSelector(
        (state: RootState) => state.filters.search
    );
    const label = useSelector((state: RootState) => state.filters.label);
    const categories = useSelector((state: RootState) => state.tasks);
    const sortBy = useSelector((state: RootState) => state.filters.sortBy);

    const [modalTask, setModalTask] = useState<Task | null>(null);
    const [modalCategoryId, setModalCategoryId] = useState<string | null>(null);

    // Filter by search
    const searchFilteredTasks = tasks.filter((task) =>
        task.name.toLowerCase().includes(searchedValue.toLowerCase())
    );

    let finalTasks: Task[] = [];

    if (label === "") {
        finalTasks = searchFilteredTasks;
    } else {
        const category = categories.find(
            (cat) => cat.name.toLowerCase() === label.toLowerCase()
        );
        if (category) {
            finalTasks = searchFilteredTasks.filter((task) =>
                category.tasks.some((catTask: Task) => catTask.id === task.id)
            );
        }
    }

    finalTasks = [...finalTasks].sort((a, b) => {
        if (sortBy === "dateAsc")
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        if (sortBy === "dateDesc")
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        return 0;
    });

    return (
        <>
            <div className="space-y-3">
                {finalTasks.map((task) => {
                    const category = categories.find((cat) =>
                        cat.tasks.some((t) => t.id === task.id)
                    );
                    return category ? (
                        <TaskCard
                            key={task.id}
                            task={task}
                            categoryId={category.id}
                            onEdit={(task, categoryId) => {
                                console.log("onEdit", categoryId, task);
                                setModalTask(task);
                                setModalCategoryId(categoryId);
                            }}
                        />
                    ) : null;
                })}
            </div>

            {modalTask && modalCategoryId && (
                <TaskModal
                    categoryId={modalCategoryId}
                    task={modalTask}
                    onClose={() => {
                        setModalTask(null);
                        setModalCategoryId(null);
                    }}
                />
            )}
        </>
    );
}

function TaskCard({
    task,
    categoryId,
    onEdit,
}: {
    task: Task;
    categoryId: string;
    onEdit: (task: Task, categoryId: string) => void;
}) {
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
            className="w-[16rem] border border-border rounded-lg p-3 bg-white shadow cursor-pointer active:cursor-grabbing"
            onMouseDown={(e) => {
                e.stopPropagation();
                // console.log("Task clicked:", task);
                onEdit(task, categoryId);
            }}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-subheading">
                    <div className="font-medium">{task.id}</div>
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
                    <div
                        className={`border-none text-white px-1 rounded-full font-medium ${
                            difficultyColors[task.difficulty]
                        }`}
                    >
                        {task.difficulty}
                    </div>
                    <div
                        className={`px-1 rounded-full font-medium ${
                            tagColors[task.tag]
                        }`}
                    >
                        {task.tag}
                    </div>
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
