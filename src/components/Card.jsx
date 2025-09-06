import { motion } from "framer-motion";
import { Children } from "react";

const Card = ({ title, content, center = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`p-6 bg-white rounded-2xl shadow hover:shadow-lg transition ${
        center ? "text-center" : " "
      } `}
    >
      <div className="max-w-4xl mx-auto">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl font-semibold"
          >
            {title}
          </motion.h2>
        )}

        {content && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-2 text-slate-600"
          >
            {content}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
