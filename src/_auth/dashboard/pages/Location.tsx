import EmptyAdress from "../../../components/dashboard/EmptyAdress";

const Location = () => {
  const address = [{

  }
];
  return (
    <div>
      <div className="flex items-center bg-[#262626] mt-6 px-4 py-3 rounded-2xl">
        <img src="/icons/DetailsActive.svg" />
        <h4 className="text-[#A573F4]">مشخصات حقیقی</h4>
      </div>
      <div className="bg-[#262626] mt-6 rounded-2xl p-6 h-screen">
        {address === null ? (
          <div>
            
          </div>
        ) : (
          <EmptyAdress/>
        )}
      </div>
    </div>
  );
};

export default Location;
