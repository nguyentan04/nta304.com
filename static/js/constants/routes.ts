type RouteKey =
  // | 'HOME'
  | 'STAKING'
  | 'APP'
  | 'APP_STAKING'
  | 'APP_MARKETPLACE'
  | 'APP_LAUNCHPAD'
  | 'APP_FARMING'
  | 'APP_BET'
  | 'APP_PARTNERSHIP';

export type Route = {
  [key in RouteKey]: {
    path: string;
    name: string;
    title?: string;
    showOnNavBar?: boolean;
  };
};

export const ROUTES: Route = {
  // HOME: {
  //   path: '/',
  //   name: 'Home',
  //   showOnNavBar: false,
  // },

  STAKING: {
    path: '/staking/dgz',
    name: 'Staking',
    showOnNavBar: true,
  },
  APP: {
    path: '/',
    name: 'Home',
    showOnNavBar: false,
  },
  APP_MARKETPLACE: {
    path: '/marketplace',
    name: 'Marketplace',
    showOnNavBar: false,
  },
  APP_LAUNCHPAD: {
    path: '/launchpad',
    name: 'Launchpad',
    showOnNavBar: false,
  },
  APP_FARMING: {
    path: '/farming',
    name: 'Farming',
    showOnNavBar: false,
  },
  APP_BET: {
    path: '/bet',
    name: 'Bet',
    showOnNavBar: false,
  },
  APP_STAKING: {
    path: '/staking/nft',
    name: 'Staking',
    showOnNavBar: false,
  },
  APP_PARTNERSHIP: {
    path: '/partners',
    name: 'Partnership',
    showOnNavBar: false,
  },
};

export const HOME_SECTIONS = {
  '#products': 'Products',
  '#roadmap': 'Roadmap',
  '#tokenomics': 'Tokenomics',
};
