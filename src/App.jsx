import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";
import lightImg from "/assets/Light3.png";

function App() {
  const [viewMode, setViewMode] = useState("default");
  const [activeTab, setActiveTab] = useState(-1);
  const [animationState, setAnimationState] = useState(0);

  const resetAnimation = () => {
    setViewMode("default");
    setActiveTab(-1);
    setAnimationState(0);
  };

  const handleBurgerClick = () => {
    setViewMode((prev) => (prev === "tabs" ? "default" : "tabs"));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setViewMode("tab-content");
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-custom-gradient"></div>
      <div className="absolute inset-0 bg-[url('/assets/BG.png')] bg-cover bg-center opacity-50"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <img src={lightImg} alt="light3" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header
          onLogoClick={resetAnimation}
          onBurgerClick={handleBurgerClick}
          viewMode={viewMode}
        />
        <MainContent
          viewMode={viewMode}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
          animationState={animationState}
          setAnimationState={setAnimationState}
          setViewMode={setViewMode}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
