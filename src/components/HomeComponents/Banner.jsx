import { useTranslation } from 'react-i18next';
import { RiArrowDropDownLine } from 'react-icons/ri';
import video from '../../assets/home/banner.mp4';

function Banner() {
  const { t } = useTranslation();

  return (
    <div className="relative font-serif text-white">
      <div className="absolute inset-0 min-h-screen z-0">
        <video src={video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
        <div className="absolute inset-0 "></div>
      </div>

      {/* Top Bar */}
      <div className="relative z-10 py-3 px-6 flex justify-between items-center text-sm">
        <div><span>{t('address')}</span></div>
        <div className="flex space-x-8">
          <span>{t('tel')}</span>
          <span>{t('fax')}</span>
          <span>{t('email')}</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex justify-between items-center px-6 py-6">
        <nav className="flex space-x-4 text-sm">
          <div className="group relative flex cursor-pointer">
            <span className="uppercase font-light tracking-wider">{t('reserve')}</span>
            <span className="ml-1 pt-1"><RiArrowDropDownLine /></span>
          </div>
          <div className="group relative flex cursor-pointer">
            <span className="uppercase font-light tracking-wider">{t('us')}</span>
            <span className="ml-1 pt-1"><RiArrowDropDownLine /></span>
          </div>
          <div className="group relative flex cursor-pointer">
            <span className="uppercase font-light tracking-wider">{t('services')}</span>
            <span className="ml-1 pt-1"><RiArrowDropDownLine /></span>
          </div>
          <div className="group relative flex cursor-pointer">
            <span className="uppercase font-light tracking-wider">{t('rates')}</span>
            <span className="ml-1 pt-1"><RiArrowDropDownLine /></span>
          </div>
          <div className="cursor-pointer">
            <span className="uppercase font-light tracking-wider">{t('experiences')}</span>
          </div>
        </nav>

        {/* Right Navigation */}
        <div className="flex items-center space-x-4 text-sm">
          <div className="group relative flex cursor-pointer">
            <span className="uppercase font-light tracking-wider">{t('blog')}</span>
            <span className="ml-1 pt-1"><RiArrowDropDownLine /></span>
          </div>
          <button className="border border-white px-6 py-3 uppercase text-sm tracking-wider hover:bg-white hover:text-slate-800 transition duration-300">
            {t('contact')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
