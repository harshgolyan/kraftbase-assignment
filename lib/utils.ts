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
                name: "Sample Draft",
                difficulty: "low",
                tag: "code",
                assignedTo: "Harsh",
            },
            {
                id: "#1111",
                date: "2 Jan, 4:30 PM",
                name: "Sample Draft",
                difficulty: "low",
                tag: "code",
                assignedTo: "Harsh",
            },
        ],
    },
    {
        id: "unsolved",
        name: "Unsolved",
        color: "bg-blue",
        tasks: [
            {
                id: "#2222",
                date: "3 Jan, 6:00 PM",
                name: "Bug #42",
                difficulty: "high",
                tag: "getastra",
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
                id: "#2222",
                date: "3 Jan, 6:00 PM",
                name: "Bug #42",
                difficulty: "high",
                tag: "getastra",
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
                id: "#2222",
                date: "3 Jan, 6:00 PM",
                name: "Bug #42",
                difficulty: "high",
                tag: "getastra",
                assignedTo: "Alice",
            },
        ],
    },
    {
        id: "attention",
        name: "Need Attention",
        color: "bg-red",
        tasks: [
            {
                id: "#2222",
                date: "3 Jan, 6:00 PM",
                name: "Bug #42",
                difficulty: "high",
                tag: "getastra",
                assignedTo: "Alice",
            },
        ],
    },
];
