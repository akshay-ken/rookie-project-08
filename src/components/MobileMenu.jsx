import { createPortal } from "react-dom";
export function MobileMenu({ onClose }) {
  return createPortal(
    <div onClick={onClose}>
      <div></div>
      <ul></ul>
    </div>,
    document.getElementById("menu")
  );
}
