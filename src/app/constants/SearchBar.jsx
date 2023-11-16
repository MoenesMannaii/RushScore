
export const SearchBar = ({ isOpen, toggleSearch }) => {
  return (
    <div className={`transition-all duration-500 ease-in-out ${isOpen ? "sticky top-0" : "absolute top-full"}`}>
      <div className="container mx-auto flex items-center">
        {isOpen && (
          <div className="relative w-full mt-2">
            <input
              type="text"
              className="w-full flex px-4 py-2 tracking-widest focus:outline-none focus:ring-1 focus:ring-[#8a38f4] bg-[#130D25] text-white border border-[#8a38f4]"
              placeholder="Start searching..."
            />
          </div>
        )}
      </div>
    </div>
  );
};
