"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const AboutSection = () => {
  console.log("AboutSection rendering");

  const technologies = [
    "NestJS",
    "Next.js", 
    "TypeScript",
    "Docker",
    "PostgreSQL",
    "React",
    "Tailwind CSS",
    "Zustand",
    "React Query",
    "Express",
    "Python",
    "MongoDB"
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-12"
        >
          {/* Left Column */}
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-slate-100 mb-8">Về bản thân</h2>
            
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                Hành trình của tôi bắt đầu từ giảng đường Đại học Mở TP.HCM. Niềm đam mê với việc tạo ra 
                những sản phẩm hữu ích đã dẫn tôi đến các khóa học chuyên sâu tại CyberSoft Academy, 
                nơi tôi đã xây dựng nền tảng vững chắc về phát triển web fullstack.
              </p>
              
              <p>
                Tại ITC Software và Librasoft, tôi đã có cơ hội áp dụng kiến thức vào thực tế, 
                đóng góp vào các hệ thống lớn và học hỏi từ những đồng nghiệp giàu kinh nghiệm. 
                Tôi luôn tìm kiếm cơ hội để giải quyết các vấn đề phức tạp và tối ưu hóa trải nghiệm người dùng.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2">
            <h3 className="text-slate-300 mb-4">Một số công nghệ tôi đã làm việc:</h3>
            
            <motion.ul 
              className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {technologies.map((tech, index) => (
                <motion.li
                  key={tech}
                  className="flex items-center text-slate-300 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ChevronRight size={16} className="text-teal-300 mr-2 flex-shrink-0" />
                  {tech}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;