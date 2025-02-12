import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const books = [
  {
    title: "To Kill A MockingBird",
    author: "Harper Lee",
    imageUrl:
      "https://s-i.huffpost.com/gen/1148926/images/o-CLASSIC-BOOKS-ORIGINAL-COVERS-facebook.jpg",
    rating: "⭐⭐⭐⭐☆",
  },
  {
    title: "The Secret",
    author: "Marco Graeme",
    imageUrl:
      "https://th.bing.com/th/id/R.1c00910c9c1cf131e85b840899e12caf?rik=SA8xw9OUzZa3uA&riu=http%3a%2f%2fwww.dumpaday.com%2fwp-content%2fuploads%2f2015%2f10%2fbook-titles-11.jpg&ehk=j56X0%2fABSN%2b8epZXaLa5j%2f4IeUatCluEL2RUuXPQRjQ%3d&risl=&pid=ImgRaw&r=0",
    rating: "⭐⭐⭐☆☆",
  },
  {
    title: "The Uplolding",
    author: "Parker Marnx",
    imageUrl:
      "https://i.pinimg.com/originals/b1/51/f3/b151f3dbb028adda4d06ccc9dd62f7b6.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      {/* Navbar */}
      <Header />
      {/* Hero Section */}
      <div className="flex-grow container mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Discover, Review, and Share Your Favorite Books
        </h1>
        <p className="text-xl mb-8">
          Join our community of book lovers and explore a world of stories.
        </p>
        <Link
          to="/books"
          className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200"
        >
          Explore Books
        </Link>
      </div>
      {/* Featured Books */}
      <div className="container mx-auto px-6 py-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-gray-800"
            >
              <img
                src={book.imageUrl}
                alt="Book Cover"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-4">Author: {book.author}</p>
              <p className="text-gray-600">Rating: {book.rating}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
