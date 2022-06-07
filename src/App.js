import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Student from "./pages/Studend";
import Addstudent from "./pages/Addstudent";
import Editstudent from "./pages/Editstudent";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Student />} />
        <Route exact path="/add-student" element={<Addstudent />} />
        <Route exact path="/edit-student/:id" element={<Editstudent />} />
      </Routes>
    </Router>
  );
}

export default App;
