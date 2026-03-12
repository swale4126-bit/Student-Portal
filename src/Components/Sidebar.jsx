import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className="w-64 bg-blue-700 text-white p-5">

            <h2 className="text-xl font-bold mb-6">
                Student Portal
            </h2>

            <nav className="space-y-3">

                <NavLink to="/student-dashboard" className="block">
                    Dashboard
                </NavLink>

                <NavLink to="/student-dashboard/courses" className="block">
                    Courses
                </NavLink>

                <NavLink to="/student-dashboard/grades" className="block">
                    Grades
                </NavLink>

                <NavLink to="/student-dashboard/profile" className="block">
                    Profile
                </NavLink>

            </nav>

        </div>
    );
}

export default Sidebar;