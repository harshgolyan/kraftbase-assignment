import TaskCategories from "./task-categories"

const categories = [
    {name: "Draft", count: 0 },
    {name: "Unsolved", count: 0 },
    {name: "Under review", count: 0 },
    {name: "Solved", count: 0 },
    {name: "Needed", count: 0 }
];

export default function Tasks () {
    return (
        <>
            <div className="overflow-scroll">
                <TaskCategories categories={categories} />
            </div>
        </>
    )
}