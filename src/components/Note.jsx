import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import NotesGrid from "./NotesGrid";
import NoteModal from "./NoteModal";

const initialNotes = [
  {
    id: 1,
    type: "important",
    title: "Project Ideas",
    content: "Build a MERN stack blog app. Add authentication and markdown support...",
    date: "26 Feb 2026",
  },
  {
    id: 2,
    type: "all",
    title: "Shopping List",
    content: "Milk, Eggs, Bread, Butter",
    date: "25 Feb 2026",
  },
  {
    id: 3,
    type: "archive",
    title: "Old Note",
    content: "This is an archived note.",
    date: "01 Jan 2026",
  },
];

function Note({ filter = "all" }) {
  const [notes, setNotes] = useState(initialNotes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingNote, setEditingNote] = useState(null);

  const handleOpenModal = () => {
    setEditingNote(null);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingNote(null);
  };
  const handleSearch = (term) => setSearchTerm(term);
  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };
  const handleToggleImportant = (id) => {
    setNotes(notes.map(note =>
      note.id === id
        ? { ...note, type: note.type === "important" ? "all" : "important" }
        : note
    ));
  };
  const handleEditNote = (note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleSaveNote = (formData) => {
    if (editingNote) {
      // Update existing note
      setNotes(notes.map(note =>
        note.id === editingNote.id
          ? { ...note, title: formData.title, content: formData.content }
          : note
      ));
    } else {
      // Create new note
      const newNote = {
        id: Math.max(...notes.map(n => n.id), 0) + 1,
        type: "all",
        title: formData.title,
        content: formData.content,
        date: new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit' }).replace(/\//g, ' '),
      };
      setNotes([newNote, ...notes]);
    }
  };

  return (
    <div>
      <div className="flex h-screen bg-gray-100 font-sans">
        <Sidebar />
        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          <Header onAddNote={handleOpenModal} onSearch={handleSearch} searchValue={searchTerm} />
          <NotesGrid notes={notes} filter={filter} searchTerm={searchTerm} onDeleteNote={handleDeleteNote} onToggleImportant={handleToggleImportant} onEditNote={handleEditNote} />
        </main>
      </div>
      <NoteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSaveNote}
        editingNote={editingNote}
      />
    </div>
  );
}

export default Note;
