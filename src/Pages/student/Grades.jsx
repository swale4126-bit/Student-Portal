import { useEffect, useState } from "react";

function Grades() {

    const [marks, setMarks] = useState([]);

    useEffect(() => {
        const storedMarks = JSON.parse(localStorage.getItem("studentMarks")) || [];
        setMarks(storedMarks);
    }, []);

    // Grade calculation
    const getGrade = (score) => {
        if (score >= 85) return { grade: "A", point: 4 };
        if (score >= 75) return { grade: "B", point: 3 };
        if (score >= 65) return { grade: "C", point: 2 };
        if (score >= 50) return { grade: "D", point: 1 };
        return { grade: "F", point: 0 };
    };

    const totalPoints = marks.reduce((sum, m) => sum + getGrade(m.score).point, 0);
    const gpa = marks.length ? (totalPoints / marks.length).toFixed(2) : 0;

    return (
        <div>

            <h1 className="text-2xl font-bold mb-6">
                My Grades
            </h1>

            <table className="w-full bg-white shadow rounded">

                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="p-3">Course</th>
                        <th className="p-3">Marks</th>
                        <th className="p-3">Grade</th>
                        <th className="p-3">Point</th>
                    </tr>
                </thead>

                <tbody>
                    {marks.map((m) => {

                        const result = getGrade(m.score);

                        return (
                            <tr key={m.id} className="border-b text-center">

                                <td className="p-3">{m.course}</td>

                                <td className="p-3">{m.score}</td>

                                <td className="p-3 font-bold">{result.grade}</td>

                                <td className="p-3">{result.point}</td>

                            </tr>
                        );
                    })}
                </tbody>

            </table>

            <div className="mt-6 text-xl font-bold text-blue-600">
                GPA: {gpa}
            </div>

        </div>
    );
}

export default Grades;