import CardInfo from "../components/CardInfo";
import CardIntro from "../components/CardIntro";
import CardPayment from "../components/CardPayment";
import CardSpecs from "../components/CardSpecs";
import Header from "../components/Header";
import Breadcrums from "../components/ui/Breadcrums";
import Details from "../components/ui/Details";

const SingleProduct = () => {

  return (
    <div className="">
      <Header />
      <Breadcrums
        breadcrumbs={[
          {
            label: "خانه",
            link: "/",
          },
          { label: "فروشگاه" },
          { label: "کارت فروشگاه" },
          {
            label: "کارت هوشمند زیپریکس",
            active: true,
          },
        ]}
      />
      <div className="flex gap-x-8 mt-12 text-white">
        <div className="mr-[104px] w-[30%]">
          <div className="border rounded-3xl bg-[#1E1E1E] p-5 w-fit">
            <img src="images/WhiteCard.png" />
          </div>
          <div className="flex mt-5 gap-x-4">
            <div className="bg-[#1E1E1E] rounded-[20px] w-fit p-5">
              <img src="images/Card2.png" className="w-[60px] h-auto" />
            </div>
            <div className="bg-[#1E1E1E] rounded-[20px] w-fit p-5">
              <img src="images/Card2.png" className="w-[60px] h-auto" />
            </div>
            <div className="bg-[#1E1E1E] rounded-[20px] w-fit p-5">
              <img src="images/Card2.png" className="w-[60px] h-auto" />
            </div>
          </div>
        </div>
        <CardInfo />
        <CardPayment />
      </div>
      <Details MyComponentArray={[
        {text: 'معرفی', icon: "icons/Details.svg", activeIcon: "icons/DetailsActive.svg", index : 0, component: <CardIntro/>},
        {text: 'مشخصات', icon: "icons/Details.svg", activeIcon: "icons/DetailsActive.svg", index : 1, component: <CardSpecs/>},
        {text: 'نظرات', icon: "icons/Comments.svg", activeIcon: "icons/CommentsActive.svg", index : 2, component: <></>},
        {text: 'پرسش و پاسخ', icon: "icons/Questions.svg", activeIcon: "icons/QuestionsActive.svg", index : 3, component: <></>},
      ]}/>
    </div>
  );
};

export default SingleProduct;