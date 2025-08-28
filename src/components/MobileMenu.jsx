import { createPortal } from "react-dom";
export function MobileMenu({ onClose }) {
  return createPortal(
    <div
      onClick={onClose}
      className="h-screen fixed inset-0 bg-Dark-grayish-blue/40 bg-blend-overlay p-6 w-full"
    >
      <div>test</div>
      <ul></ul>
    </div>,
    document.getElementById("menu")
  );
}
