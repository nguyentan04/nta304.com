import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/constants';
import ImageButton from 'src/components/ImageButton';

import ApplicationLayout from 'src/components/Application/ApplicationLayout';
import BlockContent from 'src/components/Application/ApplicationBlock';
import BackgroundHome from 'src/assets/common/background-home.png';
import BackgroundHome3 from 'src/assets/common/background-home-3.png';

import Rocket from 'src/assets/common/rocket.png';
import RightArrow from 'src/assets/common/right-arrow.png';
import NewIcon from 'src/assets/common/New.png';

const Application = () => {
  return (
    <ApplicationLayout>
      <div className="mb-16 flex flex-col-reverse md:flex-row">
        <BlockContent
          title="DogeZone Ecosystem"
          description="DogeZone supports users to access various services in the Dogecoin/meme ecosystem. Our mission is to allow communities to bootstrap new, decentralized metaverses."
          textButton="Read more"
          className="ml-24 flex-shrink-0 md:w-1/4"
          onClick={() => window.open('https://docs.dogezone.io/intro')}
        />
        <div className="relative flex-1">
          <img src={BackgroundHome} alt="" className="h-full w-full object-fill" />
        </div>
      </div>
      <div className="mb-0 bg-background-home-2 bg-contain bg-no-repeat xl:mb-16">
        <div className="m-auto w-2/3 pt-[15%] pb-[49%]">
          <BlockContent
            title="Decentralized finance"
            description="DogeZone is an one-stop decentralized platform that holders are able to benefit from staking $DGZ, Farming LPs, lock tokens to earn NFTs."
            textButton="Read more"
            className="max-w-[450px]"
            link={ROUTES.APP_FARMING.path}
          />
        </div>
      </div>
      <div className="relative flex h-[324px] w-full items-center">
        <img
          src={Rocket}
          alt=""
          className="sm:opacity-1 absolute top-1/2 h-[120px] w-[120px] -translate-y-1/2 sm:h-[161px] sm:w-[161px] xl:top-[100px] xl:h-full xl:w-[324px]"
        />
        <div className="flex h-[150px] w-full items-center rounded-md border border-white bg-app-bg-green">
          <div className="ml-auto flex w-4/5 flex-col items-start justify-between xl:flex-row xl:items-center">
            <p className="mb-8 ml-4 text-sm xl:mb-0 xl:ml-0 xl:text-xl">
              Join staking $DGZ to earn Genesis NFTs and govern the broader DogeZone ecosystem.
            </p>
            <div className="mx-4 flex items-center gap-4 xl:ml-0">
              <Link to={ROUTES.APP_STAKING.path} className="self-center">
                <span className="text-sm font-bold xl:text-xl">Stake now</span>
              </Link>
              <Link to={ROUTES.APP_STAKING.path} className="flex-shrink-0">
                <img src={RightArrow} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-16 flex w-full flex-col items-center">
        <BlockContent
          title="NFT DogeZone"
          description="We are building a Metaverse of Doge and NFTs, in which owners of DogeZone Genesis NFTs get rewarded for holding $DGZ"
          textButton="Marketplace"
          className="ml-24 mb-16 flex-shrink-0 self-end pt-0 xl:pt-24"
          link={ROUTES.APP_MARKETPLACE.path}
        />
        <div className="m-auto w-3/4">
          <img src={BackgroundHome3} alt="" className="h-full w-full object-fill" />
        </div>
      </div>
      <div className="mb-16 flex justify-start bg-background-home-4 bg-cover bg-center">
        <div className="m-auto flex w-2/3 py-[7%]">
          <BlockContent
            title="Daily BTC Price Prediction"
            description="Bitcoin Price Prediction Game allows you to practice in predicting short term movements of BTC prices. Buy a ticket to join and win big prizes daily."
            textButton="Join now"
            className="max-w-[450px]"
            link={ROUTES.APP_BET.path}
          />
        </div>
      </div>
      <div className="mb-16 flex items-center justify-center text-sm font-semibold  xl:mb-0 xl:text-2xl">
        <p>Join DogeZone minigame and win VIP Rewards</p>
        <img src={NewIcon} alt="" />
      </div>
      <div className="flex justify-center bg-background-home-5 bg-contain bg-no-repeat">
        <div className="mt-[100%]">
          <Link to={ROUTES.APP_BET.path}>
            <ImageButton variant="primary" text="Play now" className="xl:h-[146px] xl:w-[400px] xl:text-3xl" />
          </Link>
        </div>
      </div>
    </ApplicationLayout>
  );
};

export default Application;
