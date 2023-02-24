import { useAtom } from 'jotai';
import React, { FC } from 'react';
import { AtomType } from '../../constants';
import { StyledAuthTextField } from './auth.style';

interface IEmailTextField {
  emailAtom: AtomType<string>
}

export const EmailTextField: FC<IEmailTextField> = ({
  emailAtom
}) => {
  const [email, setEmail] = useAtom(emailAtom);
  return <StyledAuthTextField
    defaultValue={email}
    placeholder="Email"
    onChange={
      (e) => {
        setEmail(e.target.value);
      }
    }
  />;
};
