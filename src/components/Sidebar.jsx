import { NavLink } from "react-router-dom"

function Sidebar() {
  const linkClass = ({ isActive }) =>
    "w-full text-left px-4 flex py-2 rounded-lg transition " +
    (isActive ? "bg-gray-800" : "hover:bg-gray-800");

  return (
    <div className="w-64 bg-gray-900 text-gray-200 flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        NotesHub
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <NavLink to="/" className={linkClass} end>
          All Notes
        </NavLink>
        <NavLink to="/important" className={linkClass}>
          Important
        </NavLink>
        <NavLink to="/archive" className={linkClass}>
          Archive
        </NavLink>
      </nav>

      <div className="p-4 text-sm border-t border-gray-700">
        © 2026 NotesHub
        <p>by kamal manna</p>
      </div>
    </div>
  )
}

export default Sidebar