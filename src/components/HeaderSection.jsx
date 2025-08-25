import logo from "../assets/images/logo.svg";
import hbMenu from "../assets/images/icon-menu.svg";
export function HeaderSection() {
  return (
    <header className="flex flex-row justify-between items-center ">
      <img src={logo} alt="" />
      <nav>
        <img src={hbMenu} className="block md:hidden" alt="" />
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
