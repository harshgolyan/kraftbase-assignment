import Heading from "@/components/heading";
import Tasks from "@/components/tasks";
import Toolbar from "@/components/toolbar";

export default function Home () {
  return (
    <>
      <div className="max-w-6xl border-2 border-border rounded-xl mx-auto mt-20 px-4 pt-8 h-[30rem]">
        <Heading />
        <Toolbar />
        <Tasks />
      </div>
    </>
  )
}