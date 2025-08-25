import logo from "../assets/images/logo.svg";
import hbMenu from "../assets/images/icon-menu.svg";
export function HeaderSection() {
  return (
    <header className="flex flex-row justify-between items-center">
      <img src={logo} alt="" />
      <nav>
        <img src={hbMenu} className="block md:hidden" alt="" />
      </nav>
    </header>
  );
}

/* 
<div class="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-2">
  <div class="bg-rose-400 p-2 col-span-2  order-1 md:order-1">01</div>
  <div class="bg-rose-600 p-2 row-span-2  order-4 md:order-2">02</div>
  <div class="bg-rose-800 p-2  order-2 md:order-3">03</div>
  <div class="bg-rose-800 p-2   order-3 md:order-4">04</div>
  
</div>
*/
