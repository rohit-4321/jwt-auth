import { useState } from 'react';
import { ILoginCredentials } from './auth.interface';

export const useAuthCredentials = (initState: ILoginCredentials) => {
  const [authCred, setValue] = useState(initState);
  const setAuthCred = <T extends keyof ILoginCredentials>
    (record: { [key in T]: ILoginCredentials[T] }) => {
    setValue({
      ...authCred,
      ...record
    });
  };
  return [authCred, setAuthCred] as const;
};
