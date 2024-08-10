"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import HeroSection from "@/components/Hero";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
};

export default function Home() {
  return (
    <Container>
      <HeroSection />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mt-16"
      >
        <SectionTitle preTitle="ประสบการณ์" title="การันตีความพึงพอใจ">
          การันตีความพึงพอใจจากลูกค้ามากกว่า 100 คน และโปรเจคอื่นๆ อีกมากมาย
          โดยช่างที่มีประสบการณ์มากกว่า 10 ปี และทีมงานคุณภาพ
        </SectionTitle>
      </motion.div>

      <Benefits />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}

      <SectionTitle
        preTitle="ผลงานที่น่าภาคภูมิใจ"
        title="เลือกทีมงานมืออาชีพที่คุณไว้ใจได้"
      >
        เราได้รวบรวมผลงานที่สำเร็จลุล่วงไปด้วยดีเพื่อให้คุณสามารถใช้เป็นข้อมูลในการตัดสินใจสร้างบ้านในฝันของคุณอย่างมั่นใจ
      </SectionTitle>

      {/* <Video videoId="fZ0D0cnR88E" /> */}

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="คำถามที่พบบ่อย">
        ตอบคำถามที่ลูกค้าของคุณอาจจะมีอยู่ที่นี่
        จะช่วยเพิ่มอัตราการแปลงรวมถึงการสนับสนุนหรือการสนทนา.
      </SectionTitle>

      <Faq />
      {/* <Cta /> */}
    </Container>
  );
}
