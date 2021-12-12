import React, { useState, useEffect } from "react";
import AddButton from "../components/AddButton";
import ListItem from "../components/ListItem";

const NotesListPage = () => {
  let [notes, setNotes] = useState([]);

  let getNotes = async () => {
    let response = await fetch("/api/notes/");
    let data = await response.json();
    setNotes(data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between px-2.5 py-4 bg-colorlighter">
        <h2 className="text-2xl font-semibold text-colormain">&#9782; Notes</h2>
        <p className="text-lg font-semibold text-colormain">{notes.length}</p>
      </div>
      <div className="p-0 my-4 mx-0 overscroll-none">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
      <AddButton />
    </div>
  );
};

export default NotesListPage;
