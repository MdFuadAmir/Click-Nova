const Filter = ({ active, setActive }) => {
  const filters = ["All", "Frontend", "Fullstack", "Backend", "UI/UX"];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">

      {filters.map((item, i) => (
        <button
          key={i}
          onClick={() => setActive(item)}
          className={`
            px-4 py-2 rounded-lg text-sm

            ${
              active === item
                ? "bg-indigo-500 text-white"
                : "bg-[#ffffff60] dark:bg-[#ffffff10] text-[#5b5675] dark:text-[#b7b2d9] hover:bg-indigo-500/20"
            }
          `}
        >
          {item}
        </button>
      ))}

    </div>
  );
};

export default Filter;