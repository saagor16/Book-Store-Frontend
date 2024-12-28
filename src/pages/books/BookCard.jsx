/* eslint-disable react/prop-types */
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getImgUrl } from "../../utils/getImgUrl";

const BookCard = ({ book }) => {
  return (
    <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="flex flex-col md:flex-row md:h-80 gap-4 p-4">
        {/* Image Section */}
        <div className="md:w-1/3 h-56 md:h-full flex-shrink-0 border rounded-lg overflow-hidden">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${getImgUrl(book?.coverImage)}`}
              alt={book?.title || "Book Cover"}
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 flex flex-col justify-between">
          <Link to={`/books/${book._id}`}>
            <h3 className="text-xl md:text-2xl font-semibold hover:text-blue-600 mb-3">
              {book?.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-4">
            {book?.description.length > 120
              ? `${book.description.slice(0, 120)}...`
              : book?.description}
          </p>
          <div className="text-lg font-medium mb-4">
            ${book?.newPrice}{" "}
            <span className="line-through text-gray-500 font-normal ml-2">
              ${book?.oldPrice}
            </span>
          </div>
          <button className="btn-primary flex items-center justify-center gap-2 py-2 px-6 rounded-md hover:bg-blue-700 transition-colors md:px-8 md:py-3">
            <FiShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
