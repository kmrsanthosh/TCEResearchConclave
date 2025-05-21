"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import fs from "fs";
import path from "path";

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch images from the public directory
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/gallery-images");
        const data = await response.json();
        if (data.images) {
          setImages(data.images);
        }
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      }
    };

    fetchImages();

    // Auto-rotate carousel
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Gallery</h2>        

        <div className="relative w-full max-w-4xl mx-auto h-[500px] overflow-hidden rounded-lg shadow-xl">
          {images.map((image, index) => (
            <motion.div
              key={image}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentImageIndex ? 1 : 0,
                transition: { duration: 0.5 }
              }}
            >
              <Image
                src={image}
                alt={`Event picture ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </motion.div>
          ))}
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            {images.map((_, index) => (
              <button
                key={index}
                className={`mx-1 w-3 h-3 rounded-full ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 