import { AnimatePresence, motion } from "framer-motion";
import zebdaImage from "/assets/zebda.png";
import ClientLayout from "./clientTab/ClientLayout";

const CentralPan = ({ activeTab }) => {
  return (
    // <div className="relative w-80 h-80">
    //   <AnimatePresence mode="wait">
    //     {activeTab === -1 ? (
    //       // Default main page circle
    //       <div
    //         key="default"
    //         className="w-full h-full"
    //       >
    //         <img src={defaultContentImg} />
    //       </div>
    //     ) : activeTab === 0 ? (
    //       // Tab 1 - زبدة أعمالنا
    //       <div
    //         key="tab0"
    //         className="w-full h-full"
    //       >
    //         <WorksCircle />
    //       </div>
    //     ) : activeTab === 1 ? (
    //       // Tab 2 - زبدة عملائنا
    //       <div
    //         key="tab1"
    //         className="w-full h-full"
    //       >
    //         <ClientsCircle />
    //       </div>
    //     ) : activeTab === 2 ? (
    //       // Tab 3 - زبدة فريقنا
    //       <div
    //         key="tab2"
    //         className="w-full h-full"
    //       >
    //         <TeamCircle />
    //       </div>
    //     ) : (
    //       // Tab 4 - ليج الزبدة ؟ كلمنا
    //       <div
    //         key="tab3"
    //         className="w-full h-full"
    //       >
    //         <ContactCircle />
    //       </div>
    //     )}
    //   </AnimatePresence>
    // </div>
    // <div className="relative w-80 h-80">
    //   <AnimatePresence mode="wait">
    //     {activeTab === -1 ? (
    //       // Default main page circle
    //       <motion.div
    //         key="default"
    //         initial={{ y: -100, opacity: 0, scale: 0.8 }}
    //         animate={{ y: 0, opacity: 1, scale: 1 }}
    //         exit={{ y: 100, opacity: 0, scale: 0.8 }}
    //         transition={{ duration: 0.6, ease: "easeInOut" }}
    //         className="w-full h-full"
    //       >
    //         <DefaultCircle />
    //       </motion.div>
    //     ) : activeTab === 0 ? (
    //       // Tab 1 - زبدة أعمالنا
    //       <motion.div
    //         key="tab0"
    //         initial={{ y: -100, opacity: 0, scale: 0.8 }}
    //         animate={{ y: 0, opacity: 1, scale: 1 }}
    //         exit={{ y: 100, opacity: 0, scale: 0.8 }}
    //         transition={{ duration: 0.6, ease: "easeInOut" }}
    //         className="w-full h-full"
    //       >
    //         <WorksCircle />
    //       </motion.div>
    //     ) : activeTab === 1 ? (
    //       // Tab 2 - زبدة عملائنا
    //       <motion.div
    //         key="tab1"
    //         initial={{ y: -100, opacity: 0, scale: 0.8 }}
    //         animate={{ y: 0, opacity: 1, scale: 1 }}
    //         exit={{ y: 100, opacity: 0, scale: 0.8 }}
    //         transition={{ duration: 0.6, ease: "easeInOut" }}
    //         className="w-full h-full"
    //       >
    //         <ClientsCircle />
    //       </motion.div>
    //     ) : activeTab === 2 ? (
    //       // Tab 3 - زبدة فريقنا
    //       <motion.div
    //         key="tab2"
    //         initial={{ y: -100, opacity: 0, scale: 0.8 }}
    //         animate={{ y: 0, opacity: 1, scale: 1 }}
    //         exit={{ y: 100, opacity: 0, scale: 0.8 }}
    //         transition={{ duration: 0.6, ease: "easeInOut" }}
    //         className="w-full h-full"
    //       >
    //         <TeamCircle />
    //       </motion.div>
    //     ) : (
    //       // Tab 4 - ليج الزبدة ؟ كلمنا
    //       <motion.div
    //         key="tab3"
    //         initial={{ y: -100, opacity: 0, scale: 0.8 }}
    //         animate={{ y: 0, opacity: 1, scale: 1 }}
    //         exit={{ y: 100, opacity: 0, scale: 0.8 }}
    //         transition={{ duration: 0.6, ease: "easeInOut" }}
    //         className="w-full h-full"
    //       >
    //         <ContactCircle />
    //       </motion.div>
    //     )}
    //   </AnimatePresence>
    // </div>
    <div className="relative w-80 h-80">
      <AnimatePresence mode="wait">
        {activeTab === -1 ? (
          // Default main page circle
          <motion.div
            key="default"
            initial={{ y: -100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <DefaultCircle />
          </motion.div>
        ) : activeTab === 0 ? (
          // Tab 1 - زبدة أعمالنا
          <motion.div
            key="tab0"
            initial={{ y: -100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <WorksCircle />
          </motion.div>
        ) : activeTab === 1 ? (
          // Tab 2 - زبدة عملائنا
          <motion.div
            key="tab1"
            initial={{ y: -100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <ClientLayout />
          </motion.div>
        ) : activeTab === 3 ? (
          // Tab 4 - ليج الزبدة ؟ كلمنا (Tab 3 in 0-indexed array)
          <motion.div
            key="tab3"
            initial={{ y: -100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <ContactCircle />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

// Default circle - main page
const DefaultCircle = () => (
  <div className="w-full h-full  border-1 border-gray-700 relative overflow-hidden">
    {/* Main content */}
    <div
      className="absolute inset-4  rounded-full flex items-center mt-10 justify-center"
      style={{
        backgroundImage: `url('/assets/tasa.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className=" text-gray-900 absolute -top-[10px] -right-[5px] px-4 py-2 rounded-lg font-bold text-lg transform -rotate-10 text-center"
        dir="rtl"
      >
        <img src={zebdaImage} alt="zebda" width={200} />
      </div>
    </div>
  </div>
);

// Tab 1 - Works circle
const WorksCircle = () => (
  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-800 to-blue-900 border-4 border-blue-700 relative overflow-hidden shadow-2xl">
    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-900 to-black flex items-center justify-center">
      <div className="text-center text-white" dir="rtl">
        <div className="bg-blue-500 text-white px-3 py-1 rounded-lg font-bold text-sm mb-2">
          أعمالنا
        </div>
        <h3 className="text-yellow-400 font-bold text-xl mb-2">
          مشاريع إبداعية
        </h3>
        <p className="text-gray-300 text-sm">
          تصميم وتطوير
          <br />
          حلول متكاملة
        </p>
      </div>
    </div>
  </div>
);



// Tab 4 - Contact circle
const ContactCircle = () => (
  <div className="w-full h-full rounded-full bg-gradient-to-br from-red-800 to-red-900 border-4 border-red-700 relative overflow-hidden shadow-2xl">
    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
      <div className="text-center text-white" dir="rtl">
        <div className="bg-red-500 text-white px-3 py-1 rounded-lg font-bold text-sm mb-2">
          تواصل معنا
        </div>
        <h3 className="text-yellow-400 font-bold text-xl mb-2">ليج الزبدة؟</h3>
        <p className="text-gray-300 text-sm">
          كلمنا دلوقتي
          <br />
          واحصل على استشارة
        </p>
      </div>
    </div>
  </div>
);

export default CentralPan;
