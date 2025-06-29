"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const ExperienceSection = () => {
  console.log("ExperienceSection rendering");
  
  const [activeTab, setActiveTab] = useState("itc");

  const experiences = {
    itc: {
      company: "ITC Software",
      title: "Fullstack Developer",
      period: "Tháng 3, 2025 - Hiện tại",
      responsibilities: [
        "Đóng góp xây dựng kiến trúc frontend cho ứng dụng hỗ trợ gần 1 triệu người dùng.",
        "Xây dựng các giao diện người dùng phức tạp bằng Next.js, React-Query, và Zustand.",
        "Thực hiện tối ưu hiệu năng qua code-splitting, lazy loading và tối ưu hình ảnh.",
        "Tham gia refactor code cũ và duy trì quy trình code review nghiêm ngặt."
      ]
    },
    librasoft: {
      company: "Librasoft Vietnam",
      title: "Fullstack Developer",
      period: "Tháng 3, 2024 - Tháng 11, 2024",
      responsibilities: [
        "Phân tích yêu cầu của khách hàng trong việc xây dựng hệ thống quản lý.",
        "Thiết kế APIs sử dụng framework NestJS, với Next.js làm frontend, đảm bảo hiệu quả và khả năng bảo trì.",
        "Cộng tác với team để tăng hiệu năng website, đạt được giảm thời gian tải và nâng cao trải nghiệm người dùng.",
        "Thường xuyên review code và kiến trúc để xác định những cải tiến tiềm năng và đảm bảo tuân thủ best practices.",
        "Tham gia phối hợp với team để test tính năng kỹ lưỡng trước khi release cho end users."
      ]
    }
  };

  const currentExperience = experiences[activeTab as keyof typeof experiences];

  return (
    <section id="experience" className="py-24 bg-slate-900 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-slate-100 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Kinh nghiệm làm việc
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Tab Buttons */}
          <div className="flex md:flex-col gap-2 md:w-48">
            {Object.entries(experiences).map(([key, exp]) => (
              <button
                key={key}
                onClick={() => {
                  console.log(`Switching to ${key} tab`);
                  setActiveTab(key);
                }}
                className={`px-4 py-3 text-left border-l-2 transition-all duration-300 ${
                  activeTab === key
                    ? "border-teal-300 bg-slate-800 text-teal-300"
                    : "border-slate-700 text-slate-400 hover:bg-slate-800/50 hover:text-slate-300"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                {currentExperience.title}{" "}
                <span className="text-teal-300">@ {currentExperience.company}</span>
              </h3>
              <p className="text-sm text-slate-400 mb-6">{currentExperience.period}</p>
              
              <ul className="space-y-3">
                {currentExperience.responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start text-slate-300"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ChevronRight size={16} className="text-teal-300 mr-3 mt-1 flex-shrink-0" />
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;