import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaBars,
  // FaDribbble,
  // FaFacebook,
  // FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import { useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/Destinations", link: "Destinations" },
    { path: "/exams", link: "Exams" },
    { path: "/services", link: "Services" },
    { path: "/contact", link: "Contact" },
  ];

  const subLinks = [
    { path: "/Destinations/AboutUSA", link: "USA" },
    { path: "/Destinations/AboutGermany", link: "Germany" },
    { path: "/Destinations/AboutEngland", link: "England" },
    { path: "/Destinations/AboutCanada", link: "Canada" },
    { path: "/Destinations/AboutAustralia", link: "Australia" },
  ];

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-50">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-3xl font-bold text-white">
          Study<span className="text-orange-500">Abroad</span>
        </a>

        {/* NavItems */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li
              className="text-white relative"
              key={path}
              onMouseEnter={link === "Destinations" ? handleMouseEnter : null}
            >
              {link === "Destinations" ? (
                <span
                  className="cursor-pointer"
                  onClick={(e) => {
                    if (isDropdownOpen) {
                      e.preventDefault();
                    }
                  }}
                >
                  {link}
                </span>
              ) : (
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                  to={path}
                >
                  {link}
                </NavLink>
              )}
              {link === "Destinations" && isDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-40 bg-white text-black shadow-lg rounded-md"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {subLinks.map(({ path, link }) => (
                    <NavLink
                      to={path}
                      className={`${({ isActive, isPending }) =>
                        isActive
                          ? "active"
                          : isPending
                          ? "pending"
                          : ""}dropdown-item p-2 block`}
                      key={path}
                    >
                      {link}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* MenuItems */}
        <div className="text-white lg:flex gap-4 item-center hidden">
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
                Sign Up For Free
              </button>
            )}
          </Link>
        </div>

        {/* Mobile Nav */}
        <div>
          <button onClick={toggleMenu} className="cursor-pointer md:hidden">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Menu Items only for mobile */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li className="text-black" key={path}>
              <NavLink onClick={toggleMenu} to={path}>
                {link}
              </NavLink>
              {link === "Destinations" && (
                <ul className="space-y-2">
                  {subLinks.map(({ path, link }) => (
                    <li key={path}>
                      <NavLink onClick={toggleMenu} to={path}>
                        {link}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
