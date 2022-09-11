import React from 'react';
import Spinner from 'src/components/Spinner';
import HeaderMenu from '../HeaderMenu';

import Web3Context from 'src/context/web3';
import Sidebar from './Sidebar';
import Particles from 'react-tsparticles';
import { particleOptions } from 'src/constants';

type ApplicationLayoutProps = {
  isLoading?: boolean;
  children?: React.ReactNode;
};

const ApplicationLayout = ({ isLoading = false, children }: ApplicationLayoutProps) => {
  const { account, requestWeb3 } = React.useContext(Web3Context);
  const onConnectButtonClick = () => {
    if (!account) {
      requestWeb3();
    }
  };
  const renderConnectButton = () => {
    const trimAddress = (address: string) => {
      return address.substring(0, 8) + '...' + address.substring(address.length - 3);
    };
    return (
      <div className="navbar mt-5 bg-base-100">
        <div className="navbar-end flex-1">
          <button className="btn btn-outline btn-accent mr-5" onClick={onConnectButtonClick}>
            <span className="px-5 text-white">{account ? trimAddress(account) : 'Connect'}</span>
          </button>
        </div>
      </div>
    );
  };
  const className = 'drawer-mobile drawer';
  return (
    <Spinner isFullScreen isLoading={isLoading}>
      <div data-theme="dgzNftTheme" className={className}>
        <input id="application-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <HeaderMenu />
          {renderConnectButton()}
          <div className="container mx-auto  p-4">{children}</div>
        </div>
        <Sidebar />
      </div>
      <Particles options={particleOptions} />
    </Spinner>
  );
};

export default ApplicationLayout;
