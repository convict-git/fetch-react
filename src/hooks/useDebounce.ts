import React from 'react';

export const useDebounce = <InputType>(
  input: InputType,
  initValue: InputType
) => {
  const [output, setOutput] = React.useState<InputType>(initValue);

  React.useEffect(() => {
    const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
      setOutput(input);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [input]);

  return output;
};
