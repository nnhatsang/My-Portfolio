"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactSection = () => {
  console.log("ContactSection rendering");

  const handleEmailClick = () => {
    console.log("Opening email client");
    window.location.href = "mailto:nhatsang57@gmail.com";
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-teal-300 text-lg mb-4">Bước tiếp theo?</h3>
          <h2 className="text-4xl font-bold text-slate-100 mb-8">Hãy kết nối!</h2>
          
          <p className="text-slate-300 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Hiện tại tôi đang tìm kiếm cơ hội mới để đóng góp và phát triển. 
            Nếu bạn có một dự án thú vị hoặc đơn giản là muốn trao đổi, 
            đừng ngần ngại liên hệ với tôi!
          </p>
          
          <motion.button
            onClick={handleEmailClick}
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-teal-300 text-teal-300 rounded-lg font-semibold hover:bg-teal-300 hover:text-slate-900 transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            Gửi Email
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;