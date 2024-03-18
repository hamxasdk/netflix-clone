import React, { useCallback, useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
const OFF_SET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= OFF_SET) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="text-white w-full  fixed z-40">
      <div
        className={` px-4
  md:px-16
  py-6
  flex
  flex-row
  items-center
  transition
  duration-500
  ${
    showBg
      ? `bg-zinc-900
    bg-opacity-90`
      : ""
  }
 `}
      >
        <img src="/images/logo.png" alt="" className="h-4 lg:h-7" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Tv Shows" />
          <NavbarItem label="Movies" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          onMouseEnter={() => setShowMobileMenu(true)}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-whilte text-sm">Browse</p>
          <BsChevronDown />
          <MobileMenu
            visible={showMobileMenu}
            setMobileMenu={setShowMobileMenu}
          />
        </div>
        {/* Right Side of the NavBar */}
        <div className="flex flex-row ml-auto gap-7 items-center ">
          <div className="text-grey-200 hover:text-grey-300 cursor-pointer transition ">
            <BsSearch />
          </div>
          <div className="text-grey-200 hover:text-grey-300 cursor-pointer transition ">
            <BsBell />
          </div>
          <div
            onClick={toggleAccountMenu}
            onMouseEnter={() => setShowAccountMenu(true)}
            className="flex flex-row items-center gap-2 cursor-pointer relative "
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-red.png" alt="" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu
              visible={showAccountMenu}
              setAccountMenu={setShowAccountMenu}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
