// import { motion, AnimatePresence } from "framer-motion";
// import DefaultCircle from "./DefaultCircle";
// import logoabovevideoImg from "/assets/zebdaa3malna.png";
// import TeamCircle from "./TeamCircle";
// import ContactForm from "./ContactForm";
// import ClientsCircle from "./ClientsCircle";

// const CentralPan = ({ activeTab, animationState, setAnimationState }) => {
//   return (
//     <div
//       className={`
//     mx-auto
//     min-h-[300px]
//     sm:h-[400px]
//     md:max-h-[800px]
//     lg:h-[600px]
//     xl:h-screen
//     ${
//       activeTab === -1
//         ? "w-[90%] sm:w-[500px] md:w-[600px]"
//         : activeTab === 0
//         ? "w-[90%] sm:w-[500px] md:w-[700px] lg:w-[600px]"
//         : activeTab === 1
//         ? "w-[90%] sm:w-[500px] md:w-[650px]"
//         : activeTab === 2
//         ? "w-[90%] sm:w-[500px] md:w-[600px]"
//         : "w-[90%] sm:w-[400px] md:w-[500px]"
//     }
//   `}
//     >
//       <AnimatePresence mode="wait">
//         {activeTab === -1 ? (
//           // Default main page circle
//           <motion.div
//             key="default"
//             initial={{ y: -100, opacity: 0, scale: 0.8 }}
//             animate={{ y: 0, opacity: 1, scale: 1 }}
//             exit={{ y: 100, opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             className="w-full h-full"
//           >
//             <DefaultCircle
//               animationState={animationState}
//               setAnimationState={setAnimationState}
//             />
//           </motion.div>
//         ) : activeTab === 0 ? (
//           // Tab 1 - زبدة أعمالنا
//           <motion.div
//             key="tab0"
//             initial={{ y: -400, opacity: 0, scale: 0.8 }}
//             animate={{ y: 0, opacity: 1, scale: 1 }}
//             exit={{ y: 100, opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.7, ease: "easeInOut" }}
//           >
//             <WorksVideo />
//           </motion.div>
//         ) : activeTab === 1 ? (
//           // Tab 2 - زبدة عملائنا
//           <motion.div
//             key="tab1"
//             initial={{ y: -100, opacity: 0, scale: 0.8 }}
//             animate={{ y: 0, opacity: 1, scale: 1 }}
//             exit={{ y: 100, opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="w-full"
//           >
//             <ClientsCircle />
//           </motion.div>
//         ) : activeTab === 2 ? (
//           // Tab 3 - زبدة فريقنا
//           <motion.div
//             key="tab2"
//             initial={{ y: -100, opacity: 0, scale: 0.8 }}
//             animate={{ y: 0, opacity: 1, scale: 1 }}
//             exit={{ y: 100, opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="w-full h-full"
//           >
//             <TeamCircle />
//           </motion.div>
//         ) : (
//           // Tab 4 - ليج الزبدة ؟ كلمنا
//           <motion.div
//             key="tab3"
//             initial={{ y: -100, opacity: 0, scale: 0.8 }}
//             animate={{ y: 0, opacity: 1, scale: 1 }}
//             exit={{ y: 100, opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="w-full h-full"
//           >
//             <ContactForm />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const WorksVideo = () => (
//   <div className="relative w-full flex justify-center items-start">
//     {/* Video Rectangle */}
//     <div className="relative w-full max-w-[800px] bg-gray-900 p-2 rounded-xl overflow-hidden shadow-lg border border-gray-700">
//       <video
//         className="w-full h-auto object-cover rounded-lg"
//         controls
//         poster="/placeholder.svg?height=208&width=384&text=Video+Poster"
//         autoPlay
//         loop
//       >
//         <source src="/assets/awesome-video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Play button overlay (optional) */}
//       <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors pointer-events-none">
//         <div className="w-8 h-8 bg-gray-600/70 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
//           <svg
//             className="w-6 h-6 text-white"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M8 5v10l8-5-8-5z" />
//           </svg>
//         </div>
//       </div>
//     </div>

//     {/* Logo above video */}
//     <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-white">
//       <img
//         src={logoabovevideoImg}
//         alt="شوريل زبدة اعمالنا"
//         className="w-32 h-auto"
//       />
//     </div>
//   </div>
// );

// export default CentralPan;
import { motion, AnimatePresence } from "framer-motion";
import DefaultCircle from "./DefaultCircle";
import logoabovevideoImg from "/assets/zebdaa3malna.png";
import TeamCircle from "./TeamCircle";
import ContactForm from "./ContactForm";
import ClientsCircle from "./ClientsCircle";
import ClientsCircleMobile from "./ClientsCircleMobile";
import { useMediaQuery } from "@react-hook/media-query";

const CentralPan = ({ activeTab, animationState, setAnimationState }) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {activeTab === -1 ? (
          <motion.div
            key="default"
            initial={{ y: -50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <DefaultCircle
              animationState={animationState}
              setAnimationState={setAnimationState}
            />
          </motion.div>
        ) : activeTab === 0 ? (
          <motion.div
            key="tab0"
            initial={{ y: -50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <WorksVideo />
          </motion.div>
        ) : activeTab === 1 ? (
          <motion.div
            key="tab1"
            initial={{ y: -50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full flex justify-center"
          >
            {isMobile ? <ClientsCircleMobile /> : <ClientsCircle />}
          </motion.div>
        ) : activeTab === 2 ? (
          <motion.div
            key="tab2"
            initial={{ y: -50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <TeamCircle />
          </motion.div>
        ) : (
          <motion.div
            key="tab3"
            initial={{ y: -50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <ContactForm />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WorksVideo = () => (
  <div className="relative w-full flex justify-center items-start">
    <div className="w-full max-w-3xl bg-gray-900 p-2 rounded-xl overflow-hidden shadow-lg border border-gray-700">
      <video
        className="w-full h-auto object-cover rounded-lg"
        controls
        poster="/placeholder.svg?height=208&width=384&text=Video+Poster"
        autoPlay
        loop
      >
        <source src="/assets/awesome-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors pointer-events-none">
        <div className="w-8 h-8 bg-gray-600/70 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M8 5v10l8-5-8-5z" />
          </svg>
        </div>
      </div>
    </div>
    <div className="absolute -top-8 left-1/2 -translate-x-1/2">
      <img
        src={logoabovevideoImg}
        alt="شوريل زبدة اعمالنا"
        className="w-24 sm:w-32 h-auto"
      />
    </div>
  </div>
);

export default CentralPan;
