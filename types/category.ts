

export interface Task {
  id: string;
  date: string;
  name: string;
  difficulty: "low" | "medium" | "high" | "critical";
  tag: string;
  assignedTo: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  tasks: Task[];
}