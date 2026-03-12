import { useState, useEffect } from "react";

function ManageCourses() {

    const [course, setCourse] = useState("");
    const [courses, setCourses] = useState([]);

    // Load courses when page opens
    useEffect(() => {

        const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];

        setCourses(storedCourses);

    }, []);

    // Add new course
    const addCourse = () => {

        if (!course) return;

        const newCourses = [...courses, course];

        setCourses(newCourses);

        localStorage.setItem("courses", JSON.stringify(newCourses));

        setCourse("");

    };

    return (

        <div>

            <h1 className="text-2xl font-bold mb-6">
                Manage Courses
            </h1>

            <div className="flex gap-3 mb-6">

                <input
                    type="text"
                    placeholder="Course Name"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="border p-2 rounded w-60"
                />

                <button
                    onClick={addCourse}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Add Course
                </button>

            </div>

            <ul className="space-y-3">

                {courses.map((c, index) => (

                    <li
                        key={index}
                        className="bg-white p-4 rounded shadow"
                    >
                        {c}
                    </li>

                ))}

            </ul>

        </div>

    );

}

export default ManageCourses;