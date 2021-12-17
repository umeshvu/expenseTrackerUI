import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AddActivity from "./AddActivity";
import ListActivities from "./ListActivities";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-activity" element={<AddActivity />} />
        <Route path="/list-activities" element={<ListActivities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
