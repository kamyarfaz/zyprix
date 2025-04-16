import SearchInput from "../ui/SearchInput";
import Notifications from "./Notifications";

const DashboardHeader = () => {
  
  return (
    <div className="flex justify-between relative">
      <SearchInput />
      <div>
        <div className="flex items-center relative group">
          <div className="">
            <span className="bg-[#7021EE] rounded-full px-[4.5px] text-xs absolute -top-2">
              2
            </span>
            <img src="/icons/Alarm.svg" />
            <Notifications/>
          </div>
          <div className="bg-[#414141] mx-3 w-[1px] h-[70%]"></div>
          <img src="/icons/EmptyUser.svg" />
          <span className="mr-1 mx-3">جواد فضلی</span>
          <img src="/icons/Arrow.svg" />
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader
