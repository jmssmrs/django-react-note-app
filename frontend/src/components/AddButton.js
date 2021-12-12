import React from "react";
import { Link } from "react-router-dom";
import { HiOutlinePlusCircle } from "react-icons/hi";

const AddButton = () => {
  return (
    <Link
      to="/note/new"
      className="text-5xl absolute bottom-6 right-4 bg-colorbg border-none w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow"
    >
      <HiOutlinePlusCircle className="stroke-current text-colormain" />
    </Link>
  );
};

export default AddButton;
