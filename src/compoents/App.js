import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import ListActivities from "./ListActivities";
import Expense from "./Expense";
import Income from "./Income";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-expense" element={<Expense />} />
        <Route path="/add-income" element={<Income />} />
        <Route path="/list-activities" element={<ListActivities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
