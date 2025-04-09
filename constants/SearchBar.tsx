import React, { useState } from 'react';

interface SearchBarProps {
  isOpen: boolean;
  toggleSearch: () => void;
  data: string[]; // Assuming you're searching through an array of strings
}

export const SearchBar = ({ isOpen, toggleSearch, data }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      // Filter data based on the query
      const filteredResults = data.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]); // Clear results if query is empty
    }
  };

  return (
    <div className={`transition-all duration-500 ease-in-out ${isOpen ? "sticky top-0" : "absolute top-full"}`}>
      <div className="container mx-auto flex items-center">
        {isOpen && (
          <div className="relative w-full mt-2 px-2 lg:px-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full flex px-4 py-2 tracking-widest focus:outline-none focus:ring-1 focus:ring-[#8A38F4] bg-[#130D25] text-white border border-[#8A38F4]"
              placeholder="Start searching..."
            />
            {results.length > 0 && (
              <div className="absolute z-10 w-full bg-white text-black mt-1 rounded-md shadow-lg">
                {results.map((result, index) => (
                  <div key={index} className="px-4 py-2 hover:bg-[#8A38F4] hover:text-white cursor-pointer">
                    {result}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
