import React from 'react';
import cn from 'classnames';
import { IoChevronBackOutline } from 'react-icons/io5';
import Spinner from '../Spinner';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import { particleOptions, ROUTES } from 'src/constants';
import Particles from 'react-tsparticles';
import Footer from './Footer';

type PageDetailsLayoutProps = {
  isLoading?: boolean;
  children?: React.ReactNode;
  hasContainer?: boolean;
  backUri?: string;
};

const PageDetailsLayout = ({ isLoading = false, backUri, hasContainer, children }: PageDetailsLayoutProps) => {
  const navigate = useNavigate();

  const pageClass = cn({
    container: hasContainer,
  });

  const onBackButtonClick = () => {
    if (!backUri) {
      return;
    }
    navigate(backUri);
  };

  return (
    <Spinner isFullScreen isLoading={isLoading}>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-main pt-5 lg:pt-20">
        <div className="navbar fixed top-0 z-50 h-[40px] min-h-[40px] border-b-[1px] border-b-dgz-border bg-blue-100 lg:h-[77px]  lg:min-h-[77px] lg:px-28">
          {backUri && (
            <div className="navbar-start">
              <Button isGhost className="lg:text-xl" onClick={onBackButtonClick}>
                <IoChevronBackOutline className="mr-1 lg:mr-2" />
                Back
              </Button>
            </div>
          )}
          <div className="navbar-center">
            <Link to={ROUTES.APP.path} className="h-[40px] lg:h-[64px]">
              <div className="h-full w-[210px] bg-nav-logo bg-contain bg-center bg-no-repeat lg:mr-12" />
            </Link>
          </div>
          <div className="navbar-end" />
        </div>
        <div className={cn('relative z-10 mx-auto flex-1 px-5 pt-[50px] pb-20 lg:px-0', pageClass)}>
          <div className="min-h-[550px]">{children}</div>
          <div className="mt-20 flex w-full items-center justify-center">
            <div className="h-[200px] w-[400px] bg-dgz-car bg-contain bg-center bg-no-repeat lg:h-[691px] lg:w-[100%]" />
          </div>
        </div>
        <Footer />
        <Particles options={particleOptions} />
      </div>
    </Spinner>
  );
};

export default PageDetailsLayout;
