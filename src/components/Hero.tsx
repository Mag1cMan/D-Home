'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const imageVariants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
};

export default function HeroSection() {
  return (
    <motion.div
      className="flex flex-wrap"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex items-center w-full lg:w-1/2"
        variants={textVariants}
      >
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            ดีโฮม บริการรับสร้างบ้านแบบวันสต๊อปเซอร์วิช
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            รับสร้างบ้านบนที่ดินของคุณ ในราคาเริ่มต้นเพียง 13,000บาท/ตร.ม.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="#"
              target="_blank"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-rose-600 rounded-md"
            >
              ติดต่อเลย
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex items-center justify-center w-full lg:w-1/2"
        variants={imageVariants}
      >
        <div className="w-full">
          <Image
            src="/dhome.png"
            width={1200}
            height={1200}
            className="object-cover"
            alt="Hero Illustration"
            loading="eager"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
}





{/* 
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            เชื่อถือโดยลูกค้ามากกว่า <span className="text-rose-600">150+</span>{" "}
            ลูกค้า
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AmazonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <VerizonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <MicrosoftLogo />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <NetflixLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <SonyLogo />
            </div>
          </div>
        </div>
      </Container> */}




