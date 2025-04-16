import { Outlet } from "react-router-dom";
import SideBar from "../../components/dashboard/sidebar/SideBar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="flex p-6 gap-x-6 text-white">
      <SideBar />
      <div className="w-full h-fit">
        <DashboardHeader />
        <Outlet/>
      </div>
    </div>
  );
}

export default DashboardLayout
