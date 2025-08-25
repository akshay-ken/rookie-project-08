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
        <div className="order-3 md:order-4">
          <p className="text-left md:text-xl text-lg  font-medium text-Dark-grayish-blue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button className="bg-Soft-red text-Very-dark-blue tracking-widest uppercase font-semibold py-2 md:py-4 md:px-12 px-6 md:mt-8 mt-4 text-base md:text-xl">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}
