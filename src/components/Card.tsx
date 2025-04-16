import Button from "./ui/Button";

function Card() {
  return (
    <div className="rounded-2xl p-5 bg-[#1E1E1E] w-fit ml-8">
      <img src="images/Card.png" className="w-full" />
      <h3 className="font-semibold mt-5">کارت ویزیت هوشمند زیپریکس</h3>
      <div className="w-full h-[1px] bg-[#414141] mt-5"></div>
      <div className="grid grid-cols-2 grid-rows-2 mt-5 gap-x-10 gap-y-3">
        <div className="flex">
          <img src="icons/Check.svg" />
          <span className="mr-2 text-[#CFCFCF] text-[12px]">
            قابل شخصی سازی
          </span>
        </div>
        <div className="flex">
          <img src="icons/Check.svg" />
          <span className="mr-2 text-[#CFCFCF] text-[12px]">مدیریت از اپ</span>
        </div>
        <div className="flex">
          <img src="icons/Check.svg" />
          <span className="mr-2 text-[#CFCFCF] text-[12px]">
            پشتیبانی از NFC
          </span>
        </div>
        <div className="flex">
          <img src="icons/Check.svg" />
          <span className="mr-2 text-[#CFCFCF] text-[12px]">
            پشتیبانی از QR Code
          </span>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#414141] mt-5"></div>
      <div className="flex mt-6 justify-between">
        <div className="flex">
          <span className="text-[14px] ml-0.5 text-[#FFD739] my-auto">4.7</span>
          <img src="icons/Star.svg" />
        </div>
        <div>
          <span className="font-semibold ml-1">855.000</span>
          <span className="text-[10px]">تومان</span>
        </div>
      </div>
      <Button className="rounded-2xl mt-4 py-2 w-full bg-[#7021EE]" desc="اضافه به سبد خرید" hasImage={false} imageSrc=""/>
    </div>
  );
}

export default Card;
