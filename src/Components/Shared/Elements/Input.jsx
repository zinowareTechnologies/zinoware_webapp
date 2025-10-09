// Input.js

const Input = () => {
  return (
    <input
      type="text"
      placeholder="Enter your text here"
      className="
        w-full max-w-md
        px-5 py-3
        rounded-xl
        border border-gray-300
        text-gray-900
        text-lg
        shadow-sm
        placeholder-gray-400
        focus:outline-none
        focus:ring-4
        focus:ring-[#16c3e7]/50
        focus:border-[#16c3e7]
        transition
        duration-200
        ease-in-out
        bg-white
      "
    />
  );
};

export default Input;
