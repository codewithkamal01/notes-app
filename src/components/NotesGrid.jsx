import NoteCard from "./NoteCard";

function NotesGrid({ notes = [], filter = "all", searchTerm = "", onDeleteNote, onToggleImportant, onEditNote }) {
  // compute heading based on filter and search
  let heading;
  if (searchTerm) {
    heading = `Results for "${searchTerm}"`;
  } else {
    heading =
      filter === "all"
        ? "All Notes"
        : filter.charAt(0).toUpperCase() + filter.slice(1);
  }

  let filtered = notes.filter((note) =>
    filter === "all" ? note.type !== "archive" : note.type === filter
  );

  if (searchTerm) {
    const lower = searchTerm.toLowerCase();
    filtered = filtered.filter(
      (note) =>
        note.title.toLowerCase().includes(lower) ||
        note.content.toLowerCase().includes(lower)
    );
  }

  return (
    <div className="p-4 md:p-8 overflow-y-auto flex-1">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">{heading}</h2>
      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.length > 0 ? (
          filtered.map((note) => (
            <NoteCard key={note.id} note={note} onDeleteNote={onDeleteNote} onToggleImportant={onToggleImportant} onEditNote={onEditNote} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No notes found.
          </p>
        )}
      </div>
    </div>
  );
}

export default NotesGrid;
