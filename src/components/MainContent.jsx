// import TabNavigation from "./TabNavigation";
// import CentralPan from "./CentralPan";
// import LeftContentMobile from "./LeftContentMobile";
// import SocialLinks from "./SocialLinks";
// import maincontentLogo from "/assets/maincontentheader-logo.png";
// import { useEffect } from "react";
// import LeftContent from "./LeftContent";
// import { motion, AnimatePresence } from "framer-motion";

// const MainContent = ({
//   viewMode,
//   activeTab,
//   handleTabChange,
//   animationState,
//   setAnimationState,
//   setViewMode,
// }) => {
//   const getGridClasses = () => {
//     if (activeTab === 0) {
//       return "grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] items-start mt-8 gap-8";
//     } else if (activeTab === 1) {
//       return "grid grid-cols-1 lg:grid-cols-[1fr_4fr_1fr] gap-8 items-start mt-8";
//     } else if (activeTab === 2) {
//       return "grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-8 items-start mt-16";
//     } else if (activeTab === 3) {
//       return "grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 items-start mt-8";
//     } else {
//       return "grid grid-cols-1 lg:grid-cols-3 gap-8 items-start";
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setViewMode("default");
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, [setViewMode, viewMode]);

//   return (
//     <main className="container mx-auto px-6 py-3 w-full">
//       <AnimatePresence>
//         {activeTab === -1 && (
//           <motion.div
//             key="default-logo"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="flex justify-center items-center"
//           >
//             <img src={maincontentLogo} alt="لفكار بطعم الزبدة" />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className={getGridClasses()}>
//         {/* Tabs - Only render on mobile when viewMode === "tabs", always on desktop */}
//         <AnimatePresence>
//           {(viewMode === "tabs" || window.innerWidth >= 1024) && (
//             <motion.div
//               key="tabs"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 50 }}
//               transition={{ duration: 0.3 }}
//               className={`order-1 lg:order-1 flex flex-col ${
//                 activeTab === 3 ? "min-h-[600px]" : "h-[300px]"
//               } xl:justify-center xl:items-start ${window.innerWidth < 1024 ? (viewMode === "tabs" ? "block" : viewMode === "tab-content" ? "block" : "hidden") : "lg:flex"}`}
//             >
//               <TabNavigation
//                 activeTab={activeTab}
//                 handleTabChange={handleTabChange}
//                 viewMode={viewMode}
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Central Content */}
//         <AnimatePresence>
//           {(viewMode === "default" || viewMode === "tab-content") && (
//             <motion.div
//               key="content"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -50 }}
//               transition={{ duration: 0.3 }}
//               className={`order-2 lg:order-2 flex justify-center ${
//                 viewMode === "tabs" && window.innerWidth < 1024 ? "hidden" : "block"
//               }`}
//             >
//               <CentralPan
//                 activeTab={activeTab}
//                 animationState={animationState}
//                 setAnimationState={setAnimationState}
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Right side - Desktop */}
//         <AnimatePresence>
//           {(viewMode === "default" || viewMode === "tab-content") && (
//             <motion.div
//               key="left-content-desktop"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className={`order-3 hidden lg:flex justify-center xl:justify-start`}
//             >
//               <LeftContent activeTab={activeTab} />
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Right side - Mobile */}
//         <AnimatePresence>
//           {(viewMode === "default" || viewMode === "tab-content") && (
//             <motion.div
//               key="left-content-mobile"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className={`order-3 lg:order-3 flex lg:hidden justify-center ${
//                 viewMode === "tabs" && window.innerWidth < 1024 ? "hidden" : ""
//               }`}
//             >
//               <LeftContentMobile />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       <div className="flex justify-center">
//         <SocialLinks />
//       </div>
//     </main>
//   );
// };

// export default MainContent;
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabNavigation from "./TabNavigation";
import CentralPan from "./CentralPan";
import LeftContent from "./LeftContent";
import LeftContentMobile from "./LeftContentMobile";
import SocialLinks from "./SocialLinks";
import maincontentLogo from "/assets/maincontentheader-logo.png";

const MainContent = ({
  viewMode,
  activeTab,
  handleTabChange,
  animationState,
  setAnimationState,
  setViewMode,
}) => {
  const getGridClasses = () => {
    if(activeTab === 2){
          return "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[0fr_3fr_1fr] gap-4 sm:gap-6 lg:gap-8 items-center mt-6 max-w-7xl ";
    } else {
          return "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-4 sm:gap-6 lg:gap-8 items-center mt-6 max-w-7xl ";

    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setViewMode("default");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setViewMode]);

  return (
    <main className="container mx-auto px-4 sm:px-6 py-6 w-full flex-grow">
      <AnimatePresence>
        {activeTab === -1 && (
          <motion.div
            key="default-logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center items-center"
          >
            <img
              src={maincontentLogo}
              alt="لفكار بطعم الزبدة"
              className="w-3/4 sm:w-1/2 md:w-1/3 max-w-md"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={getGridClasses()}>
        <AnimatePresence>
          {(viewMode === "tabs" || window.innerWidth >= 1024) && (
            <motion.div
              key="tabs"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="order-1 lg:order-3 flex justify-center"
            >
              <TabNavigation
                activeTab={activeTab}
                handleTabChange={handleTabChange}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {(viewMode === "default" || viewMode === "tab-content") && (
            <motion.div
              key="content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="order-2 flex justify-center"
            >
              <CentralPan
                activeTab={activeTab}
                animationState={animationState}
                setAnimationState={setAnimationState}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {(viewMode === "default" || viewMode === "tab-content") && (
            <motion.div
              key="left-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="order-3 lg:order-1 flex justify-center lg:hidden"
            >
              <LeftContentMobile />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {(viewMode === "default" || viewMode === "tab-content") && (
            <motion.div
              key="left-content-desktop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="order-3 lg:order-1 hidden lg:flex justify-center"
            >
              <LeftContent activeTab={activeTab} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6">
        <SocialLinks />
      </div>
    </main>
  );
};

export default MainContent;