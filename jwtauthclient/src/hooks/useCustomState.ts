import { useState } from 'react';

export const useCustomState = <P extends object>(initState: P) => {
  const [value, setValue] = useState(initState);
  const setRecordValue = <T extends keyof P>
    (record: { [key in T]: P[T] }) => {
    setValue({
      ...value,
      ...record
    });
  };
  return [value, setRecordValue] as const;
};
