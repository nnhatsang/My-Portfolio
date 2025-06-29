"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  console.log("EducationSection rendering");

  const educationItems = [
    {
      type: "education",
      title: "Cử nhân Khoa học Máy tính",
      institution: "Đại học Mở TP.HCM",
      period: "2019 - 2023",
      icon: GraduationCap,
    },
    {
      type: "certification",
      title: "Chứng chỉ Lập trình viên Fullstack",
      institution: "CyberSoft Academy",
      period: "2023",
      icon: Award,
    },
    {
      type: "certification",
      title: "Chứng chỉ Professional NodeJs Developer",
      institution: "CyberSoft Academy",
      period: "2023 - 2024",
      icon: Award,
    },
    {
      type: "certification",
      title: "Chứng chỉ Professional Front-End Web Development",
      institution: "CyberSoft Academy",
      period: "2023 - 2024",
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-24 bg-[#00283C] px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-slate-100 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Học vấn & Chứng chỉ
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-slate-800 p-6 rounded-lg border-l-4 border-teal-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-teal-300/10 p-3 rounded-full">
                    <IconComponent size={24} className="text-teal-300" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-teal-300 mb-1">{item.institution}</p>
                    <p className="text-sm text-slate-400">{item.period}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
