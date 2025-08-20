export interface Task {
    id: string;
    date: string;
    name: string;
    difficulty: "low" | "medium" | "high" | "critical";
    tag: "code" | "getastra" | "hypejab" | "others";
    assignedTo: string;
}

export interface Category {
    id: string;
    name: string;
    color: string;
    tasks: Task[];
}

export const difficultyColors: Record<Task["difficulty"], string> = {
    low: "bg-yellow",
    medium: "bg-orange",
    high: "bg-red",
    critical: "bg-red",
};

export const tagColors: Record<Task["tag"], string> = {
    code: "text-yellow border border-yellow bg-yellow-accent",
    getastra: "text-blue border border-blue bg-blue-accent",
    hypejab: "text-purple border border-purple bg-purple-accent",
    others: "text-primary border border-primary bg-secondary",
};
