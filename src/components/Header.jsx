import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">BookReview</h1>
          <div className="space-x-6">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/books" className="hover:text-gray-300">
              Books
            </Link>
            <Link to="/profile" className="hover:text-gray-300">
              Profile
            </Link>
            <Link
              to="/submit-review"
              className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-gray-200"
            >
              Submit Review
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
