import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from 'src/constants';
import { ReactComponent as StakingIcon } from 'src/assets/app/staking-icon.svg';
import { ReactComponent as StakingIconActive } from 'src/assets/app/staking-icon-active.svg';
import { ReactComponent as BetIcon } from 'src/assets/app/bet-icon.svg';
import { ReactComponent as BetIconActive } from 'src/assets/app/bet-icon-active.svg';
import { ReactComponent as MarketplaceIcon } from 'src/assets/app/marketplace-icon.svg';
import { ReactComponent as LaunchpadIcon } from 'src/assets/app/launchpad-icon.svg';
import { ReactComponent as LaunchpadIconActive } from 'src/assets/app/launchpad-icon-active.svg';
import { ReactComponent as FarmingIcon } from 'src/assets/app/farming-icon.svg';
import { ReactComponent as FarmingIconActive } from 'src/assets/app/farming-icon-active.svg';
import { ReactComponent as HomeIcon } from 'src/assets/app/home-icon.svg';
import { ReactComponent as HomeIconActive } from 'src/assets/app/home-icon-active.svg';
import ImageButton from 'src/components/ImageButton';

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="drawer-side border-r-[1px] border-app-bg-search">
      <label htmlFor="application-drawer" className="drawer-overlay"></label>
      <ul className="w-48 overflow-y-auto bg-base-100 text-base-content">
        <li className="px-5 pb-9 pt-4">
          <Link to={ROUTES.APP.path} className="py-1">
            <div className="h-[40px] w-[110px] bg-nav-logo bg-contain bg-center bg-no-repeat lg:mr-8 lg:h-[42px] lg:w-[137px]" />
          </Link>
        </li>

        <li className="px-5 pb-9">
          <Link to={ROUTES.APP.path}>
            {pathname === ROUTES.APP.path ? (
              <ImageButton variant="primary" text="Home" leftIcon={<HomeIconActive />} />
            ) : (
              <div className="flex items-center">
                <HomeIcon className="mr-2 inline-block" />
                Home
              </div>
            )}
          </Link>
        </li>

        <li className="px-5 pb-9">
          <Link to={ROUTES.APP_MARKETPLACE.path}>
            {pathname === ROUTES.APP_MARKETPLACE.path ? (
              <ImageButton variant="primary" text="Marketplace" leftIcon={<MarketplaceIcon />} />
            ) : (
              <div className="flex items-center">
                <MarketplaceIcon className="mr-2 inline-block" />
                Marketplace
              </div>
            )}
          </Link>
        </li>

        <li className="px-5 pb-9">
          <Link to={ROUTES.APP_LAUNCHPAD.path}>
            {pathname === ROUTES.APP_LAUNCHPAD.path ? (
              <ImageButton variant="primary" text="Launchpad" leftIcon={<LaunchpadIconActive />} />
            ) : (
              <div className="flex items-center">
                <LaunchpadIcon className="mr-2 inline-block" />
                Launchpad
              </div>
            )}
          </Link>
        </li>

        <li className="px-5 pb-9">
          <Link to={ROUTES.STAKING.path}>
            {pathname === ROUTES.STAKING.path ? (
              <ImageButton variant="primary" text="Staking" leftIcon={<StakingIconActive />} />
            ) : (
              <div className="flex items-center">
                <StakingIcon className="mr-2 inline-block" />
                Staking DGZ
              </div>
            )}
          </Link>
        </li>

        <li className="px-5 pb-9">
          <Link to={ROUTES.APP_STAKING.path}>
            {pathname === ROUTES.APP_STAKING.path ? (
              <ImageButton variant="primary" text="Staking NFT" leftIcon={<StakingIconActive />} />
            ) : (
              <div className="flex items-center">
                <StakingIcon className="mr-2 inline-block" />
                Genesis NFTs
              </div>
            )}
          </Link>
        </li>

        <li className="px-5 pb-9">
          <Link to={ROUTES.APP_FARMING.path}>
            {pathname === ROUTES.APP_FARMING.path ? (
              <ImageButton variant="primary" text="Farming" leftIcon={<FarmingIconActive />} />
            ) : (
              <div className="flex items-center">
                <FarmingIcon className="mr-2 inline-block" />
                Farming
              </div>
            )}
          </Link>
        </li>

        <li className="px-5 pb-9">
          <Link to={ROUTES.APP_BET.path}>
            {pathname === ROUTES.APP_BET.path ? (
              <ImageButton variant="primary" text="BET" leftIcon={<BetIconActive />} />
            ) : (
              <div className="flex items-center">
                <BetIcon fill="white" className="mr-2 inline-block" />
                BET
              </div>
            )}
          </Link>
        </li>

        <li className="border-t-[0.5px] border-t-dgz-input px-5 pb-9 pt-9">
          <a href="https://docs.dogezone.io/intro" target="_blank" rel="noreferrer">
            <span>Introduction</span>
          </a>
        </li>
        <li className="px-5 pb-9">
          <a href="https://docs.dogezone.io/roadmap" target="_blank" rel="noreferrer">
            <span>Roadmap</span>
          </a>
        </li>
        <li className="px-5 pb-9">
          <a href="https://docs.dogezone.io/tokenomic" target="_blank" rel="noreferrer">
            <span>Tokenomics</span>
          </a>
        </li>
        <li className="px-5 pb-9">
          <Link to="/partners">Partnership</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
