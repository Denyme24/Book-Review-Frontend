import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const BookListing = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ genre: "", rating: "" });

  // Fetch books from the backend
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/books", {
        params: {
          page,
          search: searchQuery,
          genre: filters.genre,
          rating: filters.rating,
        },
      });
      setBooks(response.data.books);
      setTotalPages(response.data.totalPages);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [page, searchQuery, filters]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Book Listing</h1>

        {/* Search Bar */}
        <div className="mb-8 ">
          <input
            type="text"
            placeholder="Search books by title or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
          />
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <select
            value={filters.genre}
            onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent "
          >
            <option className="text-black" value="">
              All Genres
            </option>
            <option className="text-black" value="fiction">
              Fiction
            </option>
            <option className="text-black" value="non-fiction">
              Non-Fiction
            </option>
            <option className="text-black" value="sci-fi">
              Sci-Fi
            </option>
            <option className="text-black" value="mystery">
              Mystery
            </option>
          </select>
          <select
            value={filters.rating}
            onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent "
          >
            <option className="text-black" value="">
              All Ratings
            </option>
            <option className="text-black" value="5">
              5 Stars
            </option>
            <option className="text-black" value="4">
              4 Stars & above
            </option>
            <option className="text-black" value="3">
              3 Stars & above
            </option>
          </select>
        </div>

        {/* Book List */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <Link key={book.id} to={`/books/${book._id}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-56 object-cover mb-4 rounded-lg"
                  />
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {book.title}
                  </h2>
                  <p className="text-gray-600 mb-2">By {book.author}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-lg">⭐</span>
                    <span className="text-gray-700 ml-1">{book.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-8 flex justify-center items-center space-x-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300"
          >
            Previous
          </button>
          <span className="text-lg font-semibold">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === totalPages}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookListing;
