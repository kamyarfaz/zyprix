import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/dashboard/sidebar/SideBar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
const DashboardLayout = () => {
    return (_jsxs("div", { className: "flex p-6 gap-x-6 text-white", children: [_jsx(SideBar, {}), _jsxs("div", { className: "w-full h-fit", children: [_jsx(DashboardHeader, {}), _jsx(Outlet, {})] })] }));
};
export default DashboardLayout;
