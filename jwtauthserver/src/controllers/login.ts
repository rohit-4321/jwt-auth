import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { UserModel } from '../schema/User';

export const LogInController = (req: Request, res: Response) => {
  const {email, password} = req.body;
  if (!email) {
    return res.status(400)
      .send({
        errMsg: 'required email'
      })
  }
  if(!password) {
    return res.status(400)
      .send({
        errMsg: 'required password'
      })
  }
  UserModel.findOne({email})
    .then((user) => {
      if(!user){
        res.status(400)
        .send({
          errMsg: 'user not found'
        })
        return;
      }
      if(user.validatePassword(password)){
        const tok = sign({email, password, id: user._id}, process.env.JWT_KEY);
        res.status(200).send({
          email: user.email,
          id: user._id,
          token: tok
        })
        return;
      } else {
        res.status(400)
        .send({
          errMsg: 'wrong password'
        })
      }
    })
    .catch((err)=> {
      res.status(500)
      .send({
        errMsg: 'server error',
        ...err
      })
    })
}