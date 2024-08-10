'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageData {
  id: string;
  price: string;
}

const images: ImageData[] = [
  { id: 'DH-011', price: '2,1xx,xxx' },
  { id: 'DH-115', price: '2,22x,xxx' },
  { id: 'DH-155', price: '2,59x,xxx' },
  { id: 'DH-156', price: '1,99x,xxx' },
  { id: 'DH-223', price: '1,89x,xxx' },
  { id: 'DH-224', price: '2,20x,xxx' },
  { id: 'DH-226', price: '1,30x,xxx' },
  { id: 'DH-267', price: '1,69x,xxx' },
  { id: 'DH-013', price: '1,3xx,xxx' },
  { id: 'DH-227', price: '3,75x,xxx' },
  { id: 'DH-218', price: '2,22x,xxx' },
];

const ITEMS_PER_PAGE = 6;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentImages = images.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const openModal = (image: ImageData) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-8">
       <h1 className="text-4xl font-bold mb-4 text-center">
        ผลงานที่น่าภาคภูมิใจ
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        เราได้รวบรวมผลงานที่สำเร็จลุล่วงไปด้วยดีเพื่อให้คุณสามารถใช้เป็นข้อมูลในการตัดสินใจสร้างบ้านในฝันของคุณอย่างมั่นใจ{" "}
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {currentImages.map((image) => (
          <motion.div
            key={image.id}
            variants={item}
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(image)}
          >
            <Image
              src={`/achievement/${image.id}.jpg`}
              alt={image.id}
              layout="responsive"
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-xl font-bold">{image.id}</h2>
              <p className="text-white text-lg">{image.price}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-8">
        {Array.from({ length: Math.ceil(images.length / ITEMS_PER_PAGE) }).map(
          (_, index) => (
            <motion.button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-2 rounded-lg ${
                currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {index + 1}
            </motion.button>
          )
        )}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeModal}>
          <motion.div
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={`/achievement/${selectedImage.id}.jpg`}
              alt={selectedImage.id}
              layout="responsive"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg"
            />
            <button
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
              onClick={closeModal}
            >
              ×
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
