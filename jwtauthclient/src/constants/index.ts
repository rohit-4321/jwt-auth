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
  mailformat: /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/
};
