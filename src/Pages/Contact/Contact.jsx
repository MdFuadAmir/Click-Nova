import { useForm } from "react-hook-form";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FaEnvelope, FaClock, FaGlobe, FaPaperPlane } from "react-icons/fa";
import SEO from "../../Utils/SEO";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + 10;
      });
    }, 200);

    try {
      const res = await axios.post(
        "https://click-nova-server.vercel.app/send-email",
        data,
      );

      if (res.data.success) {
        setProgress(100);

        toast.success("Message sent 🚀");
        reset();
      } else {
        toast.error("Failed to send ❌");
      }
    } catch {
      toast.error("Server error ❌");
    } finally {
      clearInterval(interval);

      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 800);
    }
  };
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      <SEO
        title="Contact | Click Nova"
        description="Contact Click Nova for freelance or remote web development projects."
      />
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 -z-10
        bg-linear-to-br
        from-[#f3e8ff] via-[#e0f2fe] to-[#dcfce7]
        dark:from-[#1a1230] dark:via-[#1f163d] dark:to-[#151028]"
      />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#2a2540] dark:text-[#e6e1ff]">
            Let’s Build Something Amazing
          </h2>

          <p className="mt-5 text-[#5b5675] dark:text-[#b7b2d9]">
            Whether you have a startup idea, need a modern website, or want to
            redesign your product — I’m here to help you turn ideas into real,
            high-performing digital experiences.
          </p>

          <p className="mt-3 text-sm text-[#8b86a3] dark:text-[#8a85b3]">
            I usually respond within a few hours.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* HOW I WORK */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#2a2540] dark:text-[#e6e1ff]">
              How I Work
            </h3>

            <ol className="space-y-4 text-[#5b5675] dark:text-[#b7b2d9]">
              <li>1. You send me your idea or requirements</li>
              <li>2. We discuss goals, timeline & pricing</li>
              <li>3. I design & develop your product</li>
              <li>4. Final delivery with revisions & support</li>
            </ol>

            <p className="text-sm text-[#8b86a3] dark:text-[#8a85b3]">
              Need quick discussion? Let’s chat and plan your project.
            </p>

            <p className="text-sm text-indigo-500 font-medium">
              Want fast delivery? I can build and launch quickly.
            </p>
          </div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="p-8 rounded-2xl space-y-4

            bg-[#ffffff60] dark:bg-[#ffffff0a]
            backdrop-blur-xl
            border border-[#d6ccff60] dark:border-[#ffffff1a]"
          >
            <input
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg
              bg-white/50 dark:bg-white/5
              text-[#2a2540] dark:text-[#e6e1ff]"
            />
            {errors.name && <p className="text-red-500 text-sm">Required</p>}

            <input
              {...register("email", { required: true })}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg
              bg-white/50 dark:bg-white/5
              text-[#2a2540] dark:text-[#e6e1ff]"
            />
            {errors.email && <p className="text-red-500 text-sm">Required</p>}

            <textarea
              {...register("message", { required: true })}
              placeholder="Project Details..."
              rows="5"
              className="w-full p-3 rounded-lg
              bg-white/50 dark:bg-white/5
              text-[#2a2540] dark:text-[#e6e1ff]"
            />
            {errors.message && <p className="text-red-500 text-sm">Required</p>}

            <button
              type="submit"
              disabled={loading}
              className={`
    w-full flex items-center justify-center gap-2
    py-3 rounded-lg text-white
    relative overflow-hidden
    ${
      loading
        ? "bg-indigo-400 cursor-not-allowed"
        : "bg-indigo-500 hover:bg-indigo-600"
    }
  `}
            >
              {loading ? (
                <>
                  {/* spinner */}
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>

                  {/* dynamic text */}
                  {progress < 50 && "Sending..."}
                  {progress >= 50 && progress < 100 && "Almost done..."}
                  {progress === 100 && "Completed ✅"}
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
            {loading && (
              <div className="w-full h-1 bg-gray-200 rounded mt-2 overflow-hidden">
                <div
                  className="h-full bg-indigo-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}
          </motion.form>
        </div>
        {/* INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          <div
            className="p-6 rounded-2xl
            bg-[#ffffff60] dark:bg-[#ffffff0a]
            backdrop-blur-xl
            border border-[#d6ccff60] dark:border-[#ffffff1a]"
          >
            <FaEnvelope className="text-indigo-500 text-xl" />
            <h3 className="mt-3 font-semibold text-[#2a2540] dark:text-[#e6e1ff]">
              Email
            </h3>
            <p className="text-[#5b5675] dark:text-[#b7b2d9] mt-1">
              mdfuadamir@email.com
            </p>
          </div>

          <div
            className="p-6 rounded-2xl
            bg-[#ffffff60] dark:bg-[#ffffff0a]
            backdrop-blur-xl
            border border-[#d6ccff60] dark:border-[#ffffff1a]"
          >
            <FaClock className="text-indigo-500 text-xl" />
            <h3 className="mt-3 font-semibold text-[#2a2540] dark:text-[#e6e1ff]">
              Working Hours
            </h3>
            <p className="text-[#5b5675] dark:text-[#b7b2d9] mt-1">
              Monday – Saturday (9 AM – 8 PM)
            </p>
          </div>

          <div
            className="p-6 rounded-2xl
            bg-[#ffffff60] dark:bg-[#ffffff0a]
            backdrop-blur-xl
            border border-[#d6ccff60] dark:border-[#ffffff1a]"
          >
            <FaGlobe className="text-indigo-500 text-xl" />
            <h3 className="mt-3 font-semibold text-[#2a2540] dark:text-[#e6e1ff]">
              Availability
            </h3>
            <p className="text-[#5b5675] dark:text-[#b7b2d9] mt-1">
              Freelance & Remote projects worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
