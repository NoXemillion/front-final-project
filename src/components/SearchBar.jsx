const SearchBar = ({ searchQuery, setSearchQuery, searchType, setSearchType, handleSearch }) => {
    return (
      <div className="mb-4 grid grid-cols-3 gap-4 items-center">
        <input
          type="text"
          placeholder="Search by username, email, or user ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="username">Username</option>
          <option value="email">Email</option>
          <option value="userId">User ID</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Search
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  