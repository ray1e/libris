import { MobileLayout } from "./components/Layout.jsx";
import { useState } from "react";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Route, Routes } from "react-router-dom";
import { AddBook } from "./pages/AddBook.jsx";
import { BookView } from "./pages/BookView.jsx";
function App() {
  //const [rating, setRating] = useState(0);
  return (
    <>
      <Routes>
        <Route path="/" element={<MobileLayout><Dashboard/></MobileLayout>}/>
        <Route path="/addbook" element={<MobileLayout><AddBook/></MobileLayout>}/>
        <Route path="/mybook" element={<MobileLayout><BookView/></MobileLayout>}/>
      </Routes>
    </>
  );
}

export default App;
