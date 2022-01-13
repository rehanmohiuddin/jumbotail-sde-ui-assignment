import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components";
import BooksDetails from "./Components/BookDetails";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BooksDetails />} />
      </Routes>
    </div>
  );
}
