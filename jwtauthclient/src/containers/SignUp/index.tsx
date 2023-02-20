import React, { useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { initalAuthCredentials } from '../../constants';
import { useCustomState } from '../../hooks/useCustomState';
import { AuthButton, AuthPage, StyledAuthTextField, StyledBottomLinkAuth } from '../../components/auth/auth.style';
import { AuthContainer } from '../../components/auth';
import { Link } from 'react-router-dom';
import { atom } from 'jotai';
import { useAtom, useAtomValue } from 'jotai/react';
import api from '../../api';

const emailAtom = atom<string>(initalAuthCredentials.email);
const passWordAtom = atom<string>(initalAuthCredentials.password);
const confirmPasswordAtom = atom<string>(initalAuthCredentials.password);
const signUpCredentialAtom = atom((get) => ({
  email: get(emailAtom),
  password: get(passWordAtom),
  confirmPassword: get(confirmPasswordAtom)
}));
const updateSignUpCredAtom = atom(null, (get, set, action: { email: string, password: string, confirmPassword: string }) => {
  set(emailAtom, action.email);
  set(passWordAtom, action.password);
  set(confirmPasswordAtom, action.confirmPassword);
});

const EmailTextField = () => {
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
const PassWordTextField = () => {
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
const ConfirmPassWordTextField = () => {
  const [password, setPassword] = useAtom(confirmPasswordAtom);
  return <StyledAuthTextField
    defaultValue={password}
    placeholder="Confirm Password"
    onChange={
      (e) => {
        setPassword(e.target.value);
      }
    }
  />;
};
const SignUpButton = () => {
  const singInCred = useAtomValue(signUpCredentialAtom);

  return (
    <AuthButton sx={{ marginTop: '13px' }} variant="contained">
          SignUp
    </AuthButton>
  );
};
export const SignUp = () => {
  const [, updateSignInCred] = useAtom(updateSignUpCredAtom);
  useEffect(() => {
    api.get('/')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    return () => {
      updateSignInCred({
        email: '',
        password: '',
        confirmPassword: ''
      });
    };
  }, []);
  return <AuthPage>
    <AuthContainer>
      <Stack
        sx={{
          margin: '0px 24px',
          height: '100%',
          paddingTop: '30%'
        }}
        direction='column'
        gap={2}
      >
        <Typography variant="h3" component="h3" sx={{ color: 'white' }}>
           SIGN UP
        </Typography>

        <EmailTextField />

        <PassWordTextField />

        <ConfirmPassWordTextField />

        <SignUpButton />

        <StyledBottomLinkAuth
          onClick={
            () => {
              console.log('Clicked');
            }
          }>
          <Link to="/">Log In</Link>
        </StyledBottomLinkAuth>
      </Stack>
    </AuthContainer>
  </AuthPage>;
};

export default SignUp;
