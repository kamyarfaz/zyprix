import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./ui/Button";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProductIntro() {
  return (
    <div className="BackGroundPhoto pb-16 px-[80px]">
      <h1 className="text-[28px] font-bold text-center mt-[120px]">
        معرفی محصولات
      </h1>
      <h6 className="text-center">کدام کارت محصول برای شما مناسب تر هست؟</h6>
      <div className="flex mt-9 justify-center">
        <div className="rounded-[20px] pb-7 pt-9 px-20 w-1/3 bg-opacity-50 backgroundBlurred">
          <Swiper
           navigation={true} pagination={{clickable: true,}} modules={[Navigation,Pagination]} className="mySwiper"
          >
            <SwiperSlide><img className="" src="images/Card2.png" /></SwiperSlide>
            <SwiperSlide><img className="" src="images/Card2.png" /></SwiperSlide>
            <SwiperSlide><img className="" src="images/Card2.png" /></SwiperSlide>
          </Swiper>
          {/* <img className="" src="/Card2.png" /> */}
        </div>
        <div className="backgroundBlurred w-2/3 mr-9 p-[28px]">
          <h3 className="font-bold text-[28px]">
            قدرت‌بخشی به سبک زندگی دیجیتال شما
          </h3>
          <p className="mt-3 ">
            کارت ویزیت هوشمند Zyprix، فراتر از یک کارت معمولی است. با امکان اسکن
            QR کد یا تکنولوژی NFC، اطلاعات تماس، شبکه‌های اجتماعی و خدمات شما
            تنها با یک لمس در دسترس قرار می‌گیرد. راهکاری نوین برای ارتباط
            حرفه‌ای، بدون نیاز به کارت‌های کاغذی قدیمی.
          </p>
          <div className="flex mt-[42px] gap-5">
            <div className="flex">
              <img src="icons/Check.svg" />
              <span className="mr-2 text-[#CFCFCF] text-[12px]">
                پشتیبانی از QR Code
              </span>
            </div>
            <div className="flex">
              <img src="icons/Check.svg" />
              <span className="mr-2 text-[#CFCFCF] text-[12px]">
                مدیریت از اپ
              </span>
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
                قابل شخصی سازی
              </span>
            </div>
          </div>
          <Button
            desc="مشاهده محصول"
            className="flex mt-[50px]"
            hasImage={true}
            imageSrc="icons/Shop2.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductIntro;
