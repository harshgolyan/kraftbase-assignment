import { IconDots, IconPlus } from "@tabler/icons-react";
import Cards from "./cards";

export default function TaskCategories({
    categories,
}: {
    categories: { name: string; count: number }[];
}) {
    return (
        <>
            <div className="flex items-center gap-8 justify-between mb-4">
                {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between min-w-[16rem]">
                        <div className="flex items-center gap-2 text-sm">
                            <div className="size-1 bg-primary flex items-center justify-center rounded-full"></div>
                            <div className="font-medium text-primary">
                                {category.name}
                            </div>
                            <div className="font-medium text-subheading">{category.count}</div>
                        </div>
                        <div className="flex items-center gap-2 text-subheading">
                            <IconDots size={20} />
                            <IconPlus size={20} />
                        </div>
                    </div>
                ))}
            </div>
                <Cards />
        </>
    );
}
