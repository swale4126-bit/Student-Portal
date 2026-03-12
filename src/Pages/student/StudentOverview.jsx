import { useEffect, useState } from "react";

function StudentOverview() {

    const [courses, setCourses] = useState([]);
    const [grades, setGrades] = useState([]);

    // Load courses from localStorage
    useEffect(() => {

        const savedCourses = localStorage.getItem("courses");

        if (savedCourses) {
            setCourses(JSON.parse(savedCourses));
        }

    }, []);

    // Load grades
    useEffect(() => {

        const savedGrades = localStorage.getItem("grades");

        if (savedGrades) {
            setGrades(JSON.parse(savedGrades));
        }

    }, []);

    return (
        <div>

            <h1 className="text-2xl font-bold mb-6">
                Dashboard Overview
            </h1>

            <div className="grid grid-cols-3 gap-6">

                <div className="bg-white shadow p-5 rounded">
                    <h3 className="text-gray-500">Total Courses</h3>
                    <p className="text-2xl font-bold">{courses.length}</p>
                </div>

                <div className="bg-white shadow p-5 rounded">
                    <h3 className="text-gray-500">Grades Recorded</h3>
                    <p className="text-2xl font-bold">{grades.length}</p>
                </div>

            </div>

        </div>
    );
}

export default StudentOverview;