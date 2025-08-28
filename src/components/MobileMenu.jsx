import { createPortal } from "react-dom";
export function MobileMenu({ onClose }) {
  return createPortal(
    <div
      onClick={onClose}
      className="h-screen absolute top-0 bg-Dark-grayish-blue w-full"
    >
      <div>test</div>
      <ul></ul>
    </div>,
    document.getElementById("menu")
  );
}
