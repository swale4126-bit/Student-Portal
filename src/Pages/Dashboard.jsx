import { useNavigate, NavLink, Routes, Route } from "react-router-dom";
import Overview from "./Overview";
import Courses from "./Courses";
import Assignments from "./Assignments";
import Messages from "./Messages";
import Profile from "./Profile";
import Grades from "./Grades";


function Dashboard({ setIsAuthenticated }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate("/");
    };

    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* ================= SIDEBAR ================= */}
            <div className="w-64 bg-blue-700 text-white p-6">

                <h2 className="text-2xl font-bold mb-8">
                    Student Portal
                </h2>

                {/* NavLink automatically detects active route */}
                <ul className="space-y-4">

                    <li>
                        <NavLink
                            to="/dashboard"
                            end
                            className={({ isActive }) =>
                                isActive ? "font-bold text-yellow-300" : ""
                            }
                        >
                            Overview
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/profile"
                            className={({ isActive }) =>
                                isActive ? "font-bold text-yellow-300" : ""
                            }
                        >
                            Profile
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/dashboard/courses"
                            className={({ isActive }) =>
                                isActive ? "font-bold text-yellow-300" : ""
                            }
                        >
                            Courses
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/dashboard/assignments"
                            className={({ isActive }) =>
                                isActive ? "font-bold text-yellow-300" : ""
                            }
                        >
                            Assignments
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/dashboard/messages"
                            className={({ isActive }) =>
                                isActive ? "font-bold text-yellow-300" : ""
                            }
                        >
                            Messages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/grades"
                            className={({ isActive }) =>
                                isActive ? "font-bold text-yellow-300" : ""
                            }
                        >
                            Grades
                        </NavLink>
                    </li>


                </ul>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div className="flex-1 p-8">

                {/* Top bar */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-semibold">
                        Dashboard
                    </h1>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>

                {/* Nested Routes */}
                <Routes>
                    <Route index element={<Overview />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="courses" element={<Courses />} />
                    <Route path="assignments" element={<Assignments />} />
                    <Route path="messages" element={<Messages />} />
                    <Route path="grades" element={<Grades />} />

                </Routes>


            </div>

        </div>
    );
}

export default Dashboard;
