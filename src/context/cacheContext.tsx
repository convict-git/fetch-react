import React from 'react';

const CacheContext = React.createContext(null);

interface CacheType {
  [key: string]: string | undefined;
}

const CacheProvider = (props: any) => {
  const cacheData = React.useRef<CacheType>({});
  const stringifyHelper = (input: any): string => JSON.stringify(input);
  const updateCache = (input: any, value: any) => {
    cacheData.current[stringifyHelper(input)] = JSON.stringify(value);
  };
  const getCacheData = (input: any): any =>
    JSON.parse(cacheData.current[stringifyHelper(input)] || 'null');

  return (
    <CacheContext.Provider value={[getCacheData, updateCache]} {...props} />
  );
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
