
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    return (
        <>
            <div className="max-w-xl mx-auto flex justify-between items-center mt-4 shadow-xs rounded-lg p-2">
                <div className="font-semibold text-2xl">Kanban Board</div>
                <button
                    onClick={() => {
                        localStorage.removeItem("isAuthenticated");
                        router.push("/signin");
                    }}
                    className="px-4 py-2 bg-red text-white font-medium rounded-lg hover:bg-red/90 transition cursor-pointer"
                >
                    Logout
                </button>
            </div>
        </>
    );
}
