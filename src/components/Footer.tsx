function Footer() {
  return (
    <div className="BackGroundPhoto2 px-[80px] pb-[80px] pt-[183px] text-white">
      <div className="backgroundBlurred w-full p-11 flex justify-between">
        <div>
          <div className="flex items-center">
            <img src="images/circle-logo.png" />
            <h3 className="mr-3 text-xl">وب سایت رسمی زیپریکس</h3>
          </div>
          <div className="mt-8">
            <span className="font-bold text-xl">
              همراه با ما، تجربه‌ای متفاوت از سادگی، سرعت و هوشمندی
            </span>
            <p className="mt-2">
              را در تمام جنبه‌های{" "}
              <span className="bg-gradient-to-r from-[#37F6C8] via-[#2E68FA] to-[#9255F5] text-transparent bg-clip-text">
                زندگی دیجیتال{" "}
              </span>
              تجربه کنید...
            </p>
          </div>
        </div>
        <div className="flex gap-x-[60px]">
          <div>
            <h3 className="font-bold text-xl">لینک های مفید</h3>
            <h6 className="mt-6">سوالات متداول</h6>
            <h6 className="mt-4">درباره ما</h6>
            <h6 className="mt-4">محصولات ما</h6>
            <h6 className="mt-4">بلاگ</h6>
            <h6 className="mt-4">ضمانت و اصالت کالا</h6>
            <h6 className="mt-4">سوالات متداول</h6>
          </div>
          <div>
            <h3 className="font-bold text-xl">تماس با ما</h3>
            <div className="flex mt-6">
              <img src="icons/Phone.svg" />
              <h6 className="mr-2">021-66171970</h6>
            </div>
            <div className="flex mt-4">
              <img src="icons/Email.svg" />
              <h6 className="mr-2">Zyprix@gmail.com</h6>
            </div>
            <div className="flex gap-x-[30px] mt-7 ml-[46px]">
              <img src="icons/X.svg" />
              <img src="icons/YouTube.svg" />
              <img src="icons/LinkedIn.svg" />
              <img src="icons/Instagram.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
