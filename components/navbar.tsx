
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/store/slices/authSlice";
import { AppDispatch } from "@/store/store";

export default function Navbar() {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    return (
        <>
            <div className="max-w-xl mx-auto flex justify-between items-center mt-4 shadow-xs rounded-lg p-2 bg-white">
                <div className="font-semibold text-2xl">Kanban Board</div>
                <button
                    onClick={() => {
                        dispatch(logout());
                        router.push("/");
                    }}
                    className="px-4 py-2 bg-red text-white font-medium rounded-lg hover:bg-red/90 transition cursor-pointer"
                >
                    Logout
                </button>
            </div>
        </>
    );
}
