import React from 'react';

export const useLocalStorage = <DataType>(
  key: string,
  defaultValue: DataType | (() => DataType),
  serialise: any = JSON.stringify,
  deserialise: any = JSON.parse
) => {
  const [state, useState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialise(valueInLocalStorage);
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  const keyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = keyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    keyRef.current = key;
    window.localStorage.setItem(key, serialise(state));
  }, [key, serialise, state]);

  return [state, useState];
};
