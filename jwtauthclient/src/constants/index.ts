import { ILoginCredentials } from '../containers/LogIn/login.interface';

export const initalAuthCredentials: ILoginCredentials = {
  email: '',
  password: ''
};

export const REG_EXP = {
  upperCaseReg: /[A-Z]/,
  lowerCaseReg: /[a-z]/,
  numReg: /[0-9]/,
  nonAlphaNumReg: /[^A-Za-z0-9]/,
  mailformat: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};
