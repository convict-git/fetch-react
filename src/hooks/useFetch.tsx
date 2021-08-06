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
    let denied = false;
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
    return () => {
      denied = true;
    };
  }, [input, fetchMethod]);
  return state;
}
