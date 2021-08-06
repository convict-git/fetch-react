import React from 'react';
import { useDebounce } from '../../hooks/useDebounce';

const InputBar = ({
  onChangeHandler,
}: {
  onChangeHandler: (_: string) => void;
}) => {
  const [input, setInput] = React.useState<string>('');
  const output = useDebounce(input);

  React.useEffect(() => {
    onChangeHandler(output);
  }, [output, onChangeHandler]);
  return (
    <>
      <fieldset>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      </fieldset>
    </>
  );
};

export default InputBar;
