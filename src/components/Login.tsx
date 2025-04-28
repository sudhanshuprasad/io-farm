"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Login = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });

    // Simple toast implementation
    const [toast, setToast] = useState<{ visible: boolean, title: string, description: string }>({
        visible: false,
        title: "",
        description: "",
    });

    const showToast = (title: string, description: string) => {
        setToast({ visible: true, title, description });
        setTimeout(() => {
            setToast(prev => ({ ...prev, visible: false }));
        }, 3000);
    };

    const validateForm = () => {
        const newErrors = { email: "", password: "" };
        let isValid = true;

        if (!email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
            isValid = false;
        }

        if (!password) {
            newErrors.password = "Password is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        if(password !== "Admin@kit1234") {
            setTimeout(() => {
                setIsLoading(false);
                showToast("Login failed", "Invalid email or password");
                // router.push("/farmer");
            }, 500);
            return;
        }

        setIsLoading(true);

        // Simulate login - replace with actual authentication when connected to backend
        setTimeout(() => {
            setIsLoading(false);
            showToast("Login successful!", "Welcome to your KIIT Bus Tracker");
            router.push("/bus-tracker");
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-100">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-lg rounded-lg border border-gray-200">
                    <div className="px-6 py-4 text-center">
                        <h2 className="text-3xl font-bold">Welcome Back to KIIT Bus Tracker</h2>
                        <p className="text-gray-500 text-sm mt-2">
                            Sign in to access your KIIT Bus Tracker device dashboard
                        </p>
                    </div>

                    <div className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <div className="relative">
                                    <div className="absolute left-3 top-2.5 h-5 w-5 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect width="20" height="16" x="2" y="4" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="email"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-sm font-medium text-red-500">{errors.email}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium">Password</label>
                                <div className="relative">
                                    <div className="absolute left-3 top-2.5 h-5 w-5 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 11v-1a5 5 0 0 1 10 0v1" />
                                            <rect width="18" height="12" x="3" y="11" rx="2" />
                                            <path d="M8 11v-1a4 4 0 0 1 8 0v1" />
                                        </svg>
                                    </div>
                                    <input
                                        id="password"
                                        type="password"
                                        className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                    />
                                </div>
                                {errors.password && (
                                    <p className="text-sm font-medium text-red-500">{errors.password}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className={`w-full rounded-md bg-blue-600 py-2 px-4 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? "Signing in..." : "Sign in"}
                            </button>
                        </form>
                    </div>

                    <div className="px-6 pb-6 flex flex-col space-y-4">
                        <div className="text-center text-sm">
                            <a href="#" className="text-blue-600 hover:underline">
                                Forgot your password?
                            </a>
                        </div>
                        <div className="text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <button
                                className="text-blue-600 hover:underline font-medium"
                                onClick={() => router.push("/register")}
                            >
                                Create one
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simple toast implementation */}
            {toast.visible && (
                <div className="fixed top-4 right-4 w-72 bg-white rounded-lg border border-gray-200 shadow-lg p-4 transition-all">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-medium">{toast.title}</h3>
                            <p className="text-sm text-gray-500">{toast.description}</p>
                        </div>
                        <button
                            onClick={() => setToast(prev => ({ ...prev, visible: false }))}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;