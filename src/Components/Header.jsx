import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/rellogo.png";

export default function Header() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    setShowDropdown(false);
    navigate("/Signin");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-[#E42541] text-white py-2">
      <div className="w-full px-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Extreme Left */}
          <div className="flex-none">
            <div className="cursor-pointer" onClick={() => navigate("/main")}>
              <img className="h-14 w-auto" src={logo} alt="Logo" />
            </div>
          </div>

          {/* Search - Center */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Find your favorite products"
                  className="w-full px-8 py-2.5 border-none rounded-full text-black placeholder-gray-400 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>

          {/* Cart/Profile - Extreme Right */}
          <div className="flex-none flex items-center space-x-6">
            <div
              className="cursor-pointer flex items-center gap-2 hover:text-gray-200"
              onClick={() => navigate("/cart")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="hidden lg:inline font-medium">Cart</span>
            </div>
            <div className="relative">
              {username ? (
                <>
                  <div
                    className="flex items-center gap-2 cursor-pointer hover:text-gray-200"
                    onClick={handleDropdownToggle}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="hidden lg:inline font-medium whitespace-nowrap">
                      Hi <span className="uppercase">{username}</span>
                    </span>
                  </div>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg z-50">
                      <ul className="py-1">
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            navigate("/userProfile");
                            setShowDropdown(false);
                          }}
                        >
                          My Profile
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                          onClick={handleLogout}
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <div
                  className="flex items-center gap-2 cursor-pointer hover:text-gray-200"
                  onClick={() => navigate("/Signin")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span className="hidden lg:inline font-medium">Login</span>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md hover:bg-red-600 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-red-400">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <form onSubmit={handleSearch} className="mb-2">
              <input
                type="search"
                placeholder="Find your favorite products"
                className="w-full px-8 py-2.5 border-none rounded-full text-black placeholder-gray-400 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600"
              onClick={() => {
                navigate("/cart");
                setMobileMenuOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Cart</span>
            </div>
            {username ? (
              <>
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600"
                  onClick={() => {
                    navigate("/userProfile");
                    setMobileMenuOpen(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>My Profile</span>
                </div>
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600"
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                >
                  <span>Logout</span>
                </div>
              </>
            ) : (
              <div
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600"
                onClick={() => {
                  navigate("/Signin");
                  setMobileMenuOpen(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Login</span>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
