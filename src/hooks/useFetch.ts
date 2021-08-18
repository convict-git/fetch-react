import React from 'react';
import { FetchReturn } from '../types/fetchReturn';

export function useFetch<InputType, RetType>(
  input: InputType,
  fetchMethod: (_: InputType) => Promise<RetType>,
  cachedValue?: RetType
): FetchReturn<RetType> {
  const [state, setState] = React.useState<FetchReturn<RetType>>({
    data: null,
    status: 'fetching',
    error: null,
  });

  React.useEffect(() => {
    console.log('Called useFetch fetch');
    let denied = false;

    if (!denied) {
      if (cachedValue !== null && typeof cachedValue !== 'undefined') {
        console.log(`Used cached value for ${input}`);
        setState({
          data: cachedValue,
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
  }, [input]);
  return state;
}
