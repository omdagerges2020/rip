// import { motion } from "framer-motion";

// const tabs = [
//   "زبدة أعمالنا",
//   "زبدة عملائنا",
//   "زبدة فريقنا",
//   "تبى الزبدة ؟ كلمنا",
// ];

// const TabNavigation = ({ activeTab, handleTabChange }) => {
//   // Animation variants based on activeTab
//   const animationProps =
//     activeTab === 0
//       ? {
//           initial: { opacity: 0, x: 50 }, // Start from right
//           animate: { opacity: 1, x: 20 }, // Move slightly to the right for wider content
//           transition: { duration: 0.9, ease: "easeInOut", delay: .5 }, // Slower, matches CentralPan/LeftContent
//         }
//       : {
//           initial: { opacity: 0, x: 50 }, // Start from right
//           animate: { opacity: 1, x: 0 }, // Default position
//           transition: { duration: 0.8, ease: "easeInOut", delay: 0 }, // Slower
//         };

//   return (
//     <div className={`flex flex-col space-y-4 justify-start items-start dir="rtl"`}>
//       {tabs.map((tab, index) => (
//         <motion.button
//           key={index}
//           onClick={() => handleTabChange(index)}
//           className={`px-6 py-4 rounded-full flex justify-center items-center font-bold transition-all duration-300 w-[217px] h-[45px] ${
//             activeTab === index
//               ? "bg-orange-900 text-white shadow-lg hover:bg-orange-600"
//               : "bg-white text-black shadow-md "
//           }`}
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           {...animationProps}
//           transition={{ ...animationProps.transition, delay: index * 0.2 }} // Staggered delay for each button
//         >
//           {tab}
//         </motion.button>
//       ))}
//     </div>
//   );
// };

// export default TabNavigation;
import { motion } from "framer-motion";

const tabs = [
  "زبدة أعمالنا",
  "زبدة عملائنا",
  "زبدة فريقنا",
  "تبى الزبدة ؟ كلمنا",
];

const TabNavigation = ({ activeTab, handleTabChange }) => {
  const animationProps = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  return (
    <motion.div
      className="flex flex-col space-y-4 justify-center items-center lg:items-start w-full max-w-xs"
      dir="ltr"
      {...animationProps}
    >
      {tabs.map((tab, index) => (
        <motion.button
          key={index}
          onClick={() => handleTabChange(index)}
          className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-300 text-sm sm:text-base ${
            activeTab === index
              ? "bg-orange-900 text-white shadow-lg hover:bg-orange-600"
              : "bg-white text-black shadow-md hover:bg-gray-100"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {tab}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default TabNavigation;
