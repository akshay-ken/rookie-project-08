import pcImg from "../assets/images/image-retro-pcs.jpg";
export function FooterSection() {
  return (
    <footer className="flex flex-col md:flex-row">
      <div className="flex flex-row">
        <img src={pcImg} className="w-28" alt="" />
        <div className="flex flex-col"></div>
      </div>
    </footer>
  );
}
