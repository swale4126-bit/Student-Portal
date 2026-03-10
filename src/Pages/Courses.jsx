import { useState, useEffect } from "react";
import Card from "../Components/Card";


function Courses() {

    // ===============================
    // Courses stored in state (array)
    // ===============================
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const savedCourses = localStorage.getItem("courses");

        if (savedCourses) {
            setCourses(JSON.parse(savedCourses));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("courses", JSON.stringify(courses));
    }, [courses]);



    // State for new course input
    const [newCourse, setNewCourse] = useState("");

    // ===============================
    // Add Course Function
    // ===============================
    const handleAddCourse = () => {
        if (newCourse.trim() === "") return;

        const newItem = {
            id: Date.now(), // unique id
            name: newCourse,
        };

        // Spread old courses + new one
        setCourses([...courses, newItem]);

        setNewCourse(""); // clear input
    };

    // ===============================
    // Remove Course Function
    // ===============================
    const handleDelete = (id) => {
        const updatedCourses = courses.filter(
            (course) => course.id !== id
        );

        setCourses(updatedCourses);
    };

    return (

        <Card title="My Courses" >



            <h2 className="text-2xl font-bold mb-6">
                My Courses
            </h2>

            {/* ================= ADD COURSE SECTION ================= */}

            <div className="flex gap-4 mb-6">

                <input
                    type="text"
                    placeholder="Enter new course"
                    value={newCourse}
                    onChange={(e) => setNewCourse(e.target.value)}
                    className="border px-4 py-2 rounded w-full"
                />

                <button
                    onClick={handleAddCourse}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Add
                </button>

            </div>

            {/* ================= COURSE LIST ================= */}

            <div className="space-y-4">

                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white p-4 rounded shadow flex justify-between items-center"
                    >
                        <span>{course.name}</span>

                        <button
                            onClick={() => handleDelete(course.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                        >
                            Remove
                        </button>

                    </div>
                ))}

            </div>

        </Card>
    );
}

export default Courses;
