interface inputComponents {
  icon: string,
  placeholder: string
}
const FromInput : React.FC<inputComponents> = ({
  icon,
  placeholder,
}) => {
  return (
    <div className="relative mt-2 w-fit">
      <input
        id="from-input"
        placeholder={placeholder}
        className="px-4 py-3 rounded-xl bg-[#333333] w-80 outline-none"
      />
      <label htmlFor="from-input">
        <img src={icon} className="absolute top-3 left-4" />
      </label>
    </div>
  );
};

export default FromInput;
