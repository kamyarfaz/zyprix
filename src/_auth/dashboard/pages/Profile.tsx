import Button from "../../../components/ui/Button";
import FromInput from "../../../components/ui/FromInput";

const Profile = () => {
  return (
    <div>
      <div className="flex items-center bg-[#262626] mt-6 px-4 py-3 rounded-2xl">
        <img src="/icons/DetailsActive.svg" />
        <h4 className="text-[#A573F4]">مشخصات حقیقی</h4>
      </div>
      <div className="bg-[#262626] mt-6 rounded-2xl p-6 h-screen">
        <div className="grid grid-cols-2 grid-rows-3 w-[60%] gap-y-8">
          <div>
            <h6>نام و نام خانوادگی * : (به فارسی)</h6>
            <FromInput icon="/icons/Pen.svg" placeholder="برای مثال : آرمیتا فرهادیان"/>
          </div>
          <div>
            <h6>شماره موبایل * :</h6>
            <FromInput icon="/icons/Pen.svg" placeholder="+98 911 416 1254"/>
          </div>
          <div>
            <h6>ایمیل : </h6>
            <FromInput icon="/icons/Pen.svg" placeholder="example@gmail.com"/>
          </div>
          <div>
            <h6>شغل :</h6>
            <FromInput icon="/icons/SimplePlus.svg" placeholder="شغل اختیاری می‌باشد"/>
          </div>
          <div></div>
          <Button desc="ذخیره اطلاعات" className="h-fit w-1/2 justify-self-end ml-10" hasImage={false} imageSrc=""/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
