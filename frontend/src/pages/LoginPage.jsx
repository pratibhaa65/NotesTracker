import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            toast.error("Please fill all fields");
            return;
        }
        setLoading(true);

        try {
            const res = await api.post("/users/login", {
                email,
                password,
            });
            
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            
            toast.success("Login successful");

            navigate("/home");
        } catch (error) {
            console.log(error);
            toast.error(
                error.response?.data?.message || "Login failed"
            );
        } finally {
            setLoading(false);
        }
    };

        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
                <div className="card w-full max-w-md bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-center text-sm opacity-70 mb-4">
                            Login to continue managing your notes
                        </p>

                        <form onSubmit={handleSubmit}>
                            {/* Email */}
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Password */}
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    className="input input-bordered"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </form>

                        <p className="text-center text-sm mt-4">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-primary font-medium">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    export default Login;
