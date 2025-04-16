import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CardInfo from "../components/CardInfo";
import CardIntro from "../components/CardIntro";
import CardPayment from "../components/CardPayment";
import CardSpecs from "../components/CardSpecs";
import Header from "../components/Header";
import Breadcrums from "../components/ui/Breadcrums";
import Details from "../components/ui/Details";
const SingleProduct = () => {
    return (_jsxs("div", { className: "", children: [_jsx(Header, {}), _jsx(Breadcrums, { breadcrumbs: [
                    {
                        label: "خانه",
                        link: "/",
                    },
                    { label: "فروشگاه" },
                    { label: "کارت فروشگاه" },
                    {
                        label: "کارت هوشمند زیپریکس",
                        active: true,
                    },
                ] }), _jsxs("div", { className: "flex gap-x-8 mt-12 text-white", children: [_jsxs("div", { className: "mr-[104px] w-[30%]", children: [_jsx("div", { className: "border rounded-3xl bg-[#1E1E1E] p-5 w-fit", children: _jsx("img", { src: "images/WhiteCard.png" }) }), _jsxs("div", { className: "flex mt-5 gap-x-4", children: [_jsx("div", { className: "bg-[#1E1E1E] rounded-[20px] w-fit p-5", children: _jsx("img", { src: "images/Card2.png", className: "w-[60px] h-auto" }) }), _jsx("div", { className: "bg-[#1E1E1E] rounded-[20px] w-fit p-5", children: _jsx("img", { src: "images/Card2.png", className: "w-[60px] h-auto" }) }), _jsx("div", { className: "bg-[#1E1E1E] rounded-[20px] w-fit p-5", children: _jsx("img", { src: "images/Card2.png", className: "w-[60px] h-auto" }) })] })] }), _jsx(CardInfo, {}), _jsx(CardPayment, {})] }), _jsx(Details, { MyComponentArray: [
                    { text: 'معرفی', icon: "icons/Details.svg", activeIcon: "icons/DetailsActive.svg", index: 0, component: _jsx(CardIntro, {}) },
                    { text: 'مشخصات', icon: "icons/Details.svg", activeIcon: "icons/DetailsActive.svg", index: 1, component: _jsx(CardSpecs, {}) },
                    { text: 'نظرات', icon: "icons/Comments.svg", activeIcon: "icons/CommentsActive.svg", index: 2, component: _jsx(_Fragment, {}) },
                    { text: 'پرسش و پاسخ', icon: "icons/Questions.svg", activeIcon: "icons/QuestionsActive.svg", index: 3, component: _jsx(_Fragment, {}) },
                ] })] }));
};
export default SingleProduct;
