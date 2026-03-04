import { Star, Trash, Pencil } from "lucide-react";

function NoteCard({ note, onDeleteNote, onToggleImportant, onEditNote }) {
  if (!note) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300 cursor-pointer group">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-800">{note.title}</h2>
          <p className="text-sm text-gray-500 mt-2 line-clamp-3">{note.content}</p>
        </div>
        <div className="flex gap-1 ml-2 opacity-0 group-hover:opacity-100 transition">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEditNote && onEditNote(note);
            }}
            className="p-1 text-gray-400 hover:text-blue-600 transition"
            title="Edit note"
          >
            <Pencil size={18} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDeleteNote && onDeleteNote(note.id);
            }}
            className="p-1 text-gray-400 hover:text-red-600 transition"
            title="Delete note"
          >
            <Trash size={18} />
          </button>
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-400 flex items-center justify-between">
        {note.date}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleImportant && onToggleImportant(note.id);
          }}
          className="p-1 transition"
          title={note.type === "important" ? "Remove from important" : "Mark as important"}
        >
          <Star
            className={note.type === "important" ? "text-yellow-500" : "text-gray-400"}
            size={18}
            fill={note.type === "important" ? "currentColor" : "none"}
          />
        </button>
      </div>
    </div>
  );
}

export default NoteCard