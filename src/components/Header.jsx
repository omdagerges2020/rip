// import logoImg from "/assets/logo.png";
// import headerLogo from "/assets/headerlogo.png";

// const Header = ({ onLogoClick, onBurgerClick}) => {
//   return (
//     <header className="flex justify-between items-center md:justify-between lg:justify-center xl:justify-center pt-8 px-2">
//       {/* Burger menu - يظهر فقط في sm */}
//       <button
//         className="block md:block lg:hidden xl:hidden"
//         onClick={onBurgerClick}
//         aria-label="Open menu"
//       >
//         <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
//           <rect y="4" width="24" height="3" rx="1.5" />
//           <rect y="10.5" width="24" height="3" rx="1.5" />
//           <rect y="17" width="24" height="3" rx="1.5" />
//         </svg>
//       </button>
//       {/* Logo - وسط */}
//       <button
//         onClick={onLogoClick}
//         className="text-white font-bold text-2xl tracking-wider hover:scale-105 transition-transform"
//       >
//         <img src={logoImg} alt="rep logo" />
//       </button>
//       {/* Logo2 - يمين */}
//       <img
//         src={headerLogo}
//         alt="logo header"
//         className="block md:block lg:hidden xl:hidden"
//         style={{ width: 48, height: 48 }}
//       />
//     </header>
//   );
// };

// export default Header;
import logoImg from "/assets/logo.png";
import headerLogo from "/assets/headerlogo.png";

const Header = ({ onLogoClick, onBurgerClick, viewMode }) => {
  return (
    <header className="flex justify-between items-center px-4 py-6 sm:px-6 lg:justify-center lg:gap-8">
      <img
        src={headerLogo}
        alt="logo header"
        className="block lg:hidden h-8 sm:h-10"
      />
      <button
        onClick={onLogoClick}
        className="text-white font-bold text-2xl tracking-wider hover:scale-105 transition-transform"
        aria-label="Reset to default view"
      >
        <img src={logoImg} alt="rep logo" className="h-8 sm:h-10" />
      </button>

      <button
        className="block lg:hidden"
        onClick={onBurgerClick}
        aria-label={viewMode === "tabs" ? "Close menu" : "Open menu"}
      >
        <svg width="2rem" height="2rem" fill="white" viewBox="0 0 24 24">
          <rect y="4" width="24" height="3" rx="1.5" />
          <rect y="10.5" width="24" height="3" rx="1.5" />
          <rect y="17" width="24" height="3" rx="1.5" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
