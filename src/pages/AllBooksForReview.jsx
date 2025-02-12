import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import ReviewForm from "./ReviewForm";

const AllBooksForReview = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/books");
        setBooks(response.data.books);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleReviewClick = (book) => {
    setSelectedBook(book);
  };

  const closeReviewForm = () => {
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">
          All Books for Review
        </h1>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <div key={book._id} className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-56 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {book.title}
                </h2>
                <p className="text-gray-600 mb-2">By {book.author}</p>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 text-lg">⭐</span>
                  <span className="text-gray-700 ml-1">{book.rating}</span>
                </div>
                <button
                  onClick={() => handleReviewClick(book)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300"
                >
                  Review
                </button>
              </div>
            ))}
          </div>
        )}
        {selectedBook && (
          <ReviewForm book={selectedBook} onClose={closeReviewForm} />
        )}
      </div>
    </div>
  );
};

export default AllBooksForReview;
