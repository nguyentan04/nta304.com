import { Route, Routes, useLocation } from 'react-router-dom';
import loadable from '@loadable/component';
import { ROUTES } from 'src/constants';
import { PageLoading } from 'src/components';

// const Home = loadable(() => import('src/pages/Home'), {
//   fallback: <PageLoading />,
// });

const Staking = loadable(() => import('src/pages/Staking'), {
  fallback: <PageLoading />,
});

const Application = loadable(() => import('src/pages/App'), {
  fallback: <PageLoading />,
});

const ApplicationStaking = loadable(() => import('src/pages/AppStaking'), {
  fallback: <PageLoading />,
});

const ApplicationMarketplace = loadable(() => import('src/pages/AppMarketplace'), {
  fallback: <PageLoading />,
});

const ApplicationLaunchpad = loadable(() => import('src/pages/AppLaunchpad'), {
  fallback: <PageLoading />,
});

const ApplicationFarming = loadable(() => import('src/pages/AppFarming'), {
  fallback: <PageLoading />,
});

const ApplicationBet = loadable(() => import('src/pages/AppBet'), {
  fallback: <PageLoading />,
});

const ApplicationPartnership = loadable(() => import('src/pages/AppPartnership'), {
  fallback: <PageLoading />,
});

const { STAKING, APP, APP_STAKING, APP_BET, APP_FARMING, APP_LAUNCHPAD, APP_MARKETPLACE, APP_PARTNERSHIP } = ROUTES;

const Routers = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      {/* <Route path={HOME.path} element={<Home />} /> */}
      {/* <Route path={ICO.path} element={<Ico />} /> */}
      <Route path={STAKING.path} element={<Staking />} />
      <Route path={APP.path} element={<Application />} />
      <Route path={APP_STAKING.path} element={<ApplicationStaking />} />
      <Route path={APP_MARKETPLACE.path} element={<ApplicationMarketplace />} />
      <Route path={APP_LAUNCHPAD.path} element={<ApplicationLaunchpad />} />
      <Route path={APP_FARMING.path} element={<ApplicationFarming />} />
      <Route path={APP_BET.path} element={<ApplicationBet />} />
      <Route path={APP_PARTNERSHIP.path} element={<ApplicationPartnership />} />
    </Routes>
  );
};

export default Routers;
