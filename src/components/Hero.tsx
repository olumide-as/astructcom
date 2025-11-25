import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
}) => {
  return (
    <motion.section
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen h-[85vh] lg:h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden rounded-b-3xl lg:rounded-b-[4rem] px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src={backgroundImage || "/assets/defaultHero.png"}
        alt={`${title || "Hero"} Background`}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0" />
                {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#444598] to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl">
        <motion.h1
          className="text-xl text-[#ffbd59] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontWeight: 400 }}
        >
          {title}
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-6xl text-white font-medium mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {subtitle}
        </motion.h2>

        {description && (
          <motion.p
            className="text-xl text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.section>
  );
};

export default Hero;