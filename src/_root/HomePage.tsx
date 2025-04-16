import FAQQuestions from "../components/FAQQuestions";
import Header from "../components/Header";
import HowToZyprix from "../components/HowToZyprix";
import ProductIntro from "../components/ProductIntro";
import Products from "../components/Products";
import WhyZyprix from "../components/WhyZyprix";
import ZyprexDetail from "../components/ZyprexDetail";
import ZyprixIntro from "../components/ZyprixIntro";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="w-full text-white">
      <Header />
      <ZyprexDetail />
      <Products />
      <ProductIntro />
      <WhyZyprix />
      <HowToZyprix />
      <div className="mt-[120px] text-center">
        <h1 className="font-bold text-[28px]">
          طراحی اپلیکیشن اختصاصی زیپریکس
        </h1>
        <h2 className="w-[787px] m-auto mt-2 -mb-40 ">
          با خرید کارت زیپریکس برای شما یک ... اختصاصی طراحی خواهیم کرد که دارای
          قابلیت های بسیاری می‌باشد. مهم ترین آیتم هایی که می‌توان در لینک داشته
          باشید را در اینجا می‌توانید مشاهده نمائید.
        </h2>
        <img src="images/AppDesign.png" className="mx-auto"/>
      </div>
      <ZyprixIntro />
        <img className="mt-[120px] mx-[80px] w-full h-auto" src="images/Banner.png" />
      <FAQQuestions />
      <Footer/>
    </div>
  );
}

export default HomePage;
