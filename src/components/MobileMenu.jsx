import { createPortal } from "react-dom";
export function MobileMenu({ onClose }) {
  return createPortal(
    <div
      onClick={onClose}
      className="h-screen fixed inset-0 bg-Dark-grayish-blue/40 bg-blend-overlay w-full"
    >
      <div
        className="w-2/3 bg-Off-white absolute inset-y-0 right-0"
        onClick={(e) => e.stopPropagation()}
      >
        test
      </div>
      <ul></ul>
    </div>,
    document.getElementById("menu")
  );
}
