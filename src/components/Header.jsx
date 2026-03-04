import { Plus, Search} from "lucide-react";
function Header({ onAddNote, onSearch, searchValue = "" }) {
  return (
    <div className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
      <div className="relative w-1/3">
        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        <input
          value={searchValue}
          onChange={(e) => onSearch && onSearch(e.target.value)}
          type="text"
          placeholder="Search notes..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <button
        onClick={onAddNote}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition"
      >
        <Plus size={18} />
        New Note
      </button>
    </div>
  );
}

export default Header;
