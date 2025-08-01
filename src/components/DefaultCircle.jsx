import zebdatasa from "/assets/Butter.png";
import { useMediaQuery } from "@react-hook/media-query";
import { motion } from "framer-motion";
import samnaImg from "/assets/samna.png";

const DefaultCircle = ({ animationState, setAnimationState }) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  const buttonVariants = {
    initial: { scale: isMobile ? .7 : 1, rotate: 10, x: 0, y: "-10vh" },
    clicked: {
      scale: 0.4,
      rotate: 140,
      x: isTablet ? "-7rem" : "-5rem",
      y: isMobile ? "-7rem" : isTablet ? "-13rem" : "-12rem",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    clicked2: {
      scale: 0.3,
      rotate: 300,
      x: "8rem",
      y: "-1rem",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    clicked3: {
      scale: 0,
      rotate: 350,
      x: "-0.5rem",
      y: "5rem",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const samnaVariants = {
    initial: {scale: 1, x: "-1vw", y: "-8vh" },
    clicked: {
      scale: 0.3,
      x: isMobile ? "-5rem" : isDesktop ? "-6rem" : "-7rem",
      y: isMobile ? "-7rem" : "-14rem",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    clicked2: {
      scale: isTablet ? 0.2 : isDesktop ? 0.3 : 0.2,
      x: isMobile ? "7rem" : isTablet ? "7rem" : isDesktop ? "7rem" : "5rem",
      y: isMobile ? "-2rem" : isTablet ? "-2rem" : isDesktop ? "-2rem" : "-4rem",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    clicked3: {
      scale: 0,
      x: "-2rem",
      y: "2rem",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const handleClick = () => {
    setAnimationState((prev) => (prev + 1) % 4);
  };

  return (
    <div className="w-full h-[400px] md:h-screen rounded-full relative">
      <div
        className="absolute inset-0 rounded-full flex items-center justify-center"
        style={{
          backgroundImage: "url(/assets/tasa.png)",
          backgroundPosition: "10% 40%", // X% Y% (move right/left and up/down)
          backgroundSize: "80%", // zoom in (increase), zoom out (decrease)
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.img
          src={samnaImg}
          alt="samna"
          className="w-full max-w-[170px] md:max-w-[250px] h-auto absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2"
          style={{ filter: "brightness(1.8) contrast(1.1)" }}
          variants={samnaVariants}
          animate={
            animationState === 0
              ? "initial"
              : animationState === 1
              ? "clicked"
              : animationState === 2
              ? "clicked2"
              : "clicked3"
          }
        />
        <motion.div
          variants={buttonVariants}
          animate={
            animationState === 0
              ? "initial"
              : animationState === 1
              ? "clicked"
              : animationState === 2
              ? "clicked2"
              : "clicked3"
          }
        >
          <button
            className="relative bg-cover px-4 py-2 rounded-lg font-bold text-lg text-gray-900"
            dir="rtl"
            onClick={handleClick}
          >
            <img
              src={zebdatasa}
              alt="click on zebda"
              className="w-full max-w-[12rem] h-auto"
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DefaultCircle;
