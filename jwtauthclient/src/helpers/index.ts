import { EMAILVALIDATION, PASSWORDVALIDATION } from './helper.interfacace';
import { REG_EXP } from '../constants';

export const verifyEmail = (mail: string): EMAILVALIDATION => {
  if (REG_EXP.mailformat.test(mail)) {
    return 'VALID';
  } else {
    return 'INVALID';
  }
};

export const verifyPassword = (pass: string): PASSWORDVALIDATION => {
  if (pass.length < 8) {
    return 'SHORT';
  } else if (!REG_EXP.upperCaseReg.test(pass)) {
    return 'MISS_UPCASE';
  } else if (!REG_EXP.lowerCaseReg.test(pass)) {
    return 'MISS_LOWCASE';
  } else if (!REG_EXP.numReg.test(pass)) {
    return 'MISS_NUM';
  } else if (!REG_EXP.nonAlphaNumReg.test(pass)) {
    return 'MISS_SPECIAL';
  }
  return 'VALID';
};
