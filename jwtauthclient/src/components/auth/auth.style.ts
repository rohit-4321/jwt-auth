import { Button, styled, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export const AuthPage = styled('div')`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
background-color: #1A1A1A;
`;
export const AuthContainerStyled = styled(Box)`
width: 400px;
height: 600px;
background-color: black;
border-radius: 8px;
`;
export const AuthButton = styled(Button)`
border-radius: 8px;
background-color: white;
color: black;
font-weight: 900;
&:hover {
  background-color: #D8D8D8;
}
`;

export const ForgotPasswordStyled = styled('span')`
color: green;

`;
export const StyledAuthTextField = styled(TextField)`
background-color: #212121;
border-radius: 8px;
width: auto;
& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
  border-color: white;
  border-radius: 8px;
  border-width: 1px;
}
& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
  padding-top: 12px;
  padding-bottom: 12px;
}
& input {
  color: white;
}
`;

export const StyledBottomLinkAuth = styled(Typography)`
color: blue;
margin: auto auto 10px auto;
cursor: pointer;
`;
