import profile from '../assets/profile-img.png';
import hand from '../assets/hand-icon.png';
import arrow from '../assets/right-arrow-white.png';
import download from '../assets/download-icon.png';

const Header = () => {
  return (
    <div className='w-full max-w-6xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-8 p-6 font-playfair'>
      <img 
        src={profile} 
        alt="profile" 
        className='rounded-full w-40 h-40 border-4 border-gradient-to-r from-[#b820e6] to-[#da7d20] shadow-xl transform transition-transform hover:scale-105' 
      />
      <h3 className='flex items-center gap-2 text-2xl md:text-3xl font-semibold mb-4'>
        Hi! I'm Zahid Rahi <img src={hand} alt="hand" className='w-8 animate-pulse' />
      </h3>
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
        MERN Stack Developer from Pakistan
      </h1>
      <p className='max-w-3xl mx-auto text-lg md:text-xl mt-4 mb-8 text-gray-700 dark:text-gray-300'>
        Passionate developer with experience in building scalable web applications using modern technologies. Let's create something amazing together!
      </p>
      <div className='flex flex-col md:flex-row gap-4'>
        <a 
          href="#contact" 
          className='inline-flex items-center px-8 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white font-semibold text-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl'
        >
          Contact Us <img src={arrow} alt="arrow" className='w-5 ml-2' />
        </a>
        <a 
          href="/resume" download
          className='inline-flex items-center px-8 py-3 border border-gray-500 rounded-full text-gray-800 font-semibold text-lg shadow-lg transition-transform duration-300 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700'
        >
          Resume <img src={download} alt="download" className='w-5 ml-2' />
        </a>
      </div>
    </div>
  );
};

export default Header;
