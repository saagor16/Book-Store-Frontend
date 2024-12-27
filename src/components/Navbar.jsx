import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/**Left Side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6"></HiMiniBars3CenterLeft>
          </Link>

            {/**search input */}
            <div className="relative sm:w-72 w-40 space-x-2">
                <IoSearchOutline className="absolute inline-block left-3 inset-y-2"></IoSearchOutline>
                <input type="text" placeholder="Search here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"/>
            </div>
        </div>

        {/**Right side */}
        <div>nav items</div>
      </nav>
    </header>
  );
};

export default Navbar;
