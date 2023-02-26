import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { UserModel } from '../schema/User';
export const SignUpController = async (req:Request, res: Response) => {
  const payload =req.body;
  const user = new UserModel(payload);
  user.save()
    .then((user) => {
      if(user){
        const tok = sign({...payload, id: user._id}, process.env.JWT_KEY,{expiresIn: '40s'});
        return res.status(200).send({
          ...payload,
          token: tok
        })
      } else {
        res.status(500).send({
          errMsg: 'cannot save the user'
        })
      }
    })
    .catch((err) => {
      res.status(400).send({
        ...err,
      })
    })
}