import logoImg from "../assets/vdfdf 1.png";
const Header = ({ onLogoClick }) => {
  return (
    <header className="flex justify-center pt-8 pb-4">
      <button
        onClick={onLogoClick}
        className="text-white font-bold text-2xl tracking-wider hover:scale-105 transition-transform"
      >
        <img src={logoImg}/>
      </button>
    </header>
  );
};

export default Header;
