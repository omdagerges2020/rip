import TabNavigation from "./TabNavigation";
import CentralPan from "./CentralPan";
import LeftContentMobile from "./LeftContentMobile";
import SocialLinks from "./SocialLinks";
import maincontentLogo from "/assets/maincontentheader-logo.png";
import { useEffect } from "react";
import LeftContent from "./LeftContent";

const MainContent = ({
  activeTab,
  showTabs,
  setShowTabs,
  handleTabChange,
  animationState,
  setAnimationState,
}) => {
  // Dynamic grid classes based on activeTab
  const getGridClasses = () => {
    if (activeTab === 0) {
      // Video tab - give more space to center, less to sides
      return "grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] items-start mt-8 gap-8";
    } else if (activeTab === 1) {
      // clients tab - normal spacing
      return "grid grid-cols-1 lg:grid-cols-[1fr_4fr_1fr] gap-8 items-start mt-8";
    } else {
      // Default tabs - normal spacing
      return "grid grid-cols-1 lg:grid-cols-3 gap-8 items-start";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is >= 1024px (Tailwind's lg breakpoint)
      if (window.innerWidth >= 1024) {
        setShowTabs(false);
      }
    };

    // Run on mount and when window is resized
    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [setShowTabs]);

  return (
    <main className="container mx-auto px-6 py-3">
      {activeTab === -1 && (
        <div className="text-center">
          <div className="relative inline-block">
            <img src={maincontentLogo} alt="لفكار بطعم الزبدة" />
          </div>
        </div>
      )}

      <div className={getGridClasses()}>
        {/* Left side - Tabs */}
        <div
          className={`order-1 lg:order-1 lg:flex flex-col min-h-[300px] justify-center items-center${
            showTabs ? "block" : "hidden md:hidden"
          }`}
        >
          <TabNavigation
            activeTab={activeTab}
            handleTabChange={handleTabChange}
          />
        </div>
        {/* Center - The changing circle/image */}
        <div
          className={`order-2 lg:order-2 flex justify-center ${
            showTabs ? "hidden md:hidden" : "block"
          }`}
        >
          <CentralPan
            activeTab={activeTab}
            animationState={animationState}
            setAnimationState={setAnimationState}
          />
        </div>
        {/* Right side - Arabic text - for large screens*/}
        <div className="order-3 lg:order-3 hidden md:hidden lg:flex justify-center md:justify-center lg:justify-center  xl:justify-start ">
          <LeftContent activeTab={activeTab}/>
        </div>

        {/* Right side - Arabic text - for small screens*/}
        <div className="order-3 lg:order-3 flex md:flex lg:hidden justify-center">
          <LeftContentMobile />
        </div>
      </div>

      {/* Social Links below the central pan */}
      <div className="flex justify-center">
        {/* Added margin-top for spacing */}
        <SocialLinks />
      </div>
    </main>
  );
};

export default MainContent;
