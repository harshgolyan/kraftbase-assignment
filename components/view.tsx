import { IconColumns3, IconList } from "@tabler/icons-react";


export default function Views () {
    return (
        <>
            <div className="flex items-center text-subheading border-2 px-2 font-medium border-border rounded-lg divide-x-2 divide-border">
                <div className="flex items-center gap-2 text-primary py-1 pr-1">
                    <IconColumns3 />
                    Board
                </div>
                <div className="flex items-center gap-2 text-subheading py-1 pl-2">
                    <IconList />
                    List
                </div>
            </div>
        </>
    )
}