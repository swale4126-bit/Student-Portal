import Card from "../Components/Card";

function Overview() {

    const totalCourses = 5;
    const gpa = 3.6;

    return (
        <div className="space-y-6">

            <h2 className="text-2xl font-bold">
                Dashboard Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <Card title="Total Courses">
                    <p className="text-3xl font-bold text-blue-600">
                        {totalCourses}
                    </p>
                </Card>

                <Card title="Current GPA">
                    <p className="text-3xl font-bold text-green-600">
                        {gpa}
                    </p>
                </Card>

            </div>

        </div>
    );
}

export default Overview;