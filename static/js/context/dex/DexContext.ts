import * as React from 'react';

type DexContext = {
  getApr: (smartChefContract: string) => number;
};

const initialState: DexContext = {
  getApr: () => {
    return 0;
  },
};

export default React.createContext<DexContext>(initialState);
