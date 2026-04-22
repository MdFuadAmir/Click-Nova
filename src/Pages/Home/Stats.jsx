// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const statsData = [
  { label: "Projects Completed", value: 25 },
  { label: "Happy Clients", value: 18 },
  { label: "Years Experience", value: 2 },
  { label: "GitHub Commits", value: 1200 },
];

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);

      const newCounts = statsData.map((item) =>
        Math.floor(item.value * progress)
      );

      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start]);

  return (
    <section
      ref={sectionRef}
      className="py-18 md:py-28 px-6 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl sm:text-5xl font-bold leading-tight
        text-[#2a2540] dark:text-[#e6e1ff]">
          My
          <span className="block text-transparent bg-clip-text
          bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500">
            Achievements
          </span>
        </h2>

        {/* SUBTITLE */}
        <p className="mt-5 text-sm sm:text-base max-w-2xl mx-auto
        text-[#5b5675] dark:text-[#b7b2d9]">
          Real-world impact delivered through clean code, scalable systems, and
          modern web applications.
        </p>

        {/* LINE */}
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-1 rounded-full
          bg-linear-to-r from-indigo-500 via-purple-500 to-violet-500" />
        </div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.05 }}
              className="text-center group"
            >
              {/* NUMBER */}
              <h3 className="text-4xl sm:text-5xl font-extrabold
              text-indigo-600 dark:text-purple-400
              group-hover:scale-110">
                {counts[i]}+
              </h3>

              {/* LABEL */}
              <p className="mt-3 text-sm sm:text-base
              text-[#5b5675] dark:text-[#b7b2d9]">
                {item.label}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;