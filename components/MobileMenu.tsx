import React from "react";
interface MobileMenuProps {
  visible?: boolean;
  setMobileMenu: (data: boolean) => void;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ visible, setMobileMenu }) => {
  const hideMobileMenu = () => {
    setMobileMenu(false);
  };
  if (!visible) {
    return null;
  }

  return (
    <div
      onMouseLeave={hideMobileMenu}
      className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-grey-800 flex "
    >
      <div className="flex flex-col gap-4 ">
        <div className="px-3 text-center text-white hover:underline">Home</div>
        <div className="px-3 text-center text-white hover:underline">
          Tv Shows
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Movies
        </div>
        <div className="px-3 text-center text-white hover:underline">
          New & Popular
        </div>
        <div className="px-3 text-center text-white hover:underline">
          My List
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Browse by Languages
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
