import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book is deleted successfully!");
        setAllBooks(allBooks.filter((book) => book._id !== id));
      });
  };

  return (
    <div className="px-4  ml-12 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-3 px-4">No.</th>
              <th className="py-3 px-4">Book Name</th>
              <th className="py-3 px-4">Author Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Prices</th>
              <th className="py-3 px-4">Edit or Manage</th>
            </tr>
          </thead>
          <tbody>
            {allBooks.map((book, index) => (
              <tr key={book._id} className="border-b">
                <td className="py-3 px-4 text-center">{index + 1}</td>
                <td className="py-3 px-4">{book.bookTitle}</td>
                <td className="py-3 px-4">{book.authorName}</td>
                <td className="py-3 px-4">{book.category}</td>
                <td className="py-3 px-4">₹{book.Price || 999}</td>
                <td className="py-3 px-4">
                  <Link
                    to={`/admin/dashboard/edit-books/${book._id}`}
                    className="text-blue-500 hover:underline mr-4"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooks;
