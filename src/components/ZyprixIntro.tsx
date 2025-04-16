import Button from "./ui/Button"

const ZyprixIntro = () => {
  return (
    <div className="flex justify-between mx-[80px]">
        <div className="w-[40%]">
          <div className="flex">
            <img src="icons/Video.svg" />
            <h1 className="font-extrabold text-3xl mr-3">مــعرفی زیـپریکس</h1>
          </div>
          <p>
            زیپریکس با ترکیب تکنولوژی پیشرفته و طراحی نوآورانه، تجربه‌ای مدرن از
            اتصال و اشتراک‌گذاری را ارائه می‌دهد و همچنین با راهکاری هوشمند برای
            ارتباطاتی بی‌مرز، سریع و تاثیرگذار که با دنیای دیجیتال همگام است.
          </p>
          <h3 className="mt-[45px]">
            کشور هایی که زیپریکس در آن نمایندگی دارد :
          </h3>
          <div className="flex gap-x-4 mt-3">
            <img src="images/Iran.png" />
            <img src="images/Italy.png" />
          </div>
          <Button
            className="rounded-2xl py-2 bg-[#7021EE] flex px-4 mt-[50px]"
            desc="مشاهده محصولات"
            hasImage={true}
            imageSrc="icons/Shop2.svg"
          />
        </div>
        <div className="w-[55%]"><img src="images/ZyprixIntro.png"/></div>
      </div>
  )
}

export default ZyprixIntro
