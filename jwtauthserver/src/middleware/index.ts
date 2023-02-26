import { verify } from "jsonwebtoken";
import { Request, Response } from 'express';

export const auth = (req: Request, res: Response, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if(!token) {
    return res.status(401).send({
      success: false,
      errMsg: 'token missing'
    });
  }
  try {
    const decodeToken = verify(token, process.env.JWT_KEY);
    req.body = decodeToken;
    next();
  } catch(err) {
    if(err.name === 'TokenExpiredError'){
      return res.status(401).json({ errMsg: 'token expired' });
    } else {
      return res.status(401).json({ errMsg: 'invalid token' });
    }
  }
}