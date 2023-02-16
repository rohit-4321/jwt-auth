import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { initalAuthCredentials } from '../../constants';
import { useCustomState } from '../../hooks/useCustomState';
import { AuthButton, AuthPage, StyledAuthTextField, StyledBottomLinkAuth } from '../../components/auth/auth.style';
import { AuthContainer } from '../../components/auth';

export const SignUp = () => {
  const [logInData, setLoginData] = useCustomState(initalAuthCredentials);
  const [confirmPass, setConfirmPass] = useState(initalAuthCredentials.password);
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
        <StyledAuthTextField
          defaultValue={logInData.email}
          placeholder="Email"
          onChange={
            (e) => {
              setLoginData({
                email: e.target.value
              });
            }
          }
        />
        <StyledAuthTextField
          defaultValue={logInData.password}
          placeholder="Password"
          onChange={
            (e) => {
              setLoginData({
                password: e.target.value
              });
            }
          }
        />
        <StyledAuthTextField
          defaultValue={confirmPass}
          placeholder="Confirm Password"
          onChange={
            (e) => {
              setConfirmPass(e.target.value);
            }
          }
        />
        <AuthButton sx={{ marginTop: '13px' }} variant="contained">
          SignUp
        </AuthButton>
        <StyledBottomLinkAuth
          onClick={
            () => {
              console.log('Clicked');
            }
          }>
           Sign Up
        </StyledBottomLinkAuth>
      </Stack>
    </AuthContainer>
  </AuthPage>;
};

export default SignUp;
