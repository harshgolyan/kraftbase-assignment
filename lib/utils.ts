import { Category } from "@/types/category";

export const taskCategories: Category[] = [
    {
        id: "draft",
        name: "Draft",
        color: "bg-subheading",
        tasks: [
            {
                id: "#1111",
                date: "2 Jan, 4:30 PM",
                name: "Server Side Template Rendering",
                difficulty: "low",
                tag: "hypejab",
                assignedTo: "Harsh",
            },
            {
                id: "#1112",
                date: "4 Jan, 4:30 PM",
                name: ".env credentials exposed",
                difficulty: "medium",
                tag: "getastra",
                assignedTo: "Bob",
            },
        ],
    },
    {
        id: "unsolved",
        name: "Unsolved",
        color: "bg-blue",
        tasks: [
            {
                id: "#2221",
                date: "3 Jan, 6:00 PM",
                name: "Hydration Error on CS",
                difficulty: "high",
                tag: "code",
                assignedTo: "Alice",
            },
        ],
    },
    {
        id: "review",
        name: "Under review",
        color: "bg-orange",
        tasks: [
            {
                id: "#3333",
                date: "3 Jan, 6:00 PM",
                name: "PII disclosure in logs",
                difficulty: "low",
                tag: "others",
                assignedTo: "Alice",
            },
        ],
    },
    {
        id: "solved",
        name: "Solved",
        color: "bg-green",
        tasks: [
            {
                id: "#4444",
                date: "3 Jan, 6:00 PM",
                name: "Signup flow fixed",
                difficulty: "medium",
                tag: "code",
                assignedTo: "Harsh",
            },
        ],
    },
    {
        id: "attention",
        name: "Need Attention",
        color: "bg-red",
        tasks: [
            {
                id: "#5555",
                date: "3 Jan, 6:00 PM",
                name: "jwt secret exposed",
                difficulty: "low",
                tag: "hypejab",
                assignedTo: "Bob",
            },
        ],
    },
];
