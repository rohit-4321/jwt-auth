import { Stack } from '@mui/material';
import { initalAuthCredentials } from '../../constants';
import { AuthButton, AuthPage, ForgotPasswordStyled, StyledAuthTextField } from './auth.style';
import { AuthContainer } from './authContainer';
import { useAuthCredentials } from './useAuthCredentials';

export const SignUp = () => {
  const [logInData, setLoginData] = useAuthCredentials(initalAuthCredentials);
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
      </Stack>
    </AuthContainer>
  </AuthPage>;
};

export default SignUp;
