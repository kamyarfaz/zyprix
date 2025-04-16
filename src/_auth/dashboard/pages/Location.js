import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import EmptyAdress from "../../../components/dashboard/EmptyAdress";
const Location = () => {
    const address = [{}
    ];
    return (_jsxs("div", { children: [_jsxs("div", { className: "flex items-center bg-[#262626] mt-6 px-4 py-3 rounded-2xl", children: [_jsx("img", { src: "/icons/DetailsActive.svg" }), _jsx("h4", { className: "text-[#A573F4]", children: "\u0645\u0634\u062E\u0635\u0627\u062A \u062D\u0642\u06CC\u0642\u06CC" })] }), _jsx("div", { className: "bg-[#262626] mt-6 rounded-2xl p-6 h-screen", children: address === null ? (_jsx("div", {})) : (_jsx(EmptyAdress, {})) })] }));
};
export default Location;
