import React from "react";

interface Breadcrumb {
    label: string;
    link?: string;
    active?: boolean;
  }
  
  interface BreadcrumbsProps {
    breadcrumbs: Breadcrumb[];
  }
const Breadcrums:React.FC<BreadcrumbsProps> = ({ breadcrumbs }) =>{
  return (
    <div className="flex gap-x-2 mt-[52px] text-sm font-semibold mr-20">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={index} className="flex gap-x-2 items-center text-[#AAAAAA]">
          {index > 0 && <img src="icons/LeftArrow.svg" />}
          {breadcrumb.link ? (
            <a
              className={`${
                breadcrumb.active === true ? "text-white" : "text-[#AAAAAA]"
              }`}
              href={breadcrumb.link}
            >
              {breadcrumb.label}
            </a>
          ) : (
            <span
              className={`${
                breadcrumb.active === true ? "text-white" : "text-[#AAAAAA]"
              }`}
            >
              {breadcrumb.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Breadcrums;
