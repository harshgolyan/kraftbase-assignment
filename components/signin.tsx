"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/authSlice";
import { AppDispatch } from "@/store/store";

interface FormState {
  email: string;
  password: string;
  error: string;
}

export default function Signin() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    error: "",
  });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      error: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      setForm((prev) => ({ ...prev, error: "Please enter a valid email." }));
      return;
    }

    if (form.password.length < 6) {
      setForm((prev) => ({
        ...prev,
        error: "Password must be at least 6 characters long.",
      }));
      return;
    }

    if (form.email === "test@gmail.com" && form.password === "Test@123#") {
      dispatch(login(form.email));
      router.push("/board");
    } else {
      setForm((prev) => ({
        ...prev,
        error: "Invalid email or password.",
      }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-subheading mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-subheading"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-subheading mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-subheading"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          {form.error && (
            <p className="text-red text-sm font-medium">{form.error}</p>
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
