import { motion } from "framer-motion";
import CentralPan from "../../components/CentralPan";
import LeftContent from "../../components/LeftContent";
import TabNavigation from "../../components/TabNavigation";
import TeamLayout from "../../components/teamTab/TeamLayout";
import Footer from "../../components/Footer";
import TeamLeftContentTop from "../../components/teamTab/TeamLeftContentTop";
import TeamLeftContentBottom from "../../components/teamTab/TeamLeftContentBottom";
import textLogo from "/assets/logotext.png"

const MainContent = ({ activeTab, setActiveTab }) => {
  return (
    <main className="container mx-auto px-8 py-8">
      {/* Main heading with positioned orange text */}
      <div className="flex w-full justify-center mt-5">
        <img src={textLogo} alt="text logo" />
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-1 items-end">
        {/* Left side - Tabs / Left Content for Team Tab */}
        <div className="order-1 lg:order-1 lg:col-span-2 flex flex-col items-start">
          {activeTab === 2 ? (
            <div className="flex flex-col gap-5 ms-3">
              <TeamLeftContentTop />
              <TeamLeftContentBottom />
            </div>
          ) : (
            <>
              <LeftContent />
            </>
          )}
        </div>

        {/* Center - The changing content (Pan or TeamLayout) */}
        <div className="order-2 lg:order-2 lg:col-span-6 flex justify-center">
          {activeTab === 2 ? (
            <TeamLayout />
          ) : (
            <CentralPan activeTab={activeTab} />
          )}
        </div>

        {/* Right side - Arabic text / Tabs for Team Tab */}
        <div className="order-3 lg:order-3 lg:col-span-2 flex justify-center mt-8">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

      {/* Social Links below the central pan */}
      <div className="mt-16 flex justify-center">
        <Footer />
      </div>
    </main>
  );
};

export default MainContent;
