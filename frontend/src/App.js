import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotePage from "./pages/NotePage";
import NotesListPage from "./pages/NotesListPage";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen flex items-center bg-colorbg">
        <div className="w-full max-w-lg h-screen/2 mx-auto my-auto relative shadow bg-colorwhite">
          <Header />
          <Routes>
            <Route path="/" exact element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
