import React from "react";
import { signOut } from "next-auth/react";
interface AccountMenuProps {
  visible?: boolean;
  setAccountMenu: (data: boolean) => void;
}
const AccountMenu: React.FC<AccountMenuProps> = ({
  visible,
  setAccountMenu,
}) => {
  const hideAccountMenu = () => {
    setAccountMenu(false);
  };

  if (!visible) {
    return null;
  }
  return (
    <div
      onMouseLeave={hideAccountMenu}
      className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-grey-800 flex"
    >
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full ">
          <img
            src="/images/default-red.png"
            alt=""
            className=" w-8 rounded-md"
          />
          <p className="text-white text-sm group-hover/item:underline">
            UserName
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4 " />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign Out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
