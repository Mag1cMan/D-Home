"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "เราควรเริ่มต้นการก่อสร้างบ้านของเราตั้งแต่เมื่อไหร่?",
    answer: "การก่อสร้างบ้านควรเริ่มต้นเมื่อคุณมีแผนและงบประมาณที่ชัดเจน รวมถึงได้รับการอนุมัติจากหน่วยงานที่เกี่ยวข้องแล้ว.",
  },
  {
    question: "คุณมีบริการออกแบบบ้านด้วยหรือไม่?",
    answer: "ใช่, เรามีบริการออกแบบบ้านที่สามารถตอบสนองความต้องการและความชอบของลูกค้าได้.",
  },
  {
    question: "ระยะเวลาในการสร้างบ้านจะใช้เวลานานแค่ไหน?",
    answer: "ระยะเวลาในการสร้างบ้านขึ้นอยู่กับขนาดและความซับซ้อนของโครงการ โดยปกติแล้วจะใช้เวลาประมาณ 6-12 เดือน.",
  },
  {
    question: "มีการรับประกันหลังการก่อสร้างหรือไม่?",
    answer: "ใช่, เรามีการรับประกันหลังการก่อสร้างเพื่อให้คุณมั่นใจในคุณภาพของงานที่ทำ.",
  },
  {
    question: "ค่าใช้จ่ายในการก่อสร้างบ้านรวมถึงอะไรบ้าง?",
    answer: "ค่าใช้จ่ายในการก่อสร้างบ้านรวมถึงค่าแรงงาน, วัสดุก่อสร้าง, การออกแบบ, และค่าใช้จ่ายอื่นๆ ที่เกี่ยวข้อง.",
  },
  {
    question: "เราสามารถขอปรับเปลี่ยนแบบบ้านระหว่างการก่อสร้างได้หรือไม่?",
    answer: "ได้, แต่การปรับเปลี่ยนแบบบ้านระหว่างการก่อสร้างอาจมีผลต่อค่าใช้จ่ายและระยะเวลาในการก่อสร้าง.",
  },
];

