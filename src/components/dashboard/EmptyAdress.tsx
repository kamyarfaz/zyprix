
const EmptyAdress = () => {
  return (
    <div className="h-full">
      <h4 className="font-bold">آدرس جدید </h4>
      <h6 className="text-[#888888]">
        موقعیت مکانی آدرس را با ثبت آدرس جدید مشخص کنید.
      </h6>
      <div className="flex flex-col justify-center items-center h-full">
        <img src="/icons/Address.svg" className="" />
        <h4 className="font-bold mt-11">تا به حال آدرسی اضافه نشده</h4>
        <h6 className="text-sm mt-1">اولین آدرس پستی خود را اضافه کنید!</h6>
      </div>
    </div>
  );
};

export default EmptyAdress;
