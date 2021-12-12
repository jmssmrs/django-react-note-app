import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const NotePage = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  let [note, setNote] = useState({});

  useEffect(() => {
    let getNote = async () => {
      if (id === "new") return;

      let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}`);
      let data = await response.json();
      setNote(data);
    };

    getNote();
  }, [id]);

  let updateNote = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/${id}/update`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let deleteNote = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/${id}/delete`, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
      },
    });
    navigate("/");
  };

  let createNote = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/create`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let handleSubmit = () => {
    if (id !== "new" && note.body === "") {
      deleteNote();
      console.log("no note");
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note.body !== null) {
      createNote();
    }
    navigate("/");
  };

  let handleChange = (value) => {
    setNote((note) => ({ ...note, body: value }));
  };

  return (
    <div className="note">
      <div className="flex items-center justify-between px-2.5 py-4 bg-colorlighter">
        <h3 className="flex items-center text-2xl cursor-pointer">
          <svg
            onClick={handleSubmit}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 stroke-current text-colormain"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </h3>
        {id !== "new" ? (
          <button
            className="border-none outline-none font-semibold bg-transparent text-lg cursor-pointer text-colormain"
            onClick={deleteNote}
          >
            Delete
          </button>
        ) : (
          <button
            className="border-none outline-none font-semibold bg-transparent text-lg cursor-pointer text-colormain"
            onClick={handleSubmit}
          >
            Done
          </button>
        )}
      </div>
      <textarea
        className="bg-colorwhite text-colordark border-none py-4 px-3 w-full h-screen/3"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        value={note.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
