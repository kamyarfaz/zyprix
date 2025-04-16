
const CardSetting = () => {
  return (
        <div className="mt-[84px] font-bold text-lg">
          <h1>قدرت‌بخشی به سبک زندگی دیجیتال شما</h1>
          <div className="p-9 bg-[#262626] rounded-2xl mt-5 relative ">
            <div className="flex w-[647px] items-center">
              <img src="/images/QRImage.png" />
              <div className="mr-5">
                <h2 className="font-semibold text-xl">
                  برای دانلود اپلیکیشن بار کد را اسکن کنید یا از استور ها دریافت
                  کنید.
                </h2>
                <h6 className="text-sm font-light">
                  برای تنظیم کارت زیپریکس ابتدا اپلیکیشن هوشمند زیپریکس را نصب
                  کنید.
                </h6>
              </div>
            </div>
              <div className="flex mt-12 gap-x-6">
                <div className="border-white border px-5 py-3 rounded-2xl">
                  <img src="/images/GooglePlay.png" className="h-6 w-auto"/>
                </div>
                <div className="border-white border px-5 py-3 rounded-2xl">
                  <img src="/images/AppStore.png" className="h-6 w-auto"/>
                </div>
              </div>
            <img src="/images/DigitalLife.png" className="absolute left-0 -top-28" />
          </div>
          <div>
          </div>
        </div>
  );
};

export default CardSetting;
