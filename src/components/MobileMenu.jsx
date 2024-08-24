import closeBtn from '../assets/close-black.png';

const MobileMenu = ({ toggleMenu, isMenuOpen }) => {
  return (
    <ul
      className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 w-64 z-50 h-screen bg-rose-50 shadow-lg transition-transform duration-500 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="absolute right-6 top-6">
        <img
          src={closeBtn}
          alt="Close"
          className="w-6 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <li>
        <a href="#home" onClick={toggleMenu}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" onClick={toggleMenu}>
          About us
        </a>
      </li>
      <li>
        <a href="#services" onClick={toggleMenu}>
          Services
        </a>
      </li>
      <li>
        <a href="#mywork" onClick={toggleMenu}>
          My Work
        </a>
      </li>
      <li>
        <a href="#contact" onClick={toggleMenu}>
          Contact us
        </a>
      </li>
    </ul>
  );
};

export default MobileMenu;
