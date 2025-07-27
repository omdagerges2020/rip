import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";
import lightImg from "/assets/Light3.png";
import lionImg from "/assets/lion.png";

function App() {
  const [activeTab, setActiveTab] = useState(-1);
  const [showTabs, setShowTabs] = useState(false);
  // State to track animation state (0: initial, 1: clicked, 2: clicked2, 3: clicked3)
  const [animationState, setAnimationState] = useState(0);

  // Reset animation to initial state
  const resetAnimation = () => {
    setActiveTab(-1);
    setAnimationState(0); // Reset to initial state
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab); // تغيير التاب
    setShowTabs(false); // إغلاق المنيو تلقائياً
  };

  const handleBurgerClick = () => setShowTabs((prev) => !prev);

  // const handleLogoClick = () => {
  //   setActiveTab(-1);
  // };

  return (
    <div className="min-h-screen relative">
      {/* Base background with controlled diagonal gradient */}
      <div className="absolute inset-0 bg-custom-gradient"></div>

      {/* Image overlay on top of the gradient */}
      <div className="absolute inset-0 bg-[url('/assets/BG.png')] bg-cover bg-center opacity-50"></div>

      {/* Background decorative elements (keep them on top of the image overlay) */}
      <div className="absolute overflow-hidden pointer-events-none opacity-50">
        <img src={lightImg} alt="light3" />
      </div>

      <div className="relative z-10">
        <Header
          onLogoClick={resetAnimation}
          onBurgerClick={handleBurgerClick}
          showTabs={showTabs}
          setShowTabs={setShowTabs}
        />
        <MainContent
          handleTabChange={handleTabChange}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          showTabs={showTabs}
          setShowTabs={setShowTabs}
          animationState={animationState}
          setAnimationState={setAnimationState}
        />
        <Footer />
      </div>
      {activeTab === -1 && (
        <div className="absolute bottom-[-15px] left-0 p-4">
          <img src={lionImg} alt="lion" width={100} />
        </div>
      )}
    </div>
  );
}

export default App;
