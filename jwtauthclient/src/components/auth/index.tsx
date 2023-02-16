import React, { type FC } from 'react';
import { AuthContainerStyled } from './auth.style';

interface AuthContainerProps {
  children: React.ReactNode
}
export const AuthContainer: FC<AuthContainerProps> = ({
  children
}) => {
  return <AuthContainerStyled>{children}</AuthContainerStyled>;
};
