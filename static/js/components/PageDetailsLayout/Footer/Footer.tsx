import MediumIcon from 'src/assets/common/medium-icon.png';
import TwitterIcon from 'src/assets/common/twitter-icon.png';
import TelegramIcon from 'src/assets/common/telegram-icon.png';
import LinkMenu from './LinkMenu';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/constants';

const Footer = () => {
  return (
    <div className="flex bg-blue-200 px-5 pb-5 lg:block lg:px-28 lg:pb-0">
      <div className="flex h-auto w-1/2 flex-wrap items-center justify-between lg:container lg:mx-auto lg:h-[141px] lg:w-full lg:flex-nowrap">
        <div className="block h-[80px] w-full lg:hidden">
          <div className="mr-12 h-full w-[180px] bg-nav-logo bg-contain bg-center bg-no-repeat" />
        </div>
        <div className="w-[120px] lg:w-[200px]">
          <div className="grid grid-cols-3 gap-3">
            <a href="https://t.me/dogezonechannel" target="_blank" rel="noreferrer">
              <img src={TelegramIcon} className="h-[32px] w-[32px] lg:h-[52px] lg:w-[52px]" />
            </a>
            <a href="https://twitter.com/dogezoneio" target="_blank" rel="noreferrer">
              <img src={TwitterIcon} className="h-[32px] w-[32px] lg:h-[52px] lg:w-[52px]" />
            </a>
            <a href="https://t.me/dogezoneio" target="_blank" rel="noreferrer">
              <img src={MediumIcon} className="h-[32px] w-[32px] lg:h-[52px] lg:w-[52px]" />
            </a>
          </div>
        </div>
        <div className="flex-5 hidden lg:flex">
          <LinkMenu />
        </div>
        <div className="hidden h-[80px] w-[200px] lg:block">
          <Link to={ROUTES.APP.path}>
            <div className="mr-12 h-full w-[210px] bg-nav-logo bg-contain bg-center bg-no-repeat" />
          </Link>
        </div>
      </div>
      <div className="mt-5 flex w-1/2 justify-end lg:hidden">
        <LinkMenu />
      </div>
    </div>
  );
};

export default Footer;
