import { Route, Routes } from "react-router-dom"
import Note from "../components/Note"

function Routing() {
  return (
    <Routes>
      {/* root shows all notes */}
      <Route path="/" element={<Note filter="all" />} />
      <Route path="/important" element={<Note filter="important" />} />
      <Route path="/archive" element={<Note filter="archive" />} />
      {/* catch‑all could redirect to / or show 404 later */}
    </Routes>
  )
}

export default Routing