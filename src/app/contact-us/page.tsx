'use client'
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Link } from '@nextui-org/react';
import { FaFacebookF, FaPhoneAlt, FaTiktok, FaEnvelope } from 'react-icons/fa';
import { FaLine } from "react-icons/fa6";

const ContactUs: FC = () => {
  return (
    <div className="container  mx-auto p-4">
      
      {/* Hero Section */}
      <motion.div
        className="hero-section text-center my-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">ติดต่อเรา</h1>
        <p className="text-lg mt-2">ศูนย์รับสร้างบ้าน ดีโฮม ใกล้บ้านคุณ</p>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        className="contact-info grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="address">
          <h2 className="text-2xl font-semibold">โลเคชั่น</h2>
          <div id="map" className="h-64 mt-4">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15417.739416174956!2d102.086787!3d14.968547!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDU4JzA2LjgiTiAxMDLCsDA1JzEyLjQiRQ!5e0!3m2!1sen!2sus!4v1723293567014!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>

        <div className="contact-details">
          <h2 className="text-2xl font-semibold">ติดต่อเราทางช่องทาง</h2>
          <ul className="mt-4">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" />
              <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
            </li>
            <li className="flex items-center mt-2">
              <FaEnvelope className="mr-2" />
              <a href="mailto:apichart.2547@gmail.com" className="hover:underline">apichart.2547@gmail.com</a>
            </li>
            <li className="flex items-center mt-2">
              <FaFacebookF className="mr-2" />
              <a href="https://www.facebook.com/DhomeandAsset" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
            </li>
            <li className="flex items-center mt-2">
              <FaTiktok className="mr-2" />
              <a href="https://tiktok.com/@dhomeasset" target="_blank" rel="noopener noreferrer" className="hover:underline">TikTok</a>
            </li>
            <li className="flex items-center mt-2 text-green-600">
              <FaLine  className="mr-2" />
              <a href="https://line.me/ti/p/@Dhome" target="_blank" rel="noopener noreferrer" className="hover:underline">LINE</a>
            </li>
            
          </ul>
        </div>
      </motion.div>

      {/* Additional Information */}
      <motion.div
        className="additional-info text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg font-semibold">ศูนย์ออกแบบและรับเหมาก่อสร้างบ้านในจังหวัดนครราชสีมา, สระบุรี, ชัยภูมิ, บุรีรัมย์</p>
      </motion.div>
    </div>
  );
};

export default ContactUs;
