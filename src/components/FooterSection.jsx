import pcImg from "../assets/images/image-retro-pcs.jpg";
import keyImg from "../assets/images/image-top-laptops.jpg";
export function FooterSection() {
  return (
    <footer className="flex flex-col gap-10 md:flex-row mt-12 md:mt-0">
      <div className="flex flex-row gap-6 md:basis-1/3">
        <img src={pcImg} className="w-28" alt="" />
        <div className="flex flex-col justify-around">
          <p className="text-3xl font-extrabold text-Soft-red">01</p>
          <p className="text-2xl font-bold text-Very-dark-blue">
            Reviving Retro PCs
          </p>
          <p className="text-xl font-medium text-Dark-grayish-blue">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-6 md:basis-1/3">
        <img src={keyImg} className="w-28" alt="" />
        <div className="flex flex-col justify-around">
          <p className="text-3xl font-extrabold text-Soft-red">02</p>
          <p className="text-2xl font-bold text-Very-dark-blue">
            Top 10 Laptops of 2022
          </p>
          <p className="text-xl font-medium text-Dark-grayish-blue">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-6 md:basis-1/3">
        <img src={pcImg} className="w-28" alt="" />
        <div className="flex flex-col justify-around">
          <p className="text-3xl font-extrabold text-Soft-red">01</p>
          <p className="text-2xl font-bold text-Very-dark-blue">
            Reviving Retro PCs
          </p>
          <p className="text-xl font-medium text-Dark-grayish-blue">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
    </footer>
  );
}
