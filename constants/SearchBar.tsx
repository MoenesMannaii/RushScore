interface SearchBarProps {
  isOpen: boolean;
  toggleSearch: () => void;
}

export const SearchBar = ({ isOpen, toggleSearch }: SearchBarProps) => {
  return (
    <div className={`transition-all duration-500 ease-in-out ${isOpen ? "sticky top-0" : "absolute top-full"}`}>
      <div className="container mx-auto flex items-center">
        {isOpen && (
          <div className="relative w-full mt-2 px-2 lg:px-0">
            <input
              type="text"
              className="w-full flex px-4 py-2 tracking-widest focus:outline-none focus:ring-1 focus:ring-[#8A38F4] bg-[#130D25] text-white border border-[#8A38F4]"
              placeholder="Start searching..."
            />
          </div>
        )}
      </div>
    </div>
  );
};
