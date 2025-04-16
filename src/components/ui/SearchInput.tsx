import { useState } from 'react'

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="relative w-fit h-fit">
        <label htmlFor="searchInput">
          <img src="/icons/Search.svg" className="absolute top-1/3 right-4" />
        </label>
        {inputValue.length > 0 ? (
          <></>
        ) : (
          <label
            htmlFor="searchInput"
            className="absolute text-xs top-[35%] right-[156px] text-[#888888]"
          >
            <span>سفارشات, محصولات و ...</span>
          </label>
        )}

        <input
          onChange={(e) => setInputValue(e.target.value)}
          id="searchInput"
          className=" text-white h-[52px] w-[329px] placeholder:text-sm outline-none rounded-2xl bg-[#272727] px-11"
          placeholder="دنبال چه میگردی؟"
        />
      </div>
  )
}

export default SearchInput
