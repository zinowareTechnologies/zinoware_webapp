import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  // useLocation will only work if this component is inside a <BrowserRouter>
  const location = useLocation();

  const navitems = [
    { name: "Home", slug: "/" },
    { name: "About Us", slug: "/about" },
    { name: "Services", slug: "/services" },
    { name: "Contact", slug: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-14 h-14 rounded-full border-2 border-/20 shadow-md"
          />
          <span className="text- text-lg font-semibold tracking-wide">
            Zinoware
          </span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-8">
            {navitems.map((item, index) => {
              const isActive = location.pathname === item.slug;
              return (
                <li key={index}>
                  <Link
                    to={item.slug}
                    className={`relative text-/80 text-sm font-medium transition-colors duration-300 hover:text- ${
                      isActive ? "text-" : ""
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg- transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
