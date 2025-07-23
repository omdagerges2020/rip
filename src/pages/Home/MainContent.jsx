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

const MainContent = ({ activeTab, setActiveTab, showTabsMenu, setShowTabsMenu }) => {
  return (
    <main className="container mx-auto px-8 py-8">
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
      ) : activeTab === 2 ? null : (
        <div className="flex w-full justify-center mt-5">
          <img src={textLogo} alt="text logo" />
        </div>
      )}

      {/* Main content grid */}
      {/* <div
        className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-10 ${
          activeTab === 1 ? "lg:grid-cols-10" : "lg:grid-cols-10"
        }  gap-3 items-end`}
      >
        <div
          className={`order-1 lg:order-1 ${
            activeTab === 1 ? "lg:col-span-1" : "lg:col-span-2"
          }  flex flex-col items-start`}
        >
          {activeTab === 2 ? (
            <div className="flex flex-col gap-5 ms-3">
              <TeamLeftContentTop />
              <TeamLeftContentBottom />
            </div>
          ) : activeTab === 1 ? (
            <div className="w-full h-full"></div>
          ) : (
            <LeftContent />
          )}
        </div>

        <div
          className={`order-2 lg:order-2 ${
            activeTab === 1 ? "lg:col-span-7" : "lg:col-span-6"
          }  flex justify-center`}
        >
          {activeTab === 2 ? (
            <TeamLayout />
          ) : (
            <CentralPan activeTab={activeTab} />
          )}
        </div>

        <div className="order-3 lg:order-3 lg:col-span-2 flex justify-center">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div> */}
      <div className="flex flex-col xl:flex-row gap-3 items-stretch w-full">
        {/* Left */}
        <div
          className={`${
            activeTab === 1 ? "lg:basis-[10%]" : "lg:basis-[10%]"
          } flex-col items-center xl:items-start hidden sm:flex`}
        >
          {activeTab === 2 ? (
            // <div className="flex flex-col gap-5 ms-3">
            //   <TeamLeftContentTop />
            //   <TeamLeftContentBottom />
            // </div>
            <div className="w-full h-full"></div>
          ) : activeTab === 1 ? (
            <div className="w-full h-full"></div>
          ) : (
            <LeftContent />
          )}
        </div>

        {/* Center */}
        {/* <div
          className={`${
            activeTab === 1 ? "lg:basis-[70%]" : "lg:basis-[60%]"
          } flex justify-center`}
        >
          {activeTab === 2 ? (
            <TeamLayout />
          ) : (
            <CentralPan activeTab={activeTab} />
          )}
        </div> */}
        <div className="flex-1 flex justify-center">
          {/* في xl: اعرض CentralPan/TeamLayout عادي
        في md/lg: اعرض TabNavigation إذا showTabsMenu = true، وإلا اعرض CentralPan/TeamLayout */}
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
        {/* 
        <div className="lg:basis-[20%] flex justify-center">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div> */}
        {/* Right: TabNavigation يظهر فقط في xl */}
        <div className="hidden xl:flex xl:basis-[20%] justify-center">
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
