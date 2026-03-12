import { Routes, Route, Router } from "react-router-dom";

// Login
import Login from "./Components/Login";

// Student pages
import Dashboard from "./Pages/student/Dashboard";
import StudentOverview from "./Pages/student/StudentOverview";
import Courses from "./Pages/student/Courses";
import Grades from "./Pages/student/Grades";
import Profile from "./Pages/student/Profile";

// Instructor pages
import InstructorDashboard from "./Pages/instructor/InstructorDashboard";
import InstructorOverview from "./Pages/instructor/InstructorOverview";
import Students from "./Pages/instructor/Students";
import ManageCourses from "./Pages/instructor/ManageCourses";
import EnterMarks from "./Pages/instructor/EnterMarks";

function App() {
  return (

    <Routes>

      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Student Dashboard */}
      <Route path="/student-dashboard" element={<Dashboard />}>

        <Route index element={<StudentOverview />} />

        <Route path="courses" element={<Courses />} />

        <Route path="grades" element={<Grades />} />

        <Route path="profile" element={<Profile />} />

      </Route>

      {/* Instructor Dashboard */}
      <Route path="/instructor-dashboard" element={<InstructorDashboard />}>

        <Route index element={<InstructorOverview />} />

        <Route path="students" element={<Students />} />

        <Route path="courses" element={<ManageCourses />} />

        <Route path="grades" element={<EnterMarks />} />

      </Route>

    </Routes>


  );
}

export default App;