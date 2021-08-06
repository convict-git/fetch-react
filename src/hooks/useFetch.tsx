import React from 'react';
import { FetchReturn } from '../types/FetchReturn';

export function useFetch<InputType, RetType>(
  input: InputType,
  fetchMethod: (_: InputType) => Promise<RetType>
) {
  const [state, setState] = React.useState<FetchReturn<RetType>>({
    data: null,
    status: 'fetching',
    error: null,
  });

  React.useEffect(() => {
    console.log('Called useFetch fetch');
    let denied = false;
    if (!denied) {
      setState({
        ...state,
        status: 'fetching',
        error: null,
      });
    }

    fetchMethod(input)
      .then((value: RetType) => {
        if (!denied) {
          setState({
            ...state,
            data: value,
            status: 'ok',
            error: null,
          });
        }
      })
      .catch((e: string) => {
        if (!denied) {
          setState({
            ...state,
            data: null,
            status: 'ok',
            error: `Error caught: ${e}`,
          });
        }
      });
    return () => {
      denied = true;
    };
  }, [input]);
  return state;
}
