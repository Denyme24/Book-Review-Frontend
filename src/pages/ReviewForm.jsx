import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ReviewForm = ({ book, onClose }) => {
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/reviews/${book._id}`, { review });
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full text-gray-800">
        <h2 className="text-4xl font-bold mb-6 text-purple-600">
          Review {book.title}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
              placeholder="Write your review here..."
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ReviewForm.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ReviewForm;
