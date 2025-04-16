import React from "react";
import { Link, useLocation } from "react-router-dom";

interface componentProps {
  zyprix: { title: string; url: string; icon: string; activeIcon: string }[];
  store: { title: string; url: string; icon: string; activeIcon: string }[];
  user: { title: string; url: string; icon: string; activeIcon: string }[];
}

const SideBarButton: React.FC<componentProps> = ({ zyprix, store, user }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="text-white px-5 flex flex-col justify-between h-[78%]">
      <div>
        <span className="text-[#6A6A6A] text-sm mt-11">زیپریکس</span>
        {zyprix.map((data, ind) => (
          <Link
            key={ind}
            to={data.url}
            className={`${
              location.pathname === data.url ? "bg-[#2F2F2F]" : ""
            } hover:bg-[#2F2F2F] flex my-2 px-1 py-2 rounded-lg items-center gap-x-2 `}
          >
            {location.pathname === data.url ? (
              <img src={data.activeIcon} />
            ) : (
              <img src={data.icon} />
            )}

            <span>{data.title}</span>
          </Link>
        ))}
        <span className="text-[#6A6A6A] text-sm mt-11">زیپریکس</span>
        {store.map((data, ind) => (
          <Link
            key={ind}
            to={data.url}
            className={`${
              location.pathname === data.url ? "bg-[#2F2F2F]" : ""
            } hover:bg-[#2F2F2F] flex my-2 px-1 py-2 rounded-lg items-center gap-x-2 `}
          >
            {location.pathname === data.url ? (
              <img src={data.activeIcon} />
            ) : (
              <img src={data.icon} />
            )}

            <span>{data.title}</span>
          </Link>
        ))}
        <span className="text-[#6A6A6A] text-sm mt-11">زیپریکس</span>
        {user.map((data, ind) => (
          <Link
            key={ind}
            to={data.url}
            className={`${
              location.pathname === data.url ? "bg-[#2F2F2F]" : ""
            } hover:bg-[#2F2F2F] flex my-2 px-1 py-2 rounded-lg items-center gap-x-2 `}
          >
            {location.pathname === data.url ? (
              <img src={data.activeIcon} />
            ) : (
              <img src={data.icon} />
            )}

            <span>{data.title}</span>
          </Link>
        ))}
      </div>
      <div className="hover:bg-[#2F2F2F] flex my-2 px-1 py-2 rounded-lg items-center gap-x-2 text-red-500 ">
        <img src="/icons/Exit.svg" />
        <button>خروج از حساب</button>
      </div>
    </div>
  );
};

export default SideBarButton;
