import { useState } from "react";

function EnterMarks() {

    const [marks, setMarks] = useState([
        { id: 1, student: "Abel", course: "Web Development", score: 85 },
        { id: 2, student: "Sara", course: "Database", score: 75 },
        { id: 3, student: "John", course: "Networking", score: 65 }
    ]);

    // Save marks in localStorage so student can see them
    const saveMarks = () => {
        localStorage.setItem("studentMarks", JSON.stringify(marks));
        alert("Marks saved successfully");
    };

    return (
        <div>

            <h1 className="text-2xl font-bold mb-6">
                Enter Student Marks
            </h1>

            <table className="w-full bg-white shadow rounded">

                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="p-3">Student</th>
                        <th className="p-3">Course</th>
                        <th className="p-3">Marks</th>
                    </tr>
                </thead>

                <tbody>
                    {marks.map((m, index) => (
                        <tr key={m.id} className="border-b text-center">

                            <td className="p-3">{m.student}</td>

                            <td className="p-3">{m.course}</td>

                            <td className="p-3">
                                <input
                                    type="number"
                                    value={m.score}
                                    className="border p-1 w-20 text-center"
                                    onChange={(e) => {
                                        const newMarks = [...marks];
                                        newMarks[index].score = e.target.value;
                                        setMarks(newMarks);
                                    }}
                                />
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>

            <button
                onClick={saveMarks}
                className="mt-6 bg-green-600 text-white px-5 py-2 rounded"
            >
                Save Marks
            </button>

        </div>
    );
}

export default EnterMarks;