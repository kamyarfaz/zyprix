import { useState } from 'react'
import Button from './ui/Button'

const CardPayment = () => {
    const [cardColor, setCardColor] = useState<boolean>(true);
  return (
    <div className="bg-[#212121] p-4 rounded-3xl ml-20 w-[25%]">
          <div className="bg-[#3E3E3E] bg-opacity-40 rounded-3xl p-4">
            <h2 className="text-sm">جنس کارت زیپریکس :</h2>
            <div className="flex items-center mt-4">
              <button
                onClick={() => setCardColor(true)}
                className={`w-4 h-4 rounded-full flex justify-center ${
                  cardColor ? "bg-[#7021EE]" : "bg-white"
                } items-center bg-[#7021EE] border border-white`}
              >
                {cardColor && <img src="icons/Check.svg" />}
              </button>
              <span className="mr-2">پلاستیکی</span>
            </div>
            <div className="flex items-center mt-2">
              <button
                onClick={() => setCardColor(false)}
                className={`w-4 h-4 rounded-full flex justify-center items-center ${
                  cardColor ? "bg-white" : "bg-[#7021EE]"
                }  border border-white p-0.5`}
              >
                {cardColor ? <></> : <img src="icons/Check.svg" />}
              </button>
              <span className="mr-2">فلزی</span>
            </div>
          </div>
          <div className="mt-6">
            <div dir="ltr" className="flex items-center">
              <h6 className="bg-[#7021EE] bg-opacity-15 rounded-xl border border-[#7021EE] w-fit px-2">
                5%
              </h6>
              <h6 className="line-through ml-2 h-fit text-[#999999]">
                89000000
              </h6>
            </div>
            <h6 className="font-bold mt-2 w-fit ms-auto">89000000 تومان</h6>
            <Button
              className="flex bg-[#7021EE] m-auto py-2 px-9 rounded-2xl mt-6"
              desc="افزودن به سبد خرید"
              hasImage={true}
              imageSrc="icons/Shop2.svg"
            />
            <div className="w-full border-t border-[#414141] my-8"></div>
            <div className="flex gap-x-2 text-sm">
              <img src="icons/Guid.svg"/>
              <h6>راهنمای خرید کارت هوشمند</h6>
            </div>
            <div className="flex gap-x-2 text-sm mt-2">
              <img src="icons/Rules.svg"/>
              <h6>قوانین ارسال کالا</h6>
            </div>
          </div>
        </div>
  )
}

export default CardPayment
