import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${note._id}`);
      setNotes((prevNotes) => prevNotes.filter((n) => n._id !== note._id)); //get rid of deleted one 
      toast.success("Note deleted successfully!");
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Error deleting note");
    }
  };
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition p-4">

      <Link to={`/note/${note._id}`}>
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">
          {note.content}
        </p>
      </Link>

      <div className="card-actions justify-between items-center mt-4">
        <span className="text-sm text-base-content/50">
          {formatDate(new Date(note.createdAt))}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(`/edit/${note._id}`)}
            className="p-2 rounded-full hover:bg-gray-200 transition"
          >
            <PenSquareIcon className="w-4 h-4" />
          </button>

          <button
            onClick={handleDelete}
            className="p-2 rounded-full hover:bg-red-100 transition text-red-500"
          >
            <Trash2Icon className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}

export default NoteCard