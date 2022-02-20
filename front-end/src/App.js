import { Routes, Route } from "react-router-dom";
import Edit from "../Pages/Edit";
import FourOFour from "../Pages/FourOFour";
import Home from "../Pages/Home";
import Index from "../Pages/Index";
import Show from "../Pages/Show";
import New from "../Pages/New";
import NavBar from "../Components/NavBars";

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Index />} />
          <Route path="/games/new" element={<New />} />
          <Route path="/games/:id" element={<Show />} />
          <Route path="/games/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
    </>
  );
}
