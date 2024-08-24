import webicon from '../assets/web-icon.png';
import mobileicon from '../assets/mobile-icon.png';
import uiux from '../assets/ui-icon.png';
import graphics from '../assets/graphics-icon.png';
import rightarrow from '../assets/right-arrow-bold.png';

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-20 font-playfair">
      <h4 className="text-center text-lg text-gray-600 dark:text-gray-300 mb-2">
        What I Offer
      </h4>
      <h2 className="text-center text-5xl font-bold text-gray-800 dark:text-white mb-8">
        My Services
      </h2>
      <p className='text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-16'>
        As a versatile web developer, I offer a range of services to help you establish and enhance your online presence. From intuitive web designs to robust backend solutions, I am here to cater to your digital needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
        {/* Web Design Service */}
        <div className='border border-gray-300 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg cursor-pointer hover:bg-gradient-to-r from-indigo-100 to-purple-100 dark:hover:from-indigo-700 dark:hover:to-purple-700 hover:-translate-y-1 duration-300'>
          <img src={webicon} alt="Web Design Icon" className='w-12 mb-4'/>
          <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100'>Web Design</h3>
          <p className='text-sm leading-6 text-gray-600 dark:text-gray-300'>
            Creating visually appealing and user-friendly web designs tailored to your brand's identity and goals.
          </p>
          <a href="#home" className='flex items-center gap-2 text-sm mt-4 text-indigo-600 dark:text-indigo-300'>
            Read More <img src={rightarrow} alt="Arrow Icon" className='w-4'/>
          </a>
        </div>

        {/* Mobile App Development Service */}
        <div className='border border-gray-300 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg cursor-pointer hover:bg-gradient-to-r from-green-100 to-blue-100 dark:hover:from-green-700 dark:hover:to-blue-700 hover:-translate-y-1 duration-300'>
          <img src={mobileicon} alt="Mobile App Development Icon" className='w-12 mb-4'/>
          <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100'>Mobile App Development</h3>
          <p className='text-sm leading-6 text-gray-600 dark:text-gray-300'>
            Developing responsive and engaging mobile applications that provide a seamless user experience across devices.
          </p>
          <a href="#home" className='flex items-center gap-2 text-sm mt-4 text-green-600 dark:text-green-300'>
            Read More <img src={rightarrow} alt="Arrow Icon" className='w-4'/>
          </a>
        </div>

        {/* UI/UX Design Service */}
        <div className='border border-gray-300 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg cursor-pointer hover:bg-gradient-to-r from-yellow-100 to-orange-100 dark:hover:from-yellow-700 dark:hover:to-orange-700 hover:-translate-y-1 duration-300'>
          <img src={uiux} alt="UI/UX Design Icon" className='w-12 mb-4'/>
          <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100'>UI/UX Design</h3>
          <p className='text-sm leading-6 text-gray-600 dark:text-gray-300'>
            Crafting intuitive user interfaces and engaging user experiences to enhance usability and satisfaction.
          </p>
          <a href="#home" className='flex items-center gap-2 text-sm mt-4 text-yellow-600 dark:text-yellow-300'>
            Read More <img src={rightarrow} alt="Arrow Icon" className='w-4'/>
          </a>
        </div>

        {/* Graphics Design Service */}
        <div className='border border-gray-300 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg cursor-pointer hover:bg-gradient-to-r from-pink-100 to-red-100 dark:hover:from-pink-700 dark:hover:to-red-700 hover:-translate-y-1 duration-300'>
          <img src={graphics} alt="Graphics Icon" className='w-12 mb-4'/>
          <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100'>Graphics Design</h3>
          <p className='text-sm leading-6 text-gray-600 dark:text-gray-300'>
            Delivering creative graphic design solutions that bring your visual ideas to life and communicate your brand effectively.
          </p>
          <a href="#home" className='flex items-center gap-2 text-sm mt-4 text-pink-600 dark:text-pink-300'>
            Read More <img src={rightarrow} alt="Arrow Icon" className='w-4'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
