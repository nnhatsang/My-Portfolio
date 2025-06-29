"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";

const HeroSection = () => {
  console.log("HeroSection rendering");

  const scrollToProjects = () => {
    console.log("Scrolling to projects section");
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#00283C] px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-teal-300 text-lg mb-4">Xin chào, tôi là</h3>
          <h1 className="text-5xl font-bold text-slate-100 mb-4">
            Nguyễn Nhật Sang.
          </h1>
          <h2 className="text-4xl font-bold text-slate-400 mb-8">
            Tôi xây dựng các ứng dụng web.
          </h2>

          <motion.p
            className="mt-4 max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tôi là một Fullstack Developer với 1.5 năm kinh nghiệm, tập trung
            vào hệ sinh thái NestJS và Next.js. Tôi đam mê việc xây dựng các sản
            phẩm có kiến trúc sạch, hiệu năng cao và luôn sẵn sàng học hỏi, đóng
            góp trong môi trường làm việc năng động.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={scrollToProjects}
              className="px-4 py-2 border border-teal-300 text-teal-300 rounded hover:bg-teal-300/10 transition-colors"
            >
              Xem dự án của tôi
            </button>

            <div className="flex items-center gap-4 ml-4">
              <a
                href="https://github.com/nnhatsang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-300 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/nnhatsang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-300 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
