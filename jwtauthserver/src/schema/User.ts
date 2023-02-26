import mongoose, { Schema } from "mongoose";
import {v4 as uuidv4} from 'uuid';

const validateEmail = (email: string) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regExp.test(email);
}
const userSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  email: {
    type: String,
    required: [true, 'email required'],
    validate: [validateEmail, 'Enter Valid E-mail']
  },
  password: {
    type: String,
    required: [true, 'password required'],
    minLength: [6, 'Password must have atleast 6 Chrecter'],
    max: 255
  },
  first_name: String,
  last_name: String
},
{
  methods: {
    validatePassword(candidatePassword) {
      return (this.password === candidatePassword)
    }
  }
});

export const UserModel = mongoose.model('User', userSchema);
