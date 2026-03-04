import { Plus, Search, Menu } from "lucide-react";
function Header({ onAddNote, onSearch, searchValue = "", onMenuOpen }) {
  return (
    <div className="bg-white shadow-sm px-4 md:px-8 py-4 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between md:items-center">
      <div className="flex items-center gap-2 md:hidden">
        <button
          onClick={onMenuOpen}
          className="p-2 hover:bg-gray-100 rounded-lg transition"
          title="Menu"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-lg font-semibold">NotesHub</h1>
      </div>

      <div className="relative w-full md:w-1/3">
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
        className="w-full md:w-auto flex items-center justify-center md:justify-start gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition"
      >
        <Plus size={18} />
        <span>New Note</span>
      </button>
    </div>
  );
}

export default Header;
