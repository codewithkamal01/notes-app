import { NavLink } from "react-router-dom"

function Sidebar({ isOpen, onClose }) {
  const linkClass = ({ isActive }) =>
    "w-full text-left px-4 flex py-2 rounded-lg transition " +
    (isActive ? "bg-gray-800" : "hover:bg-gray-800");

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed md:relative md:translate-x-0 w-64 bg-gray-900 text-gray-200 flex flex-col h-screen md:h-auto z-50 transition-transform duration-300`}>
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          NotesHub
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <NavLink to="/" className={linkClass} end onClick={onClose}>
            All Notes
          </NavLink>
          <NavLink to="/important" className={linkClass} onClick={onClose}>
            Important
          </NavLink>
          <NavLink to="/archive" className={linkClass} onClick={onClose}>
            Archive
          </NavLink>
        </nav>

        <div className="p-4 text-sm border-t border-gray-700">
          © 2026 NotesHub
          <p>by kamal manna</p>
        </div>
      </div>
    </>
  )
}

export default Sidebar