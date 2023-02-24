import  * as express   from "express";
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import { CORS_OPTIONS } from './config';

dotenv.config()

const app = express();

app.use(cors(CORS_OPTIONS));

app.use(express.json());

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log(`Can't connect to DB`);
    console.log(err);
  })


app.get('/', (req, res) => {
  
  res.send({
    data: 'some data from the server'
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening ay http://localhost: ${process.env.PORT}.`);
});
