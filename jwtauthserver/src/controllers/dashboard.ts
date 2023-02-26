import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { UserModel } from '../schema/User';

export const DashboardController = (req: Request, res: Response) => {
  const {email} = req.body;
  res.status(200).send({
    msg: `Welcome Buddy. you email ${email}`,
  })

}