import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/books/${id}`);
        setBook(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/reviews/${id}`);
        setReviews(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      {/* Navbar */}
      <Header />
      <div className="container mx-auto p-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-3xl mx-auto text-gray-800">
            {/* Book Cover and Details */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Book Cover */}
              <img
                src={book.cover}
                alt={book.title}
                className="w-64 h-96 object-cover rounded-lg shadow-md"
              />

              {/* Book Details */}
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-4 text-purple-600">
                  {book.title}
                </h2>
                <p className="text-xl text-gray-700 mb-3">
                  <span className="font-semibold">Author:</span> {book.author}
                </p>
                <p className="text-xl text-gray-700 mb-3">
                  <span className="font-semibold">Rating:</span>{" "}
                  <span className="text-yellow-500">{book.rating} ⭐</span>
                </p>
                <p className="text-xl text-gray-700 mb-6">
                  <span className="font-semibold">Genre:</span> {book.genre}
                </p>

                {/* Book Description */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">
                Reviews
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                {reviews.length > 0 ? (
                  reviews.map((review, index) => (
                    <div key={index} className="mb-4">
                      <p className="text-gray-700">{review}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-700">
                    No reviews yet. Be the first one to review this book!
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
