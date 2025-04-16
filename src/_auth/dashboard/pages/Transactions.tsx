const Transactions = () => {
  return (
    <div>
      <div className="flex items-center bg-[#262626] mt-6 px-4 py-3 rounded-2xl">
        <img src="/icons/DetailsActive.svg" />
        <h4 className="text-[#A573F4]">تراکنش های اخیر شما</h4>
      </div>
      <div className="bg-[#262626] mt-6 rounded-2xl p-6 h-screen">
        <table className="w-full">
          <tr className="">
            <th className="!font-normal bg-[#313131] rounded-s-[20px] py-3 text-right pr-5">
              نوع تراکنش
            </th>
            <th className="!font-normal bg-[#313131] py-3 text-right">
              تاریخ تراکنش
            </th>
            <th className="!font-normal bg-[#313131] py-3 text-right">
              مبلغ (به تومان)
            </th>
            <th className="!font-normal bg-[#313131] py-3 text-right">
              کد سفارش
            </th>
            <th className="!font-normal bg-[#313131] py-3 text-right">وضعیت</th>
            <th className="!font-normal bg-[#313131] rounded-e-[20px] py-3 text-right">
              عملیات
            </th>
          </tr>
          <tr className="border-b border-[#414141]">
            <td className="py-8">آنلاین (درگاه)</td>
            <td>1403/07/09</td>
            <td>12,000,000</td>
            <td>12345Ca</td>
            <td>در انبار فروشگاه</td>
            <td className="text-[#34C759]">موفق</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
