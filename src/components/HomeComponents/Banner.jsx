import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import video from '../../assets/home/banner.mp4';

function Banner() {
  const { t } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const navLinks = (
    <>
      {['reserve', 'us', 'services', 'rates'].map((item) => (
        <div key={item} className="group relative flex cursor-pointer">
          <span className="uppercase font-light tracking-wider">{t(item)}</span>
          <span className="ml-1 pt-1"><RiArrowDropDownLine /></span>
        </div>
      ))}
      <div className="cursor-pointer uppercase font-light tracking-wider">{t('experiences')}</div>
      <div className="group relative flex cursor-pointer">
        <span className="uppercase font-light tracking-wider">{t('blog')}</span>
        <span className="ml-1 pt-1"><RiArrowDropDownLine /></span>
      </div>
    </>
  );

  return (
    <div className="relative min-h-screen font-serif text-white">
      {/* Background Video */}
      <div className="absolute inset-0 min-h-screen z-0">
        <video
          src="https://collectionist.s3.eu-west-1.amazonaws.com/production/assets/homepage/2025/video-summer-2025-desktop-3.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-800/60" />
      </div>

      {/* Top Bar */}
      <div className="relative z-10 py-3 px-6 flex justify-between items-center text-sm">
        <div><span>{t('address')}</span></div>
        <div className="hidden md:flex space-x-8">
          <span>{t('tel')}</span>
          <span>{t('fax')}</span>
          <span>{t('email')}</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex justify-between items-center px-6 py-6">
        {/* Left: Hamburger (mobile) or Nav (desktop) */}
        <div className="flex items-center space-x-6">
          <button
            className="text-3xl text-white lg:hidden"
            onClick={toggleSidebar}
          >
            <RiMenu3Line />
          </button>

          <nav className="hidden lg:flex space-x-6 text-xl">
            {navLinks}
          </nav>
        </div>

        {/* Right: Contact Us Button (always visible) */}
        <div className="flex items-center">
          <button className="border border-white px-6 py-2 uppercase text-sm md:text-base lg:text-xl tracking-wider hover:bg-white hover:text-slate-800 transition duration-300">
            {t('contact')}
          </button>
        </div>
      </div>

      {/* Sidebar for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm">
          <div className="fixed top-0 left-0 w-72 h-full bg-slate-900 text-white p-6 shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-semibold">{t('menu')}</span>
              <button onClick={toggleSidebar} className="text-2xl">
                <RiCloseLine />
              </button>
            </div>
            <nav className="space-y-6 text-lg">
              {navLinks}
            </nav>
          </div>
        </div>
      )}

      {/* Center Logo */}
      <div className="relative z-10 flex flex-col items-center text-center h-[calc(100vh-120px)] px-4">
        <img
          src="assets/logo/logo.png"
          alt="Logo"
          className="w-64 md:w-96 lg:w-[650px] mb-6"
        />
      </div>
    </div>
  );
}

export default Banner;
