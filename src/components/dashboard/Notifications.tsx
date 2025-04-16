import { useState } from "react";
import Message from "./Message";
import Button from "../ui/Button";

const Notifications = () => {
  const [selectMessage, setSelectMessages] = useState(0);
  const messages = [
    {
      id: 0,
      text: "خوانده نشده",
      icon: "/icons/AllMessages.svg",
      activeIcon: "/icons/AllMessagesActive.svg",
      number: 2,
    },
    {
      id: 1,
      text: "همه پیغام ها",
      icon: "/icons/UnseenMessages.svg",
      activeIcon: "/icons/UnSeenMessagesActive.svg",
      number: 8,
    },
  ];
  return (
    <div className="group-hover:absolute group-hover:block hidden w-[370px] -right-80 px-5 pt-5 bg-[#262626] rounded-[20px]">
      <div className="flex gap-x-4 justify-between border-b border-[#414141]">
        {messages.map((data, ind) => (
          <button
            className={`text-xs flex gap-x-1 py-3 ${
              selectMessage === ind ? "border-b border-[#A573F4]" : ""
            }`}
            onClick={() => setSelectMessages(data.id)}
          >
            <img
              src={`${
                selectMessage === ind ? `${data.activeIcon}` : `${data.icon}`
              }`}
            />
            <span
              className={`w-[72px] ${
                selectMessage === ind ? "text-[#A573F4]" : "text-white"
              }`}
            >
              {data.text}
            </span>
            <span
              className={`rounded-full px-1 ${
                selectMessage === ind
                  ? "bg-[#A573F4] text-white"
                  : "bg-white text-black"
              }`}
            >
              {data.number}
            </span>
          </button>
        ))}
      </div>
      <Message/>
      <Button desc="خواندن همه" hasImage={false} imageSrc="" className="w-full mb-5"/>
    </div>
  );
};

export default Notifications;
