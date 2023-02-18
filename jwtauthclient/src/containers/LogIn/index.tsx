import { Stack, Typography } from '@mui/material';
import { initalAuthCredentials } from '../../constants';
import { useCustomState } from '../../hooks/useCustomState';
import { AuthButton, AuthPage, ForgotPasswordStyled, StyledAuthTextField, StyledBottomLinkAuth } from '../../components/auth/auth.style';
import { AuthContainer } from '../../components/auth';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const LogIn: FC = () => {
  const [logInData, setLoginData] = useCustomState(initalAuthCredentials);
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
        <ForgotPasswordStyled>Forgot password?</ForgotPasswordStyled>
        <AuthButton sx={{ marginTop: '13px' }} variant="contained">
          Login
        </AuthButton>
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
