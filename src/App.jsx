import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookListing from "./pages/BookListing";
import BookDetails from "./pages/BookDetails";
// import UserProfile from "./pages/UserProfile";
// import ReviewForm from "./pages/ReviewForm";
import AllBooksForReview from "./pages/AllBooksForReview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookListing />} />
        <Route path="/books/:id" element={<BookDetails />} />
        {/* <Route path="/profile" element={<UserProfile />} /> */}
        <Route path="/submit-review" element={<AllBooksForReview />} />
      </Routes>
    </Router>
  );
}

export default App;
