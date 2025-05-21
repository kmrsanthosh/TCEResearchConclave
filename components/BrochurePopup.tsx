"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function BrochurePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  
  const brochures = [
    "/assets/images/event-brochures/image1.jpg",
    "/assets/images/event-brochures/image2.jpg",
    "/assets/images/event-brochures/image3.jpg",
  ];

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 500); // Slight delay for better UX
    
    // Add keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") handleClose();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleClose = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 300);
  }, []);

  const nextImage = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % brochures.length);
      setIsAnimating(false);
    }, 300);
  }, [brochures.length, isAnimating]);

  const prevImage = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + brochures.length) % brochures.length);
      setIsAnimating(false);
    }, 300);
  }, [brochures.length, isAnimating]);

  useEffect(() => {
    // Handle click outside to close
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
    >
      <div
        ref={popupRef}
        className={`bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full relative overflow-hidden shadow-2xl transition-transform duration-300 ${
          isAnimating ? "scale-95 opacity-90" : "scale-100 opacity-100"
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none" />
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-all z-20"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        
        <div className="relative h-[80vh] w-full">
          <Image
            src={brochures[currentImageIndex]}
            alt={`Event Brochure ${currentImageIndex + 1}`}
            fill
            style={{ 
              objectFit: "contain",
              transition: "opacity 300ms ease-in-out",
              opacity: isAnimating ? 0.7 : 1
            }}
            priority
            className="select-none"
          />
          
          {/* Side navigation buttons for larger screens */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-all hidden sm:flex items-center justify-center group"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-all hidden sm:flex items-center justify-center group"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-24 pointer-events-none" />
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-6 z-10">
          <button 
            onClick={prevImage}
            className="bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full hover:bg-white/30 transition-all flex items-center space-x-1 sm:hidden"
          >
            <ChevronLeft size={18} />
            <span>Prev</span>
          </button>
          
          <div className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
            {currentImageIndex + 1} / {brochures.length}
          </div>
          
          <button 
            onClick={nextImage}
            className="bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full hover:bg-white/30 transition-all flex items-center space-x-1 sm:hidden"
          >
            <span>Next</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
} 