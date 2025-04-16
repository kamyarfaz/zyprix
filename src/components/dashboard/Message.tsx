const Message = () => {
  return (
    <div>
      <div className="mt-4 p-2 hover:bg-[#95CCFF] hover:bg-opacity-10 rounded-xl">
        <div className="flex gap-x-2">
          <img src="/icons/Message.svg" className="self-start" />
          <p className="text-sm">
            برای تخفیف های ویژه می توانید بخش کارت ویزیت هوشمند با تخفیف های
            ویژه را چک بفرمایید ، و خریدی مطمئن و آسان داشته باشید.
          </p>
        </div>
        <div className="text-xs text-[#B7B7B7] gap-x-2 flex items-center justify-center mt-3">
          <span>3 ساعت قبل </span>
          <div className="bg-[#D9D9D9] w-0.5 h-[10px]"></div>
          <span>از آیدا قربانی </span>
          <div className="bg-[#D9D9D9] w-0.5 h-[10px]"></div>
          <span>کارشناس فروش </span>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#414141] my-4"></div>
    </div>
  );
};

export default Message;
