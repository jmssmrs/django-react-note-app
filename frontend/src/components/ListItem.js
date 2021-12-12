import React from "react";
import { Link } from "react-router-dom";

let getTime = (note) => {
  return new Date(note.updated).toLocaleDateString();
};

let getTitle = (note) => {
  let title = note.body.split("\n")[0];
  if (title.length > 45) {
    return title.slice(0, 45);
  }
  return title;
};

let getContent = (note) => {
  let title = getTitle(note);
  let content = note.body.replaceAll("\n", " ");
  content = content.replaceAll(title, "");

  if (content.length > 45) {
    return content.slice(0, 45) + "...";
  } else {
    return content;
  }
};

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="border-b-2 border-colorborder mb-3 py-2 px-4 transition-all hover:bg-colorbg">
        <h3 className="font-semibold text-xl text-colordark">
          {getTitle(note)}
        </h3>
        <p className="font-semibold text-sm inline-block mr-2 text-colorgray">
          <span className="font-semibold inline-block mr-2 text-gray-400">
            {getTime(note)}
          </span>
          {getContent(note)}
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
