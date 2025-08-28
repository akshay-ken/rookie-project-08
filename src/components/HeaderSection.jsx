import logo from "../assets/images/logo.svg";
import hbMenu from "../assets/images/icon-menu.svg";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
export function HeaderSection() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  function handleOpenDrawer() {
    setDrawerIsOpen(true);
  }
  function handleCloseDrawer() {
    setDrawerIsOpen(false);
  }
  return (
    <header className="flex flex-row justify-between items-center ">
      <img src={logo} alt="" />
      <nav>
        <img
          src={hbMenu}
          className="block md:hidden"
          alt=""
          onClick={handleOpenDrawer}
        />
        {drawerIsOpen && <MobileMenu />}
        <ul className="hidden md:flex md:flex-row md:p-2 md:gap-x-8 text-xl text-Dark-grayish-blue">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
    </header>
  );
}
