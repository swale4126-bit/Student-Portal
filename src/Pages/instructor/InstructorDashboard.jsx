import { Outlet } from "react-router-dom";
import InstructorSidebar from "../../Components/InstructorSidebar";

function InstructorDashboard() {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <InstructorSidebar />

      {/* Page Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>

    </div>
  );
}

export default InstructorDashboard;