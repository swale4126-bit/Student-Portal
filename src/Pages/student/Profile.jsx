import { useState, useEffect } from "react";

function Profile() {

    const [student, setStudent] = useState({
        name: "",
        email: "",
        department: ""
    });

    // Load profile
    useEffect(() => {

        const savedProfile = localStorage.getItem("studentProfile");

        if (savedProfile) {
            setStudent(JSON.parse(savedProfile));
        }

    }, []);

    // Save profile
    const saveProfile = () => {

        localStorage.setItem(
            "studentProfile",
            JSON.stringify(student)
        );

        alert("Profile saved");
    };

    return (
        <div>

            <h1 className="text-2xl font-bold mb-6">
                Student Profile
            </h1>

            <div className="space-y-4 max-w-md">

                <input
                    type="text"
                    placeholder="Name"
                    value={student.name}
                    onChange={(e) =>
                        setStudent({ ...student, name: e.target.value })
                    }
                    className="border p-2 w-full rounded"
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={student.email}
                    onChange={(e) =>
                        setStudent({ ...student, email: e.target.value })
                    }
                    className="border p-2 w-full rounded"
                />

                <input
                    type="text"
                    placeholder="Department"
                    value={student.department}
                    onChange={(e) =>
                        setStudent({ ...student, department: e.target.value })
                    }
                    className="border p-2 w-full rounded"
                />

                <button
                    onClick={saveProfile}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Save
                </button>

            </div>

        </div>
    );
}

export default Profile;