import { useState } from "react";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";

const NoteCard = ({ note, setNotes }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = async () => {
    try {
      await api.delete(`/notes/${note._id}`);

      setNotes((prev) =>
        prev.filter((n) => n._id !== note._id)
      );

      setConfirmDelete(false);
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setShowModal(true)}
        className="card bg-base-100 shadow-md hover:shadow-lg transition p-4 cursor-pointer"
      >
        <div>
          <h3 className="card-title text-base-content">
            {note.title}
          </h3>
          <p className="text-base-content/70 line-clamp-3">
            {note.content}
          </p>
        </div>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/50">
            {formatDate(new Date(note.createdAt))}
          </span>

          <div className="flex items-center gap-2">
            {/* EDIT */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/note/${note._id}`);
              }}
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <PenSquareIcon className="w-4 h-4" />
            </button>

            {/* DELETE */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
                setConfirmDelete(true);
              }}
              className="p-2 rounded-full hover:bg-red-100 transition text-red-500"
            >
              <Trash2Icon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-base-100 p-6 rounded-xl shadow-xl max-w-xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">
              {note.title}
            </h2>
            <p className="text-base-content/80 whitespace-pre-wrap">
              {note.content}
            </p>
          </div>
        </div>
      )}

      {confirmDelete && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setConfirmDelete(false)}
        >
          <div
            className="bg-base-100 p-6 rounded-xl shadow-xl w-80 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">
              Are you sure?
            </h2>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-600"
              >
                Yes
              </button>

              <button
                onClick={() => setConfirmDelete(false)}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteCard;