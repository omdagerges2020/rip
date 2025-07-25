import CentralPan from "../../components/CentralPan";
import LeftContent from "../../components/LeftContent";
import TabNavigation from "../../components/TabNavigation";
import TeamLayout from "../../components/teamTab/TeamLayout";
import Footer from "../../components/Footer";
import TeamLeftContentTop from "../../components/teamTab/TeamLeftContentTop";
import TeamLeftContentBottom from "../../components/teamTab/TeamLeftContentBottom";
import textLogo from "/assets/logotext.png";
import clientstopLogo from "/assets/clientstoplogo.png";
import LeftContentMobile from "../../components/LeftContentMobile";
import OurWorkersLeftContent from "../../components/ourWorks/OurWorkersLeftContent";

const MainContent = ({
  activeTab,
  setActiveTab,
  showTabsMenu,
  setShowTabsMenu,
}) => {
  return (
    <main className="w-full px-2 sm:px-4 md:px-8 py-8 overflow-x-hidden">
      {/* Main heading with positioned orange text */}
      {activeTab === 1 ? (
        <div className="flex w-full justify-center">
          <img
            src={clientstopLogo}
            alt="text logo"
            width={300}
            className="relative z-20 mt-3  h-[50px]"
            style={{ marginBottom: "-4rem" }}
          />
        </div>
      ) : activeTab === 2 ? null : activeTab === 0 ? null : (
        <div className="flex w-full justify-center mt-5">
          <img src={textLogo} alt="text logo" />
        </div>
      )}

      {/* Main content grid */}
      <div className="flex flex-col xl:flex-row gap-3 items-center jstify-center w-full max-w-7xl mx-auto">
        {/* Left */}
        <div
          className={`${
            activeTab === 1 ? "lg:basis-[30%]" : "lg:basis-[20%]"
          } flex-col items-center xl:items-end hidden sm:flex`}
        >
          {activeTab === 2 ? (
            // <div className="flex flex-col gap-5 ms-3">
            //   <TeamLeftContentTop />
            //   <TeamLeftContentBottom />
            // </div>
            <div className="w-full h-full"></div>
          ) : activeTab === 1 ? (
            <div className="w-full h-full"></div>
          ) : activeTab === 0 ? (
            <OurWorkersLeftContent />
          ) : (
            <LeftContent />
          )}
        </div>

        {/* Center */}
        <div
          className={`${
            activeTab === 0
              ? "lg:basis-[40%] max-w-4xl"
              : "lg:basis-[50%] max-w-2xl xl:max-w-none"
          } flex justify-center items-center mx-auto mb-[3em]`}
        >
          {showTabsMenu && window.innerWidth < 1280 ? (
            <TabNavigation
              activeTab={activeTab}
              setActiveTab={(tab) => {
                setActiveTab(tab);
                setShowTabsMenu(false);
              }}
            />
          ) : activeTab === 2 ? (
            <TeamLayout />
          ) : (
            <CentralPan activeTab={activeTab} />
          )}
        </div>
        {/* Right: TabNavigation يظهر فقط في xl */}
        <div className="hidden xl:flex xl:basis-[30%] justify-center items-center">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

      {/* LeftContent for mobile only (before footer) */}
      {activeTab !== 2 && activeTab !== 1 && (
        <div className="flex sm:hidden w-full justify-center mt-6">
          <LeftContentMobile />
        </div>
      )}

      {/* Social Links below the central pan */}
      <div className="mt-16 flex justify-center">
        <Footer />
      </div>
    </main>
  );
};

export default MainContent;
