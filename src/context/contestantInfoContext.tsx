import React from 'react';

const ContestantInfoContext = React.createContext(null);

const contestantInfoCacheReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CONTESTANT_INFO': {
      return { ...state, [action.handle]: action.data };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const ContestantInfoCacheProvider = (props: any) => {
  const [cache, dispatch] = React.useReducer(contestantInfoCacheReducer, {});
  return (
    <ContestantInfoContext.Provider value={[cache, dispatch]} {...props} />
  );
};

export const useContestantInfoCache = () => {
  const context = React.useContext(ContestantInfoContext);
  if (!context) {
    throw new Error(
      'useContestantInfoCache must be used within a ContestantInfoContext provider'
    );
  }
  return context;
};
