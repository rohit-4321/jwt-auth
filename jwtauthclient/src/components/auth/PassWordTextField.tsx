import { useAtom } from 'jotai';
import React, { FC } from 'react';
import { AtomType } from '../../constants';
import { StyledAuthTextField } from './auth.style';

interface IPassWordTextField {
  passWordAtom: AtomType<string>
}
export const PassWordTextField: FC<IPassWordTextField> = ({
  passWordAtom
}) => {
  const [password, setPassword] = useAtom(passWordAtom);
  return <StyledAuthTextField
    defaultValue={password}
    placeholder="Password"
    onChange={
      (e) => {
        setPassword(e.target.value);
      }
    }
  />;
};
