import React from 'react';
import { FetchReturn } from '../types/fetchReturn';
import { useCache } from '../context/cacheContext';

export function useFetch<InputType, RetType>(
  input: InputType,
  fetchMethod: (_: InputType) => Promise<RetType>
): FetchReturn<RetType> {
  const [cacheData, updateCache] = useCache();
  const stringifiedInput = JSON.stringify(input);

  const [state, setState] = React.useState<FetchReturn<RetType>>({
    data: null,
    status: 'fetching',
    error: null,
  });

  React.useEffect(() => {
    console.log('Called useFetch fetch');
    let denied = false;

    if (!denied) {
      if (
        cacheData.current[stringifiedInput] !== null &&
        typeof cacheData.current[stringifiedInput] !== 'undefined'
      ) {
        console.log(`Used cached value for ${input}`);
        setState({
          data: cacheData.current[stringifiedInput],
          status: 'ok',
          error: null,
        });
      } else {
        setState({
          data: null,
          status: 'fetching',
          error: null,
        });
        fetchMethod(input)
          .then((value: RetType) => {
            if (!denied) {
              setState({
                data: value,
                status: 'ok',
                error: null,
              });

              updateCache(stringifiedInput, value);
            }
          })
          .catch((e: string) => {
            if (!denied) {
              setState({
                data: null,
                status: 'ok',
                error: `Error caught: ${e}`,
              });
            }
          });
      }
    }

    return () => {
      denied = true;
    };
  }, [input, cacheData, updateCache, stringifiedInput]);
  return state;
}
