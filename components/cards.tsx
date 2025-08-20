import { IconStar, IconRosetteDiscountCheck, IconLoader } from "@tabler/icons-react";
export default function Cards() {
    return (
        <>
            <div className="w-[16rem] border border-border rounded-lg p-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-subheading">
                        <div className="font-medium">#1111</div>
                        <div className="text-sm flex items-center gap-1">
                            <div className="h-1 w-1 rounded-full bg-subheading" />
                            3 Jan, 4:30 PM
                        </div>
                    </div>
                    <IconStar scale={20} className="fill-secondary text-secondary" />
                </div>
                <div>this is server issue</div>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1 text-sm">
                        <div className="border px-1 border-border rounded-full">Medium</div>
                        <div className="border px-1 border-border rounded-full">Related</div>
                        <div className="flex items-center gap-1">
                            <IconLoader size={18} />
                            5.0
                        </div>
                    </div>
                    <IconRosetteDiscountCheck size={25} className="text-white fill-secondary min-w-4" />
                </div>
            </div>
        </>
    );
}
