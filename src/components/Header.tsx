function Header() {
  return (
    <div className="Header mx-[80px]">
      <div className="flex justify-between mt-8">
        <div>
          <img src="images/circle-logo.png" />
        </div>
        <div className="my-auto text-white text-lg font-semibold">
          <span className="ml-11">خانه </span>
          <span className="ml-11">فروشگاه </span>
          <span className="ml-11">معرفی زیپرکس </span>
          <span className="ml-11">سوالات متداول </span>
          <span>تماس با ما</span>
        </div>
        <div className="flex">
          <img className="w-8 ml-3" src="icons/User.svg" />
          <img className="w-8" src="icons/Shop.svg" />
        </div>
      </div>
      <div className="h-0.5 w-2/3 mx-auto bg-gradient-to-r from-[#131219] via-[#A7A7A7] to-[#101011] mt-4"></div>
    </div>
  );
}

export default Header;
