import React from "react";

interface MyComponentProps {
  className: string;
  desc: string;
  hasImage: boolean;
  imageSrc: string;
}

// Define the Button component with the desired props
const Button: React.FC<MyComponentProps> = ({
  className,
  desc,
  hasImage,
  imageSrc,
}) => {
  return (
    <button className={`rounded-2xl bg-[#7021EE] py-3 px-4 text-center ${className}`}>
        {hasImage && <img src={imageSrc} />}
      <span className="mr-2 m-auto">{desc}</span>
    </button>
  );
};
export default Button