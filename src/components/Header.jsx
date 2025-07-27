import logoImg from "/assets/logo.png";
import headerLogo from "/assets/headerlogo.png";

const Header = ({ onLogoClick, onBurgerClick}) => {
  return (
    <header className="flex justify-between items-center md:justify-between lg:justify-center xl:justify-center pt-8 px-2">
      {/* Burger menu - يظهر فقط في sm */}
      <button
        className="block md:block lg:hidden xl:hidden"
        onClick={onBurgerClick}
        aria-label="Open menu"
      >
        <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
          <rect y="4" width="24" height="3" rx="1.5" />
          <rect y="10.5" width="24" height="3" rx="1.5" />
          <rect y="17" width="24" height="3" rx="1.5" />
        </svg>
      </button>
      {/* Logo - وسط */}
      <button
        onClick={onLogoClick}
        className="text-white font-bold text-2xl tracking-wider hover:scale-105 transition-transform"
      >
        <img src={logoImg} alt="rep logo" />
      </button>
      {/* Logo2 - يمين */}
      <img
        src={headerLogo}
        alt="logo header"
        className="block md:block lg:hidden xl:hidden"
        style={{ width: 48, height: 48 }}
      />
    </header>
  );
};

export default Header;
