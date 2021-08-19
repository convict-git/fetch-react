import React from 'react';

const CacheContext = React.createContext(null);

interface CacheType<ValueType> {
  [key: string]: ValueType | undefined;
}

const CacheProvider = <ValueType,>(props: any) => {
  const cacheData = React.useRef<CacheType<ValueType>>({});
  const updateCache = (key: string, value: ValueType) => {
    cacheData.current[key] = value;
  };

  return <CacheContext.Provider value={[cacheData, updateCache]} {...props} />;
};

const useCache = () => {
  const context = React.useContext(CacheContext);
  if (!context) {
    throw new Error('useCache must be used within CacheProvider');
  }
  return context;
};

export { CacheProvider, useCache };
export type { CacheType };
