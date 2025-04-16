import Button from "./ui/Button";

function ZyprexDetail() {
  return (
    <div className="flex mt-16 justify-between mx-[80px]">
      <div className="mt-[75px]">
        <h2 className="">
          همراه با ما، تجربه‌ای متفاوت از سادگی، سرعت و هوشمندی{" "}
        </h2>
        <h1 className="flex text-[32px] font-extrabold mt-1">
          را در تمام جنبه‌های{" "}
          <h1 className="bg-gradient-to-r from-[#37F6C8] via-[#2E68FA] to-[#9255F5] text-transparent bg-clip-text mx-1.5">
            {" "}
            زندگی دیجیتال{" "}
          </h1>{" "}
          تجربه کنید...
        </h1>
        <p className="mt-8">
          زیپریکس با ترکیب تکنولوژی پیشرفته و طراحی نوآورانه، تجربه‌ای مدرن از
          اتصال و اشتراک‌گذاری را ارائه می‌دهد و همچنین با راهکاری هوشمند برای
          ارتباطاتی بی‌مرز، سریع و تاثیرگذار که با دنیای دیجیتال همگام است.
        </p>
        <div className="flex mt-16">
          <Button
            desc="مشاهده محصولات"
            className="flex"
            imageSrc="icons/Shop2.svg"
            hasImage={true}
          ></Button>
          <button className="py-3 px-4 flex text-center mr-5">
            <span className="ml-2 my-auto">بیشتر بدانید</span>
            <img src="icons/FlashLeft.svg" />
          </button>
        </div>
      </div>
      <div className="w-full">
        <img className="w-full" src="images/Zyprix-Details.png" />
      </div>
    </div>
  );
}

export default ZyprexDetail;
