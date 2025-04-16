import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "1 . آیا امکان پرداخت در محل برای تهران و شهرستان فراهم است؟",
    answer:
      "خیر، در حال حاضر پرداخت در محل برای تهران و شهرستان غیر فعال است اما قرار است به زودی برای برخی از محصولاات فقط برای شهر تهران پرداخت در محل راه اندازی شود. سفارشات خارج از شهر تهران به دلیل ارسال با پست پیشتاز و تیپاکس، امکان ارسال دستگاه کارت‌خوان مقدور ‌نمی‌باشد. ",
  },
  {
    question: "2 . ساعت کاری فروشگاه حضوری دارسو از ساعت چند می باشد؟",
    answer:
      "خیر، در حال حاضر پرداخت در محل برای تهران و شهرستان غیر فعال است اما قرار است به زودی برای برخی از محصولاات فقط برای شهر تهران پرداخت در محل راه اندازی شود. سفارشات خارج از شهر تهران به دلیل ارسال با پست پیشتاز و تیپاکس، امکان ارسال دستگاه کارت‌خوان مقدور ‌نمی‌باشد. ",
  },
  {
    question: "3 . پشتیبانی تلفنی از چه ساعتی پاسخ گو است؟",
    answer:
      "خیر، در حال حاضر پرداخت در محل برای تهران و شهرستان غیر فعال است اما قرار است به زودی برای برخی از محصولاات فقط برای شهر تهران پرداخت در محل راه اندازی شود. سفارشات خارج از شهر تهران به دلیل ارسال با پست پیشتاز و تیپاکس، امکان ارسال دستگاه کارت‌خوان مقدور ‌نمی‌باشد. ",
  },
  {
    question: "4 . آیا امکان ثبت سفارش تلفنی وجود دارد؟",
    answer:
      "خیر، در حال حاضر پرداخت در محل برای تهران و شهرستان غیر فعال است اما قرار است به زودی برای برخی از محصولاات فقط برای شهر تهران پرداخت در محل راه اندازی شود. سفارشات خارج از شهر تهران به دلیل ارسال با پست پیشتاز و تیپاکس، امکان ارسال دستگاه کارت‌خوان مقدور ‌نمی‌باشد. ",
  },
  {
    question: "5 . منظور از گارانتی 18 ماهه طلایی شرکتی چیست؟",
    answer:
      "خیر، در حال حاضر پرداخت در محل برای تهران و شهرستان غیر فعال است اما قرار است به زودی برای برخی از محصولاات فقط برای شهر تهران پرداخت در محل راه اندازی شود. سفارشات خارج از شهر تهران به دلیل ارسال با پست پیشتاز و تیپاکس، امکان ارسال دستگاه کارت‌خوان مقدور ‌نمی‌باشد. ",
  },
];

const FAQQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-[104px] flex gap-14 items-center mr-[80px]">
      <div className="w-[80%]">
        <h2 className="font-bold text-[28px]">سوالات متداول</h2>
        <div className="space-y-2 mt-8">
          {faqData.map((item, index) => (
            <div key={index} className="overflow-hidden">
              <button
                className="border-[1px] rounded-lg w-full text-right p-3 bg-[#1E1E1E] font-semibold flex items-center gap-x-1"
                onClick={() => toggleQuestion(index)}
              >
                <img src="icons/Plus.svg" />
                <span>{item.question}</span>
              </button>
              {openIndex === index && <div className="p-3">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <img src="images/FAQ.png" className="my-auto" />
      </div>
    </div>
  );
};

export default FAQQuestions;
