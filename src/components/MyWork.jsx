import webicon from '../assets/web-icon.png';
import rightarrow from '../assets/right-arrow-dark.png';

const MyWork = () => {
  return (
    <div
      id="work"
      className="w-full px-[12%] py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-20 font-playfair"
    >
      <h4 className="text-center text-lg text-gray-600 dark:text-gray-300 mb-2">
        My Portfolio
      </h4>
      <h2 className="text-center text-5xl font-bold text-gray-800 dark:text-white mb-8">
        My Latest Work
      </h2>
      <p className="text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-16">
        As a versatile web developer, I offer a range of services to help you
        establish and enhance your online presence. From intuitive web designs
        to robust backend solutions, I am here to cater to your digital needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
        {/* Web Design Service */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg cursor-pointer hover:bg-gradient-to-r from-indigo-100 to-purple-100 dark:hover:from-indigo-700 dark:hover:to-purple-700 hover:-translate-y-1 duration-300">
          <img src={webicon} alt="Web Design Icon" className="w-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Web Design
          </h3>
          <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
            Creating visually appealing and user-friendly web designs tailored to your brand's identity and goals.
          </p>
          <a href="#home" className="flex items-center gap-2 text-sm mt-4 text-indigo-600 dark:text-indigo-300">
            Read More <img src={rightarrow} alt="Arrow Icon" className="w-4" />
          </a>
        </div>

        {/* Additional example projects can be added here similarly */}

        {/* Mobile App Development */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg cursor-pointer hover:bg-gradient-to-r from-green-100 to-blue-100 dark:hover:from-green-700 dark:hover:to-blue-700 hover:-translate-y-1 duration-300">
          <img src={webicon} alt="Mobile App Development Icon" className="w-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Mobile App Development
          </h3>
          <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
            Developing responsive and engaging mobile applications that provide a seamless user experience across devices.
          </p>
          <a href="#home" className="flex items-center gap-2 text-sm mt-4 text-indigo-600 dark:text-indigo-300">
            Read More <img src={rightarrow} alt="Arrow Icon" className="w-4" />
          </a>
        </div>

        {/* UI/UX Design */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg cursor-pointer hover:bg-gradient-to-r from-yellow-100 to-orange-100 dark:hover:from-yellow-700 dark:hover:to-orange-700 hover:-translate-y-1 duration-300">
          <img src={webicon} alt="UI/UX Design Icon" className="w-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            UI/UX Design
          </h3>
          <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
            Enhancing website visibility and search engine ranking through effective SEO strategies tailored to your needs.
          </p>
          <a href="#home" className="flex items-center gap-2 text-sm mt-4 text-indigo-600 dark:text-indigo-300">
            Read More <img src={rightarrow} alt="Arrow Icon" className="w-4" />
          </a>
        </div>

        {/* Graphics Design */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg cursor-pointer hover:bg-gradient-to-r from-red-100 to-pink-100 dark:hover:from-red-700 dark:hover:to-pink-700 hover:-translate-y-1 duration-300">
          <img src={webicon} alt="Graphics Design Icon" className="w-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Graphics Design
          </h3>
          <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
            Building scalable and secure e-commerce platforms that enhance online shopping experiences and drive sales.
          </p>
          <a href="#home" className="flex items-center gap-2 text-sm mt-4 text-indigo-600 dark:text-indigo-300">
            Read More <img src={rightarrow} alt="Arrow Icon" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
