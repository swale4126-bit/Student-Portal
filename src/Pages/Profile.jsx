import { useState, useEffect } from "react";
import Card from "../Components/Card";

function Profile() {

    // ===============================
    // Student Object State
    // ===============================
    const [student, setStudent] = useState({
        name: "Wale Solomon",
        email: "wale@email.com",
        studentId: "3742/16",
        department: "Information System",
        year: "3rd Year"
    });

    // Edit mode toggle
    const [isEditing, setIsEditing] = useState(false);

    // ===============================
    // Handle Input Change (Important)
    // ===============================
    const handleChange = (e) => {
        const { name, value } = e.target;

        setStudent({
            ...student,
            [name]: value
        });
        // ===============================
        // Load saved profile from localStorage
        // ===============================
        useEffect(() => {
            const savedProfile = localStorage.getItem("studentProfile");

            if (savedProfile) {
                setStudent(JSON.parse(savedProfile));
            }
        }, []);
        // ===============================
        // Save profile to localStorage whenever it changes
        // ===============================
        useEffect(() => {
            localStorage.setItem("studentProfile", JSON.stringify(student));
        }, [student]);


    };

    return (
        <Card title="Student Profile">

            <h2 className="text-2xl font-bold mb-6">
                Student Profile
            </h2>

            <Card>

                {/* ================= VIEW MODE ================= */}
                {!isEditing ? (

                    <div className="space-y-4">

                        <p><span className="font-semibold">Name:</span> {student.name}</p>
                        <p><span className="font-semibold">Email:</span> {student.email}</p>
                        <p><span className="font-semibold">Student ID:</span> {student.studentId}</p>
                        <p><span className="font-semibold">Department:</span> {student.department}</p>
                        <p><span className="font-semibold">Year:</span> {student.year}</p>

                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Edit Profile
                        </button>

                    </div>

                ) : (

                    /* ================= EDIT MODE ================= */

                    <div className="space-y-4">

                        <input
                            type="text"
                            name="name"
                            value={student.name}
                            onChange={handleChange}
                            className="border px-4 py-2 rounded w-full"
                            placeholder="Name"
                        />

                        <input
                            type="email"
                            name="email"
                            value={student.email}
                            onChange={handleChange}
                            className="border px-4 py-2 rounded w-full"
                            placeholder="Email"
                        />

                        <input
                            type="text"
                            name="studentId"
                            value={student.studentId}
                            onChange={handleChange}
                            className="border px-4 py-2 rounded w-full"
                            placeholder="Student ID"
                        />

                        <input
                            type="text"
                            name="department"
                            value={student.department}
                            onChange={handleChange}
                            className="border px-4 py-2 rounded w-full"
                            placeholder="Department"
                        />

                        <input
                            type="text"
                            name="year"
                            value={student.year}
                            onChange={handleChange}
                            className="border px-4 py-2 rounded w-full"
                            placeholder="Year"
                        />

                        <div className="flex gap-4">

                            <button
                                onClick={() => setIsEditing(false)}
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                            >
                                Save
                            </button>

                            <button
                                onClick={() => setIsEditing(false)}
                                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
                            >
                                Cancel
                            </button>

                        </div>

                    </div>

                )}

            </Card>

        </Card>
    );
}

export default Profile;
