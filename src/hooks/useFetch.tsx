import React from 'react';
import { FetchReturn } from '../types/FetchReturn';

export const useFetch = <InputType, RetType>({
  input,
  fetchMethod,
}: {
  input: InputType;
  fetchMethod: (_: InputType) => Promise<RetType>;
}) => {
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
          setState((prevState) => {
            return {
              ...prevState,
              data: value,
              status: 'ok',
            };
          });
        }
      })
      .catch((e: string) => {
        if (!denied) {
          setState((prevState) => {
            return {
              ...prevState,
              status: 'ok',
              error: `Error caught: ${e}`,
            };
          });
        }
      });
    return () => {
      denied = true;
    };
  });
  return state;
};
