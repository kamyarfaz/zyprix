
const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-1 gap-x-6 mt-6">
        <div className="bg-[#262626] p-5 rounded-[20px] flex">
          <img src="images/ConfirmedOrder.png" />
          <div className="mr-3">
            <h2>4 سفارش تایید شده</h2>
            <h6 className="text-sm text-[#B7B7B7]">جاری</h6>
          </div>
        </div>
        <div className="bg-[#262626] p-5 rounded-[20px] flex">
          <img src="images/ConfirmedOrder.png" />
          <div className="mr-3">
            <h2>3 سفارش تحویل داده شده</h2>
            <h6 className="text-sm text-[#B7B7B7]">تاریخچه سفارش</h6>
          </div>
        </div>
        <div className="bg-[#262626] p-5 rounded-[20px] flex">
          <img src="images/ConfirmedOrder.png" />
          <div className="mr-3">
            <h2>1 سفارش مرجوع شده</h2>
            <h6 className="text-sm text-[#B7B7B7]">تاریخچه سفارش</h6>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-[#262626] rounded-[18px] p-6">
        <div className="flex justify-between mb-5">
          <span className="font-bold">سفارش های اخیر شما</span>
          <div className="flex gap-x-1 items-center">
            <span className="font-semibold text-xs w-20">مشاهده همه</span>
            <img src="icons/Arrow.svg" className="rotate-90" />
          </div>
        </div>
        <table className="w-full">
          <tr className="">
            <th className="!font-normal bg-[#313131] rounded-s-[20px] py-3 text-right pr-5">
              کالا
            </th>
            <th className="!font-normal bg-[#313131] py-3 text-right">
              تاریخ سفارش
            </th>
            <th className="!font-normal bg-[#313131] py-3 text-right">
              مبلغ (به تومان)
            </th>
            <th className="!font-normal bg-[#313131] py-3 text-right">
              عملیات پرداخت
            </th>
            <th className="!font-normal bg-[#313131] rounded-e-[20px] py-3 text-right">
              کد پیگیری
            </th>
          </tr>
          <tr className="border-b border-[#414141]">
            <td className="py-2">
              <div className="flex items-center gap-4">
                <div className="bg-[#313131] w-fit p-4 rounded-[20px]">
                  <img src="images/SimpleCard.png" />
                </div>
                <div className="flex flex-col gap-y-3">
                  <h4 className="text-sm">کارت هوشمند زیپریکس</h4>
                  <h5 className="bg-[#FFFFFF] bg-opacity-10 w-fit rounded-full px-1 text-sm border border-[#FFFFFF] border-opacity-50">
                    کارت هوشمند
                  </h5>
                </div>
              </div>
            </td>
            <td>1403/10/02</td>
            <td>560,000</td>
            <td>
              <h6 className="p-2 bg-[#34C759] bg-opacity-10 text-[#34C759] w-fit rounded-full">
                موفق
              </h6>
            </td>
            <td>
              <div className="flex gap-x-1">
                <span>16514651711532</span>
                <img src="icons/Copy.svg" />
              </div>
            </td>
          </tr>
          <tr className="border-b border-[#414141]">
            <td className="py-2">
              <div className="flex items-center gap-4">
                <div className="bg-[#313131] w-fit p-4 rounded-[20px]">
                  <img src="images/SimpleCard.png" />
                </div>
                <div className="flex flex-col gap-y-3">
                  <h4 className="text-sm">کارت هوشمند زیپریکس</h4>
                  <h5 className="bg-[#FFFFFF] bg-opacity-10 w-fit rounded-full px-1 text-sm border border-[#FFFFFF] border-opacity-50">
                    کارت هوشمند
                  </h5>
                </div>
              </div>
            </td>
            <td>1403/10/02</td>
            <td>560,000</td>
            <td>
              <h6 className="p-2 bg-[#34C759] bg-opacity-10 text-[#34C759] w-fit rounded-full">
                موفق
              </h6>
            </td>
            <td>
              <div className="flex gap-x-1">
                <span>16514651711532</span>
                <img src="icons/Copy.svg" />
              </div>
            </td>
          </tr>
          <tr className="border-b border-[#414141]">
            <td className="py-2">
              <div className="flex items-center gap-4">
                <div className="bg-[#313131] w-fit p-4 rounded-[20px]">
                  <img src="images/SimpleCard.png" />
                </div>
                <div className="flex flex-col gap-y-3">
                  <h4 className="text-sm">کارت هوشمند زیپریکس</h4>
                  <h5 className="bg-[#FFFFFF] bg-opacity-10 w-fit rounded-full px-1 text-sm border border-[#FFFFFF] border-opacity-50">
                    کارت هوشمند
                  </h5>
                </div>
              </div>
            </td>
            <td>1403/10/02</td>
            <td>560,000</td>
            <td>
              <h6 className="p-2 bg-[#34C759] bg-opacity-10 text-[#34C759] w-fit rounded-full">
                موفق
              </h6>
            </td>
            <td>
              <div className="flex gap-x-1">
                <span>16514651711532</span>
                <img src="icons/Copy.svg" />
              </div>
            </td>
          </tr>
          <tr className="border-b border-[#414141]">
            <td className="py-2">
              <div className="flex items-center gap-4">
                <div className="bg-[#313131] w-fit p-4 rounded-[20px]">
                  <img src="images/SimpleCard.png" />
                </div>
                <div className="flex flex-col gap-y-3">
                  <h4 className="text-sm">کارت هوشمند زیپریکس</h4>
                  <h5 className="bg-[#FFFFFF] bg-opacity-10 w-fit rounded-full px-1 text-sm border border-[#FFFFFF] border-opacity-50">
                    کارت هوشمند
                  </h5>
                </div>
              </div>
            </td>
            <td>1403/10/02</td>
            <td>560,000</td>
            <td>
              <h6 className="p-2 bg-[#34C759] bg-opacity-10 text-[#34C759] w-fit rounded-full">
                موفق
              </h6>
            </td>
            <td>
              <div className="flex gap-x-1">
                <span>16514651711532</span>
                <img src="icons/Copy.svg" />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Home;
