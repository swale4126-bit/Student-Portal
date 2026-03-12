import { useEffect, useState } from "react";

function Courses() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        const savedCourses = localStorage.getItem("courses");

        if (savedCourses) {
            setCourses(JSON.parse(savedCourses));
        }

    }, []);

    return (
        <div>

            <h1 className="text-2xl font-bold mb-6">
                My Courses
            </h1>

            {courses.length === 0 ? (
                <p>No courses available</p>
            ) : (

                <div className="grid grid-cols-3 gap-4">

                    {courses.map((course, index) => (

                        <div
                            key={index}
                            className="bg-white shadow p-4 rounded"
                        >

                            {course}

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default Courses;