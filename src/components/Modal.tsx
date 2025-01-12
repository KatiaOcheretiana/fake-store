import { ReactNode } from "react";

interface ModalPropsType {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalPropsType) {
  if (!open) return null;

  return (
    // Backdrop
    <div
      onClick={onClose}
      className="overflow-hidden fixed inset-0 flex justify-center items-center bg-black/20 backdrop-blur-sm z-50"
    >
      {/* Modal content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className=" relative mx-4 md:mx-0 bg-white rounded-md shadow-md p-6 w-full max-w-lg transition-transform duration-300"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-2 right-2 p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
