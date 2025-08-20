"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signin() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!validateEmail(email)) {
            setError("Please enter a valid email.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }
        if (email === "test@gmail.com" && password === "Test@123#") {
            localStorage.setItem("isAuthenticated", "true");
            router.push("/board");
        } else {
            setError("Invalid email or password.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-secondary">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-subheading mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-subheading"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-subheading mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-subheading"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>

                    {error && (
                        <p className="text-red text-sm font-medium">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary/90 font-semibold transition cursor-pointer"
                    >
                        Sign In
                    </button>
                </form>
            </div>
            <div className="mt-4 w-full bg-white rounded-xl max-w-md p-4 font-semibold text-lg">
                Note: User Credentials are
                <div className="font-medium text-sm">Email: test@gmail.com</div>
                <div className="font-medium text-sm">Password: Test@123#</div>
            </div>
        </div>
    );
}
