import { useEffect, useState } from "react";

function Courses() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];

        setCourses(storedCourses);

    }, []);

    return (

        <div>

            <h1 className="text-2xl font-bold mb-6">
                My Courses
            </h1>

            {courses.length === 0 ? (

                <p>No courses available</p>

            ) : (

                <div className="grid grid-cols-3 gap-6">

                    {courses.map((course, index) => (

                        <div
                            key={index}
                            className="bg-white p-6 rounded shadow"
                        >

                            <h2 className="text-lg font-semibold">
                                {course}
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Course description
                            </p>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );

}

export default Courses;