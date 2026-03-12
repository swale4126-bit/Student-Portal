import { useState, useEffect } from "react";

function ManageCourses() {

    // ===============================
    // React state to store courses
    // ===============================
    const [courses, setCourses] = useState([]);

    // ===============================
    // State for new course input
    // ===============================
    const [newCourse, setNewCourse] = useState("");

    // ===============================
    // Load courses from localStorage
    // (runs when page loads)
    // ===============================
    useEffect(() => {
        const savedCourses = localStorage.getItem("courses");

        if (savedCourses) {
            setCourses(JSON.parse(savedCourses));
        }
    }, []);

    // ===============================
    // Save courses whenever they change
    // ===============================
    useEffect(() => {
        localStorage.setItem("courses", JSON.stringify(courses));
    }, [courses]);

    // ===============================
    // Add new course
    // ===============================
    const addCourse = () => {

        if (newCourse.trim() === "") return;

        setCourses([...courses, newCourse]);

        setNewCourse("");
    };

    // ===============================
    // Remove course
    // ===============================
    const removeCourse = (index) => {

        const updatedCourses = courses.filter(
            (_, i) => i !== index
        );

        setCourses(updatedCourses);
    };

    return (
        <div className="p-6">

            {/* Page title */}
            <h1 className="text-2xl font-bold mb-6">
                Manage Courses
            </h1>

            {/* Add course section */}
            <div className="flex gap-3 mb-6">

                <input
                    type="text"
                    placeholder="Enter course name"
                    value={newCourse}
                    onChange={(e) => setNewCourse(e.target.value)}
                    className="border p-2 rounded w-64"
                />

                <button
                    onClick={addCourse}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Add Course
                </button>

            </div>

            {/* Course list */}
            <div className="space-y-3">

                {courses.length === 0 ? (
                    <p className="text-gray-500">
                        No courses added yet.
                    </p>
                ) : (
                    courses.map((course, index) => (

                        <div
                            key={index}
                            className="flex justify-between items-center bg-white shadow p-3 rounded"
                        >

                            {/* Course name */}
                            <span>{course}</span>

                            {/* Delete button */}
                            <button
                                onClick={() => removeCourse(index)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Remove
                            </button>

                        </div>

                    ))
                )}

            </div>

        </div>
    );
}

export default ManageCourses;