import { Stack, Typography } from '@mui/material';
import { initalAuthCredentials } from '../../constants';
import { AuthButton, AuthPage, ForgotPasswordStyled, StyledBottomLinkAuth } from '../../components/auth/auth.style';
import { AuthContainer } from '../../components/auth';
import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { atom } from 'jotai';
import { useAtom, useAtomValue } from 'jotai/react';
import { verifyEmail, verifyPassword } from '../../helpers';
import { PassWordTextField } from '../../components/auth/PassWordTextField';
import { EmailTextField } from '../../components/auth/EmailTextField';

const emailAtom = atom<string>(initalAuthCredentials.email);
const passWordAtom = atom<string>(initalAuthCredentials.password);
const logInCredentialAtom = atom((get) => ({
  email: get(emailAtom),
  password: get(passWordAtom)
}));
const updateLogInCredAtom = atom(null, (get, set, action: { email: string, password: string }) => {
  set(emailAtom, action.email);
  set(passWordAtom, action.password);
});

const LogInButton = () => {
  const logInCred = useAtomValue(logInCredentialAtom);
  const handleClick = () => {
    if (verifyEmail(logInCred.email) !== 'VALID') {
      console.log('InValid Email');
    }
    if (verifyPassword(logInCred.password) !== 'VALID') {
      console.log(verifyPassword(logInCred.password));
    }
  };
  return (
    <AuthButton sx={{ marginTop: '13px' }} variant="contained" onClick={() => { handleClick(); }}>
      Login
    </AuthButton>
  );
};
export const LogIn: FC = () => {
  const [, updateLogCred] = useAtom(updateLogInCredAtom);
  useEffect(() => {
    return () => {
      updateLogCred({
        email: '',
        password: ''
      });
    };
  });
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
           LOG IN
        </Typography>

        <EmailTextField emailAtom={emailAtom} />

        <PassWordTextField passWordAtom={passWordAtom} />

        <ForgotPasswordStyled>Forgot password?</ForgotPasswordStyled>

        <LogInButton />

        <StyledBottomLinkAuth
          onClick={
            () => {
              console.log('Clicked');
            }
          }>
          <Link to='/signup'>Sign Up</Link>
        </StyledBottomLinkAuth>
      </Stack>
    </AuthContainer>
  </AuthPage>;
};

export default LogIn;
