// import logoImg from "/assets/vdfdf 1.png";
// import { RiMenu3Fill } from "react-icons/ri";
// import headerImage from "/assets/headerlogo.png";

// const Header = ({ onLogoClick }) => {
//   return (
//     <div className="flex items-center justify-end xl:justify-between mb-4">
//       <img src={headerImage} alt="headerlogo" className="xl:hidden"/>
//       <header className="flex xl:justify-center pt-8 pb-4">
//         <button
//           onClick={onLogoClick}
//           className="text-white font-bold text-2xl tracking-wider hover:scale-105 transition-transform"
//         >
//           <img src={logoImg} />
//         </button>
//       </header>
//       <RiMenu3Fill className="xl:hidden"/>
//     </div>
//   );
// };

// export default Header;
import logoImg from "/assets/vdfdf 1.png";
import { RiMenu3Fill } from "react-icons/ri";
import headerImage from "/assets/headerlogo.png";

const Header = ({ onLogoClick, onMenuClick}) => {
  return (
    <div className="flex items-center justify-between mb-4 w-full">
      {/* Show headerImage only on mobile and md */}
      <img src={headerImage} alt="headerlogo" className="block xl:hidden h-10" />

      {/* Logo always visible */}
      <header className="flex justify-center pt-8 pb-4 flex-1">
        <button
          onClick={onLogoClick}
          className="text-white font-bold text-2xl tracking-wider hover:scale-105 transition-transform"
        >
          <img src={logoImg} alt="logo" className="h-10" />
        </button>
      </header>

      {/* Menu icon only on mobile and md */}
      <button
        className="block xl:hidden p-2"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <RiMenu3Fill size={28} className="bg-white text-orange-900" />
      </button>
    </div>
  );
};

export default Header;
