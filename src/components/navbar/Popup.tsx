"use client";

import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
  position?: { top: number; left: number } | null;
  children: React.ReactNode;
  onMouseLeave?: () => void;
}

const PopupComponent = ({
  isOpen,
  onClose,
  containerRef,
  position,
  children,
  onMouseLeave,
}: PopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !containerRef.current) return null;

  return ReactDOM.createPortal(
    <div
      ref={popupRef}
      className="fixed left-0 top-0 -translate-x-1/2 bg-white p-[15px] rounded-[8px] shadow-[0px_8px_8px_rgba(0,0,0,0.1)] z-[3000]"
      style={{
        top: position?.top ?? 0,
        left: position?.left ?? 0,
      }}
      onMouseLeave={onMouseLeave}
    >
      <div className="fixed left-1/2 -translate-x-1/2 z-[3000] top-[-10px]">
        <svg viewBox="0 0 20 15" width="20px" height="15px">
          <path
            d="M10 2
         A1.2 1.2 0 0 1 11.2 2.7
         L17.5 10
         A1.2 1.2 0 0 1 16.9 11.7
         L3.1 11.7
         A1.2 1.2 0 0 1 2.5 10
         L8.8 2.7
         A1.2 1.2 0 0 1 10 2"
            fill="white"
          />
        </svg>
      </div>
      {children}
    </div>,
    document.body
  );
};

export default PopupComponent;
