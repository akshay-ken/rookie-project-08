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

        <div className="row-span-2 mt-12 md:mt-0 px-4 py-6 md:px-6 md:py-8 flex flex-col items-start h-fit gap-y-6 justify-around bg-Very-dark-blue order-4 md:order-2">
          {/* New section */}
          <p className="text-3xl font-semibold text-Soft-orange">New</p>
          <div>
            <p className="text-xl font-semibold text-Off-white mb-2">
              Hydrogen VS Electric Cars
            </p>
            <p className="text-Grayish-blue text-lg font-normal">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <hr className=" text-Grayish-blue w-full" />
          <div>
            <p className="text-xl font-semibold text-Off-white mb-2">
              The Downsides of AI Artistry
            </p>
            <p className="text-Grayish-blue text-lg font-normal">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <hr className=" text-Grayish-blue w-full" />
          <div>
            <p className="text-xl font-semibold text-Off-white mb-2">
              Is VC Funding Drying Up?
            </p>
            <p className="text-Grayish-blue text-lg font-normal">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
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
