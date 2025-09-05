import Section from "../components/Section.jsx";

const Home = () => {
  return (
    <>
      {/* Hero still as before */}
      <Section
        title="Features"
        subtitle="Everything you need to build modern UIs quickly."
        center
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Fast Setup</h3>
            <p className="mt-2 text-slate-600">
              Vite + Tailwind v4 + Framer Motion in minutes.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Modern Stack</h3>
            <p className="mt-2 text-slate-600">
              Build with the latest tools and practices.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Beautiful Animations</h3>
            <p className="mt-2 text-slate-600">
              Smooth transitions powered by Framer Motion.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
