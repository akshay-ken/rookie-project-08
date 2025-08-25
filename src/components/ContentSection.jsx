import imgMobile from "../assets/images/image-web-3-mobile.jpg";
import imgDesktop from "../assets/images/image-web-3-desktop.jpg";
export function ContentSection() {
  return (
    <section className="mt-6 md:mt-12">
      <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-2">
        {/* image section */}
        <div className="col-span-2 order-1 md:order-1">
          <img src={imgMobile} className="md:hidden" alt="" />
          <img src={imgDesktop} className="hidden md:block" alt="" />
        </div>
        {/* New section */}
        <div className="bg-rose-600 p-2 row-span-2  order-4 md:order-2">02</div>
        <div className="text-left md:text-7xl text-5xl tracking-wide font-extrabold text-Very-dark-blue order-2 md:order-3">
          The Bright Future of Web 3.0?
        </div>
        <div className="bg-rose-800 p-2   order-3 md:order-4">04</div>
      </div>
    </section>
  );
}
