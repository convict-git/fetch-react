import React from 'react';

import { Handle, User } from '../types/codeforces-types';

const CacheContext = React.createContext(null);

interface CacheType {
  [key: Handle]: User | undefined;
}

const CacheProvider = (props: any) => {
  const cacheData = React.useRef<CacheType>({});
  const addUser = (handle: Handle, info: User) => {
    cacheData.current[handle] = info;
  };

  return <CacheContext.Provider value={[cacheData, addUser]} {...props} />;
};

const useCache = () => {
  const context = React.useContext(CacheContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export { CacheProvider, useCache };
export type { CacheType };
