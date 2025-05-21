"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function BrochurePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const popupRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const brochures = [
    "/assets/images/event-brochures/image1.jpg",
    "/assets/images/event-brochures/image2.jpg",
    "/assets/images/event-brochures/image3.jpg",
  ];

  // Preload images for smoother transitions
  useEffect(() => {
    brochures.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
    });
  }, []);

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 500);
    
    // Add keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") handleClose();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
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
    setLoading(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % brochures.length);
      setIsAnimating(false);
    }, 300);
  }, [brochures.length, isAnimating]);

  const prevImage = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setLoading(true);
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
  
  // Touch swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 75;
    const isRightSwipe = distance < -75;
    
    if (isLeftSwipe) {
      nextImage();
    }
    
    if (isRightSwipe) {
      prevImage();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-md transition-all duration-500 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
    >
      <div
        ref={popupRef}
        className={`bg-white/10 dark:bg-gray-900/30 backdrop-blur-md rounded-2xl max-w-5xl w-full relative overflow-hidden shadow-2xl border border-white/20 transition-all duration-500 ${
          isAnimating ? "scale-95 opacity-90" : "scale-100 opacity-100"
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />
        
        {/* Title area */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 z-20">
          <h3 className="text-white font-medium text-lg pl-2">Event Brochure</h3>
          <div className="flex gap-2">
            <button 
              onClick={handleClose}
              className="text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-all"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        <div 
          ref={imageRef}
          className="relative h-[80vh] w-full transition-all duration-500"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
              <div className="w-12 h-12 rounded-full border-4 border-white border-t-transparent animate-spin" />
            </div>
          )}
          
          <Image
            src={brochures[currentImageIndex]}
            alt={`Event Brochure ${currentImageIndex + 1}`}
            fill
            style={{ 
              objectFit: "contain",
              transition: "all 300ms ease-in-out",
              opacity: isAnimating ? 0.7 : 1
            }}
            priority
            className="select-none"
            onLoad={() => setLoading(false)}
          />
          
          {/* Side navigation buttons for larger screens */}
          <>
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
          </>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-32 pointer-events-none" />
        
        {/* Bottom controls */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col space-y-3 items-center p-6 z-10">
          {/* Image preview dots */}
          <div className="flex space-x-2 mb-2">
            {brochures.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index !== currentImageIndex) {
                    setIsAnimating(true);
                    setLoading(true);
                    setTimeout(() => {
                      setCurrentImageIndex(index);
                      setIsAnimating(false);
                    }, 300);
                  }
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentImageIndex === index 
                    ? "bg-white scale-110" 
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`View brochure ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Mobile navigation controls */}
          <div className="flex w-full justify-between items-center sm:justify-center sm:space-x-6">
            <button 
              onClick={prevImage}
              className="bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full hover:bg-white/30 transition-all flex items-center space-x-1.5 sm:px-6 sm:py-3"
            >
              <ChevronLeft size={18} />
              <span className="font-medium">Prev</span>
            </button>
            
            <div className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hidden sm:block">
              {currentImageIndex + 1} / {brochures.length}
            </div>
            
            <button 
              onClick={nextImage}
              className="bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full hover:bg-white/30 transition-all flex items-center space-x-1.5 sm:px-6 sm:py-3"
            >
              <span className="font-medium">Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 