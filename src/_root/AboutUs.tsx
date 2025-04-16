import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <img className="m-auto mt-12" src="images/BannerAboutUs.png" />
      <div className="px-20 mt-16 text-white">
        <div className="bg-[#1E1E1E] bg-opacity-50 p-6 rounded-3xl">
          <h3 className="text-2xl font-bold my-3">
            قدرت‌بخشی به سبک زندگی دیجیتال شما
          </h3>
          <p>
            کارت ویزیت هوشمند Zyprix، فراتر از یک کارت معمولی است. با امکان اسکن
            QR کد یا تکنولوژی NFC، اطلاعات تماس، شبکه‌های اجتماعی و خدمات شما
            تنها با یک لمس در دسترس قرار می‌گیرد. راهکاری نوین برای ارتباط
            حرفه‌ای، بدون نیاز به کارت‌های کاغذی قدیمی. کارت ویزیت هوشمند
            Zyprix، فراتر از یک کارت معمولی است. با امکان اسکن QR کد یا تکنولوژی
            NFC، اطلاعات تماس، شبکه‌های اجتماعی و خدمات شما تنها با یک لمس در
            دسترس قرار می‌گیرد. راهکاری نوین برای ارتباط حرفه‌ای، بدون نیاز به
            کارت‌های کاغذی قدیمی.
          </p>
          <div className="flex justify-center mt-6 gap-x-20">
            <div className="flex flex-col items-center">
              <div className="bg-[#282828] p-3 rounded-2xl">
                <img src="icons/WiFi.svg" />
              </div>
              <span className="text-2xl mt-6">01</span>
              <span className="text-[#C5C0C0] mt-1">قابلیت اتصال NFC</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#282828] p-3 rounded-2xl">
                <img src="icons/Tree.svg" />
              </div>
              <span className="text-2xl mt-6">02</span>
              <span className="text-[#C5C0C0] mt-1">حفظ محیط زیست</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#282828] p-3 rounded-2xl">
                <img src="icons/Layers.svg" />
              </div>
              <span className="text-2xl mt-6">03</span>
              <span className="text-[#C5C0C0] mt-1">طراحی مدرن و شیک</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#282828] p-3 rounded-2xl">
                <img src="icons/Cards.svg" />
              </div>
              <span className="text-2xl mt-6">04</span>
              <span className="text-[#C5C0C0] mt-1">ذخیره‌سازی چند کارتی</span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
