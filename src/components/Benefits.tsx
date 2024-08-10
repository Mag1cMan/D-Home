'use client';

import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

// Define the benefits data
const benefitsData = {
  imgPos: "left",
  title: "บริการของเรา",
  desc: "เรามีบริการที่หลากหลายและครบครันเพื่อให้คุณมั่นใจในการก่อสร้างและการออกแบบบ้านของคุณ",
  image: {
    src: "home_ex1.jpg",
  },
  bullets: [
    { title: "ฟรีออกแบบโดยสถาปนิค", icon: <FaCheckCircle /> },
    { title: "ฟรีรายการคำนวณวิศวกร (พร้อมลายเซ็น)", icon: <FaCheckCircle /> },
    { title: "ให้คำปรึกษาเรื่องสินเชื่อบ้าน", icon: <FaCheckCircle /> },
    { title: "ช่วยจัดเตรียมเอกสารยื่นกู้", icon: <FaCheckCircle /> },
    { title: "ยื่นขออนุญาตก่อสร้าง", icon: <FaCheckCircle /> },
    { title: "ยื่นขอไฟฟ้า", icon: <FaCheckCircle /> },
    { title: "ยื่นขอน้ำประปา", icon: <FaCheckCircle /> },
    { title: "ใช้วัสดุที่ได้มาตรฐาน มอก. ในการก่อสร้าง", icon: <FaCheckCircle /> },
    { title: "ทีมช่างมืออาชีพ", icon: <FaCheckCircle /> },
    { title: "ควบคุมงานโดย โฟร์แมนมากประสบการณ์และวิศวกร", icon: <FaCheckCircle /> },
    { title: "หมดห่วงเรื่องผู้รับเหมาทิ้งงาน", icon: <FaCheckCircle /> },
    { title: "งบประมาณไม่บานปลาย", icon: <FaCheckCircle /> },
  ],
};

// Define the types for props
interface BenefitProps {
  title: string;
  icon: React.ReactNode;
}

const Benefit: React.FC<BenefitProps> = ({ title, icon }) => (
  <motion.div
    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="text-xl text-green-500">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        {title}
      </h4>
    </div>
  </motion.div>
);

export const Benefits: React.FC = () => {
  const { imgPos, title, desc, image, bullets } = benefitsData;

  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 ${
          imgPos === "right" ? "lg:order-1" : ""
        }`}
      >
        <div className="relative w-full">
          <Image
            src={image.src}
            width={900}
            height={900}
            alt="Benefits"
            className="object-cover rounded-lg shadow-lg"
            placeholder="blur"
            blurDataURL={image.src}
          />
        </div>
      </div>

      <div
        className={`flex flex-col items-start w-full lg:w-1/2 ${
          imgPos === "right" ? "lg:justify-end" : ""
        }`}
      >
        <div className="w-full mt-4">
          <h3 className="text-3xl font-bold text-gray-800 lg:text-4xl dark:text-white">
            {title}
          </h3>

          <p className="mt-4 text-base text-gray-600 lg:text-lg xl:text-xl dark:text-gray-300">
            {desc}
          </p>
        </div>

        <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bullets.map((item, index) => (
            <Benefit key={index} title={item.title} icon={item.icon} />
          ))}
        </div>
      </div>
    </Container>
  );
};
