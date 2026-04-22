import { FaCheck } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const plans = [
  {
    name: "Basic",
    price: "$15",
    desc: "Perfect for simple landing pages",
    features: [
      "1 Page Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Email Support",
    ],
    featured: false,
  },
  {
    name: "Standard",
    price: "$49",
    desc: "Best for small businesses",
    features: [
      "5 Pages Website",
      "Modern UI Design",
      "SEO Optimization",
      "Priority Support",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "$129",
    desc: "For full-scale web applications",
    features: [
      "Full Stack App",
      "Admin Dashboard",
      "API Integration",
      "24/7 Support",
    ],
    featured: false,
  },
];

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold
          text-[#2a2540] dark:text-[#e6e1ff]">
            Pricing Plans
          </h2>

          <p className="mt-3 text-sm sm:text-base
          text-[#5b5675] dark:text-[#b7b2d9]">
            Simple & transparent pricing for your needs
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {plans.map((plan, i) => (
            <div
              key={i}
              className={`
                relative p-8 rounded-2xl

                bg-[#ffffff80] dark:bg-[#ffffff0a]
                backdrop-blur-xl

                border 

                ${plan.featured
                  ? "border-indigo-400 shadow-lg scale-[1.02]"
                  : "border-[#d6ccff50] dark:border-[#ffffff1a]"
                }

                hover:-translate-y-2 hover:shadow-xl
              `}
            >

              {/* FEATURED TAG */}
              {plan.featured && (
                <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full
                bg-indigo-500 text-white">
                  Popular
                </span>
              )}

              {/* TITLE */}
              <h3 className="text-xl font-semibold
              text-[#2a2540] dark:text-[#e6e1ff]">
                {plan.name}
              </h3>

              {/* PRICE */}
              <p className="text-3xl font-bold mt-3 text-indigo-500">
                {plan.price}
              </p>

              {/* DESC */}
              <p className="mt-2 text-sm
              text-[#5b5675] dark:text-[#b7b2d9]">
                {plan.desc}
              </p>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3 text-sm
              text-[#5b5675] dark:text-[#b7b2d9]">

                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-emerald-500" />
                    {f}
                  </li>
                ))}

              </ul>

              {/* BUTTON */}
              <button onClick={()=>navigate('/contact')} className="mt-8 w-full py-2.5 rounded-lg text-sm
              bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer">
                Choose Plan
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;