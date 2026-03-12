import { NavLink } from "react-router-dom";

function InstructorSidebar() {
    return (
        <div className="w-64 bg-blue-700 text-white p-5">

            <h2 className="text-xl font-bold mb-6">
                Instructor Panel
            </h2>

            <nav className="space-y-3">

                <NavLink to="/instructor-dashboard" className="block hover:text-gray-200">
                    Dashboard
                </NavLink>

                <NavLink to="/instructor-dashboard/courses" className="block hover:text-gray-200">
                    Manage Courses
                </NavLink>

                <NavLink to="/instructor-dashboard/students" className="block hover:text-gray-200">
                    Students
                </NavLink>

                <NavLink to="/instructor-dashboard/grades" className="block hover:text-gray-200">
                    Enter Marks
                </NavLink>

            </nav>

        </div>
    );
}

export default InstructorSidebar;