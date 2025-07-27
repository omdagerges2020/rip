import zebdatasa from "/assets/Butter.png";
import { motion } from "framer-motion";
import samnaImg from "/assets/samna.png";

const DefaultCircle = ({animationState, setAnimationState}) => {

  // Animation variants for the button
  const buttonVariants = {
    initial: {
      scale: 1,
      rotate: 10,
      x: 0,
      y: -50,
    },
    clicked: {
      scale: 0.5, // Zoom out
      rotate: 140, // Rotate to opposite direction
      x: -90, // Move horizontally
      y: -100, // Move vertically
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    clicked2: {
      scale: 0.3, // Different zoom
      rotate: 300, // Neutral rotation
      x: 100, // Move horizontally to the right
      y: 10, // Move downwards (south)
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
     clicked3: {
      scale: 0, // Different zoom
      rotate: 350, // Rotate to the left
      x: -5, // Move horizontally to the left
      y: 80, // Move downwards (south)
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  // Animation variants for the smoke image
  const smokeVariants = {
    initial: {
      x: -10,
      y: -70,
    },
    clicked: {
      scale: 0.5,
      x: -120, // Move horizontally to the right (same as button)
      y: -140, // Move upwards (north, same as button)
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    clicked2: {
      scale: 0.3, // Different zoom out
      x: 70, // Move horizontally to the right
      y: -40, // Move downwards (south)
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    clicked3: {
      scale: 0, // Different zoom out
      x: -40, // Move horizontally to the left
      y: 30, // Move downwards (south)
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const handleClick = () => {
    setAnimationState((prev) => (prev + 1) % 4);
  };

  return (
    <div className="w-full h-full rounded-full relative overflow-hidden">
      <div
        className="absolute inset-1 rounded-full flex items-center justify-center"
        style={{
          backgroundImage: "url(/assets/tasa.png)",
          backgroundPosition: "120% 50%", // X% Y% (move right/left and up/down)
          backgroundSize: "120%", // zoom in (increase), zoom out (decrease)
        }}
      >
        <motion.img
          src={samnaImg}
          alt="samna"
          style={{
            position: "absolute",
            top: "170px",
            left: "120px",
            width: "170px",
            transform: "scale(0.8)",
            pointerEvents: "none",
            zIndex: 1,
            opacity: 1,
            filter: "brightness(1.8) contrast(1.1)",
          }}
          className="text-orange-900"
          variants={smokeVariants}
          initial="initial"
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
          initial="initial"
          animate={
            animationState === 0
              ? 'initial'
              : animationState === 1
              ? 'clicked'
              : animationState === 2
              ? 'clicked2'
              : 'clicked3'
          }
        >
          <button
            className="text-gray-900  bg-cover px-4 py-2 rounded-lg font-bold text-lg text-center"
            style={{
              position: "relative",
              zIndex: 10,
              opacity: 100,
            }}
            dir="rtl"
            onClick={handleClick}
          >
            <img src={zebdatasa} width={200} alt="click on zebda" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DefaultCircle;
