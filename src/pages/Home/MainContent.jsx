import { motion } from "framer-motion";
import CentralPan from "../../components/CentralPan";
import LeftContent from "../../components/LeftContent";
import BottomLeftSection from "../../components/BottomLeftSection";
import TabNavigation from "../../components/TabNavigation";
import Footer from "../../components/Footer";

const MainContent = ({ activeTab, setActiveTab }) => {
  return (
    <main className="container mx-auto px-6 py-8 ">
      {/* Main heading with positioned orange text */}
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <h1
            className="text-white text-4xl md:text-6xl font-bold mb-6 transform -rotate-3"
            dir="rtl"
          >
            أفكار بطعم الزبدة
          </h1>

          <motion.div
            className="absolute top-4 md:top-6 right-8 md:right-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap transform rotate-3"
              dir="rtl"
            >
              كل يقدم أفكار احنا بنقدملك الزبدة
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start mt-16">
        {/* Left side - Tabs */}
        <div className="order-3 lg:order-3">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Center - The changing circle/image */}
        <div className="order-2 lg:order-2 flex justify-center">
          <CentralPan activeTab={activeTab} />
        </div>

        {/* Right side - Arabic text */}
        <div className="order-1 lg:order-1">
          <LeftContent />
          {/* <BottomLeftSection /> */}
        </div>
      </div>
      {/* Social Links below the central pan */}
      <div className="flex justify-center">
        <Footer />
      </div>
    </main>
  );
};

export default MainContent;
