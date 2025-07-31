// import { useState } from "react";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";
// import "./App.css";
// import lightImg from "/assets/Light3.png";
// import lionImg from "/assets/lion.png";

// function App() {
//   const [viewMode, setViewMode] = useState("default"); // "default", "tabs", or "tab-content"
//   const [activeTab, setActiveTab] = useState(-1); // Track selected tab
//   const [animationState, setAnimationState] = useState(0);

//   const resetAnimation = () => {
//     // setViewMode("default");
//     setActiveTab(-1);
//     setAnimationState(0);
//   };

//   const handleBurgerClick = () => {
//     setViewMode((prev) => (prev === "tabs" ? "default" : "tabs"));
//   };

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setViewMode("tab-content");
//   };

//   console.log(viewMode);
  

//   return (
//     <div className="relative">
//       <div className="absolute inset-0 bg-custom-gradient"></div>
//       <div className="absolute inset-0 bg-[url('/assets/BG.png')] bg-cover bg-center opacity-50"></div>
//       <div className="absolute overflow-hidden pointer-events-none opacity-50">
//         <img src={lightImg} alt="light3" />
//       </div>
//       <div className="relative z-10">
//         <Header
//           onLogoClick={resetAnimation}
//           onBurgerClick={handleBurgerClick}
//           viewMode={viewMode}
//         />
//         <MainContent
//           viewMode={viewMode}
//           activeTab={activeTab}
//           handleTabChange={handleTabChange}
//           animationState={animationState}
//           setAnimationState={setAnimationState}
//           setViewMode={setViewMode}
//         />
//         <Footer />
//           <div className="hidden absolute bottom-[2px] left-0 p-4">
//             <img src={lionImg} alt="lion" width={100} />
//           </div>
//       </div>
//     </div>
//   );
// }

// export default App;
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
