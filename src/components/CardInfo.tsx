import { useState } from "react";

type ColorsItem = {
  color: string;
  text: string;
};

const colorsData: ColorsItem[] = [
  {
    color: "bg-[#15121A]",
    text: "مشکی",
  },
  {
    color: "bg-[#FFFFFF]",
    text: "نقره ای",
  },
  {
    color: "bg-[#FF6060]",
    text: "قرمز",
  },
  {
    color: "bg-[#2E68FA]",
    text: "آبی",
  },
];
const CardInfo = () => {
  const [selectColor, setSelectColor] = useState<number | null>(null);
  const SelectedColor = (index: number) => {
    setSelectColor(selectColor === index ? null : index);
  };
  return (
    <div className="w-3/6">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">کارت هوشمند Zyprix</h1>
        <div className="flex gap-x-3">
          <img src="icons/QRCode.svg" />
          <img src="icons/Share.svg" />
        </div>
      </div>
      <h3>Zyprix Smart Card</h3>
      <div className="flex items-center">
        <img src="icons/WhiteStar.svg" />
        <img src="icons/FilledStar.svg" />
        <img src="icons/FilledStar.svg" />
        <img src="icons/FilledStar.svg" />
        <img src="icons/FilledStar.svg" />
        <span className="mx-2">4.6</span>
        <a className="text-[#2E68FA]">( 195 نظر )</a>
      </div>
      <div className="mt-16">
        <h3 className="font-bold">رنگ : </h3>
        <div className="flex gap-x-2 mt-3">
          {colorsData.map((item, index) => (
            <button
              onClick={() => SelectedColor(index)}
              key={index}
              className={`${
                selectColor === index && "border border-[#2659DB]"
              } rounded-xl bg-[#1E1E1E] flex py-2 px-3 cursor-pointer`}
            >
              <div className={`rounded-full ml-2 w-5 h-5 ${item.color}`}></div>
              <span>{item.text}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="font-bold">مشخصات :</h3>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-[#212121] rounded-2xl px-4 py-2">
          <h6 className="text-[#CCCCCC]">شخصی سازی</h6>
          <h6 className="mt-3">قابل شخصی سازی</h6>
        </div>
        <div className="bg-[#212121] rounded-2xl px-4 py-2">
          <h6 className="text-[#CCCCCC]">مدیریت</h6>
          <h6 className="mt-3">مدیریت از اپ</h6>
        </div>
        <div className="bg-[#212121] rounded-2xl px-4 py-2">
          <h6 className="text-[#CCCCCC]">NFC</h6>
          <h6 className="mt-3">پشتیبانی از NFC</h6>
        </div>
        <div className="bg-[#212121] rounded-2xl px-4 py-2">
          <h6 className="text-[#CCCCCC]">QR Code</h6>
          <h6 className="mt-3">دارد</h6>
        </div>
        <div className="bg-[#212121] rounded-2xl px-4 py-2">
          <h6 className="text-[#CCCCCC]">جنس کارت</h6>
          <h6 className="mt-3">فلزی و پلاستیکی</h6>
        </div>
        <div className="text-[#5886FB]">
          <a href="" className="m-auto">
            مشخصات بیشتر {">"}{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export default CardInfo;
