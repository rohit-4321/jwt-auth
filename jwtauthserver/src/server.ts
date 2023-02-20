import  * as express   from "express";
import * as dotenv from 'dotenv';
import * as cors from 'cors';

dotenv.config()

const app = express();
const port = process.env.PORT;

// app.use(cors())

app.use(express.json());


app.get('/', (req, res) => {
  console.log(req.header);
  console.log(req.headers);
  res.send({
    data: 'some data from the server'
  });
});

app.listen(port, () => {
  console.log(`Server listening ay http://localhost:${port}.`);
});
