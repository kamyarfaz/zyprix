import { ReactNode, useState } from "react";

interface MyComponentProps {
  text: string;
  icon: string;
  activeIcon: string;
  index: number;
  component: ReactNode;
}
interface MyComponentArrays {
    MyComponentArray : MyComponentProps[];
}
const Details: React.FC<MyComponentArrays> = ({ MyComponentArray }) => {
    const [selectDetail, setSelectDetail] = useState(0);
  return (
    <div>
      <div className="w-11/12 bg-[#212121] h-14 mx-auto mt-20 rounded-2xl flex text-white gap-x-4">
        {MyComponentArray.map((MyComponentProps, index) => (
          <button
            onClick={() => setSelectDetail(MyComponentProps.index)}
            key={index}
            className={`flex items-center gap-x-2 mr-6 ${
              selectDetail === index
                ? "border-b-2 border-[#A573F4] text-[#A573F4]"
                : ""
            }`}
          >
            <img
              className="w-5 gap-x-2"
              src={`${
                selectDetail === index
                  ? MyComponentProps.activeIcon
                  : MyComponentProps.icon
              }`}
            />
            <span>{MyComponentProps.text}</span>
          </button>
        ))}
      </div>

      {MyComponentArray.map((MyComponentProps, index) => (
        <div key={index}>{MyComponentProps.index === selectDetail && MyComponentProps.component}</div>
      ))}
    </div>
  );
};

export default Details;
