import { motion } from "framer-motion";

const Section = ({ title, subtitle, children, center = false }) => {
  return (
    <section className={`px-6 py-16 ${center ? "text-center" : ""}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            {title}
          </motion.h2>
        )}

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-slate-600 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
};

export default Section;
