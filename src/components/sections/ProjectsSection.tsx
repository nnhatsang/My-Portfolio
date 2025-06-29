"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import Image from "next/image";

const ProjectsSection = () => {
  console.log("ProjectsSection rendering");

  const featuredProjects = [
    {
      id: "chat-message",
      title: "Chat Message",
      subtitle: "Dự án nổi bật",
      description: "Một ứng dụng nhắn tin web hiệu năng cao, hỗ trợ cả chat 1-1 và chat nhóm. Mục tiêu là mang lại trải nghiệm giao tiếp liền mạch, tức thì và giàu tính năng.",
      role: "Trong dự án này, tôi chịu trách nhiệm chính trong việc xây dựng giao diện người dùng (UI) và quản lý trạng thái (state management) phía client, cũng như tích hợp với real-time server qua Socket.IO.",
      technologies: ["Next.js", "React Query", "Zustand", "Tailwind CSS", "Socket.IO"],
      github: "https://github.com/nnhatsang/chat-message",
      external: "",
      image: "/projects/chat-message.png",
      reverse: false
    },
    {
      id: "livestream",
      title: "Livestream Platform",
      subtitle: "Dự án nổi bật",
      description: "Nền tảng livestream all-in-one cho doanh nghiệp tổ chức sự kiện, tương tác với khán giả và thúc đẩy doanh số thông qua các tính năng như chat real-time, in-stream và analytics chi tiết.",
      role: "Tôi phát triển dynamic rendering engine cho phép UI (logos, màu thương hiệu, layouts) được tùy chỉnh hoàn toàn từ backend admin panel, phù hợp với corporate identity của từng client.",
      technologies: ["React Query", "Next.js", "Shadcn/ui", "WebSockets"],
      github: "https://github.com/nnhatsang/livestream",
      external: "",
      image: "/projects/livestream.png",
      reverse: true
    }
  ];

  const otherProjects = [
    {
      title: "Food Delivery Telegram Mini App",
      description: "Hệ thống đặt đồ ăn tiện lợi hoạt động ngay trên nền tảng Telegram.",
      technologies: ["React Query", "Next.js", "Shadcn/ui"],
      github: "https://github.com/nnhatsang/food-delivery-telegram"
    },
    {
      title: "Programme Learning Outcomes", 
      description: "Hệ thống quản lý và đánh giá kết quả học tập của chương trình đại học.",
      technologies: ["NestJS", "TypeORM", "PostgreSQL"],
      github: "https://github.com/nnhatsang/programme-learning"
    },
    {
      title: "Storage Service Zalo MiniApp",
      description: "Mini-app Zalo nâng cao trải nghiệm truy cập dịch vụ công, cho phép đặt lịch hẹn và tham gia khảo sát.",
      technologies: ["NestJS", "Next.js", "Ant Design"],
      github: "https://github.com/nnhatsang/storage-service-zalo"
    },
    {
      title: "IDC - Executive Direction",
      description: "Hệ thống phân tích và mô tả quy trình hoạt động của cơ quan, thủ tục giao nhiệm vụ cho đơn vị.",
      technologies: ["NestJS", "TypeORM", "React Query"],
      github: "https://github.com/nnhatsang/idc-executive"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-slate-100 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dự án
        </motion.h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-32">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                project.reverse ? "lg:grid-flow-col-dense" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Project Image */}
              <div className={`${project.reverse ? "lg:col-start-2" : ""}`}>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <div className="aspect-video bg-slate-700 rounded flex items-center justify-center">
                    <span className="text-slate-400">Project Screenshot</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`${project.reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <p className="text-teal-300 text-sm mb-2">{project.subtitle}</p>
                <h3 className="text-2xl font-bold text-slate-100 mb-4">{project.title}</h3>
                
                <div className="bg-slate-700 p-4 rounded shadow-md mb-4">
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <p className="text-slate-400 text-sm italic">
                    <strong>Vai trò của tôi:</strong> {project.role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-teal-300 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-teal-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-slate-100 text-center mb-12">
            Các dự án khác
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-slate-800 p-6 rounded hover:-translate-y-2 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder size={24} className="text-teal-300" />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
                
                <h4 className="font-bold text-slate-100 mb-3">{project.title}</h4>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;