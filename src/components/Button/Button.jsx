function Button({children, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white bg-cyan-700 cursor-pointer focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none w-full dark:focus:ring-blue-800"
    >
        {children}
    </button>
  );
}

export default Button;
