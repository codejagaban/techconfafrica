import searchIcon from "../../images/search-icon.svg";
function SearchBar() {
  return (
    <div className="form-group relative">
      <input
        type="search"
        name="query"
        className="block w-full rounded-lg py-3 px-10 border border-gray-300 outline-black"
        placeholder="Search Name, Location, Field or organizer"
      />
      <img src={searchIcon.src} className="absolute top-4 left-3" />
    </div>
  );
}

export default SearchBar;
