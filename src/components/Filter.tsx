interface FilterPropsType {
  categories: string[];
  setSearchedText: (text: string) => void;
  setSearchedCategory: (category: string) => void;
  searchedText: string;
  searchedCategory: string;
}

export default function Filter({
  categories,
  setSearchedText,
  setSearchedCategory,
  searchedText,
  searchedCategory,
}: FilterPropsType) {
  const handleReset = () => {
    setSearchedText("");
    setSearchedCategory("");
  };

  return (
    <form className="flex flex-col gap-4 md:flex-row items-center">
      <input
        className="border px-4 py-2 rounded w-full md:w-auto"
        placeholder="Search products..."
        value={searchedText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchedText(e.target.value)
        }
      />
      <div className="w-full flex justify-between md:justify-start md:gap-4">
        <select
          className="border px-4 py-2 rounded"
          value={searchedCategory}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSearchedCategory(e.target.value)
          }
        >
          <option value="">All</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {!searchedCategory && !searchedText ? null : (
          <button
            type="button"
            className="btn btn-light px-4 py-2 shadow"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>
    </form>
  );
}
