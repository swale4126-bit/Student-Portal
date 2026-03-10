import { useState } from "react";
import Card from "../Components/Card";

function Grades() {

    const [grades, setGrades] = useState([
        { course: "PHP", credit: 3, marks: 85 },
        { course: "AI", credit: 3, marks: 72 },
        { course: "System and Networking Adminstration", credit: 2, marks: 90 },
    ]);

    const gradePoints = {
        A: 4,
        B: 3,
        C: 2,
        D: 1,
        F: 0,
    };
    // ===============================
    // Convert Marks to Grade Points
    // ===============================
    const getGradePoint = (marks) => {
        if (marks >= 85) return 4.0;
        if (marks >= 75) return 3.5;
        if (marks >= 65) return 3.0;
        if (marks >= 55) return 2.5;
        if (marks >= 50) return 2.0;
        return 0;
    };
    // ===============================
    // Calculate GPA from Marks
    // ===============================
    const calculateGPA = () => {
        let totalPoints = 0;
        let totalCredits = 0;

        grades.forEach((item) => {
            const gradePoint = getGradePoint(item.marks);

            totalPoints += gradePoint * item.credit;
            totalCredits += item.credit;
        });

        return totalCredits === 0
            ? 0
            : (totalPoints / totalCredits).toFixed(2);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Grades</h2>

            <Card title="Grades Table">

                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">Course</th>
                            <th className="p-2 border">Marks</th>
                            <th className="p-2 border">Credit</th>
                            <th className="p-2 border">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades.map((item, index) => (
                            <tr key={index}>
                                <td className="p-2 border">{item.course}</td>
                                <td className="p-2 border text-center">{item.marks}

                                </td>
                                <td className="p-2 border text-center">{item.credit}</td>
                                <td className="p-2 border text-center">{getGradePoint(item.marks)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-6 text-xl font-bold text-green-600">
                    GPA: {calculateGPA()}
                </div>

            </Card>
        </div>
    );
}

export default Grades;