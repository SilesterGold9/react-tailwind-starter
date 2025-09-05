import Section from "../components/Section.jsx";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <>
      {/* Hero */}
      <section className="flex items-center justify-center px-6 py-20 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white">
        <div className="max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold tracking-tight"
          >
            Your Next Big Project
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-indigo-100"
          >
            Built with React, Tailwind v4, and Framer Motion.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <Section title="Features" subtitle="Why people love this product" center>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow">🚀 Fast</div>
          <div className="p-6 bg-white rounded-2xl shadow">🎨 Modern</div>
          <div className="p-6 bg-white rounded-2xl shadow">🔒 Secure</div>
        </div>
      </Section>

      {/* Pricing */}
      <Section title="Pricing" subtitle="Flexible plans for everyone" center>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow">Free</div>
          <div className="p-6 bg-white rounded-2xl shadow">Pro</div>
          <div className="p-6 bg-white rounded-2xl shadow">Enterprise</div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section title="Testimonials" subtitle="What users are saying" center>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white rounded-2xl shadow">⭐ "Amazing!"</div>
          <div className="p-6 bg-white rounded-2xl shadow">
            ⭐ "Super fast!"
          </div>
        </div>
      </Section>

      {/* Call-to-Action */}
      <Section center>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
        >
          Get Started
        </motion.button>
      </Section>
    </>
  );
};

export default Landing;
