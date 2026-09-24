import { MobileLayout } from "./components/Layout.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Route, Routes } from "react-router-dom";
import { AddBook } from "./pages/AddBook.jsx";
import { BookView } from "./pages/BookView.jsx";

function App() {
  //const [rating, setRating] = useState(0);
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/addbook" element={<AddBook/>}/>
        <Route path="/mybook/:id" element={<BookView/>}/>
      </Routes>
    </>
  );
}

export default App;
