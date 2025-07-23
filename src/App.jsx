import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./pages/Home/MainContent";
// import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState(-1);
  const [showTabsMenu, setShowTabsMenu] = useState(false);


  const handleLogoClick = () => {
    setActiveTab(-1);
  };
  return (
    <div className="min-h-screen  bg-custom-gradient bg-cover bg-center bg-no-repeat relative overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute bg-[url('./assets/Light3.png')] inset-0 overflow-hidden pointer-events-none">
      </div> */}
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('./assets/Light3.png')] opacity-50 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('./assets/fire-sparks.png')] opacity-30 animate-pulse pointer-events-none"></div>

      <div className="relative z-10">
        <Header onLogoClick={handleLogoClick} />
        <MainContent activeTab={activeTab} setActiveTab={setActiveTab} showTabsMenu={showTabsMenu} setShowTabsMenu={setShowTabsMenu}/>
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
