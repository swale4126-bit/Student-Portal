import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit called", { email, password }); // <-- first log

        let newErrors = {};

        // Email validation
        if (!email) {
            newErrors.email = "Email is required";
        }

        // Password validation
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        // If there are errors, show them
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            console.log("Validation passed — navigating to /dashboard"); // <-- second log
            navigate("/dashboard");
            alert("Login successful!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-96"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
                    Student Login
                </h2>

                {/* Email */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block mb-2 font-semibold">Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
