import { useEffect, useRef, useState } from "react";

const statsData = [
  { label: "Projects Completed", value: 35 },
  { label: "Happy Clients", value: 22 },
  { label: "Case Studies", value: 10 },
  { label: "Code Quality Score", value: 98 },
];

const Stats = () => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);

      const updated = statsData.map((item) =>
        Math.floor(item.value * progress)
      );

      setCounts(updated);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start]);

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 max-w-6xl mx-auto">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2a2540] dark:text-[#e6e1ff]">
          Project Impact
        </h2>
        <p className="text-sm sm:text-base mt-3 text-[#5b5675] dark:text-[#b7b2d9]">
          Real numbers from real-world development experience
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {statsData.map((item, i) => (
          <div
            key={i}
            className="
              text-center p-6 rounded-2xl

              bg-[#ffffff70] dark:bg-[#ffffff0a]
              backdrop-blur-xl

              border border-[#d6ccff60] dark:border-[#ffffff1a]

              shadow-sm hover:shadow-xl
              hover:-translate-y-1
            "
          >
            {/* NUMBER */}
            <h3 className="text-4xl sm:text-5xl font-extrabold text-indigo-500">
              {counts[i]}+
            </h3>

            {/* LABEL */}
            <p className="mt-3 text-sm sm:text-base text-[#5b5675] dark:text-[#b7b2d9]">
              {item.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Stats;