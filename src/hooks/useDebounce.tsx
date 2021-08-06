import React from 'react';

export const useDebounce = (input: string) => {
  const [output, setOutput] = React.useState<string>('');
  React.useEffect(() => {
    const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
      setOutput(input);
    }, 500);
    return () => clearTimeout(timeoutId);
  });
  return output;
};
