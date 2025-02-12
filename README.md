# Book Review Application

The **Book Review Application** is a full-stack web application that allows users to browse, review, and rate books. It consists of a frontend built with modern web technologies and a backend powered by a robust API.

---

## Features

- **User Authentication**: Sign up, log in, and manage your profile.
- **Browse Books**: View a list of available books with details.
- **Book Reviews**: Read and write reviews for books.
- **Rating System**: Rate books on a scale (e.g., 1 to 5 stars).
- **Search Functionality**: Search for books by title, author, or genre.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

---

## Technologies Used

### Frontend

- **React.js**: A JavaScript library for building user interfaces.
- **Axios**: For making HTTP requests to the backend API.
- **TailwindCSS**: For styling the application.
- **React Router**: For handling client-side routing.

### Backend

- **Node.js**: A JavaScript runtime for building the backend.
- **Express.js**: A web framework for Node.js.
- **MongoDB**: A NoSQL database for storing book and user data.
- **JWT (JSON Web Tokens)**: For user authentication and authorization.

---

## Screenshots

### Home Page

![Home Page](/public/home_page.png) <!-- Replace with your screenshot -->

### Book Listing Page

![Book Details Page](/public/Book_listing.png)

### Book Details Page

![Book Details Page](/public/Book_details.png) <!-- Replace with your screenshot -->

### Review Page

![Review Page](/public/Feedback.png) <!-- Replace with your screenshot -->

 <!-- Replace with your screenshot -->

---

## Installation

### Frontend Setup

1. Clone the frontend repository:
   ```bash
   git clone https://github.com/Denyme24/Book-Review-Frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`.

### Backend Setup

1. Clone the backend repository:
   ```bash
   git clone https://github.com/Denyme24/Book-Review-Backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
5. Start the server:
   ```bash
   npm start
   ```
6. The backend will run on `http://localhost:5000`.

---

## Usage

1. **Sign Up**: Create a new account to start using the application.
2. **Log In**: Use your credentials to log in.
3. **Browse Books**: Explore the list of books available.
4. **Write Reviews**: Share your thoughts on books you’ve read.
5. **Rate Books**: Rate books on a scale of 1 to 5 stars.
6. **Search**: Use the search bar to find specific books.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Email**: rajnaman488@gmail.com <!-- Replace with your email -->
- **GitHub**: [Denyme24](https://github.com/Denyme24)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile) <!-- Replace with your LinkedIn URL -->

---

## Acknowledgments

- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
