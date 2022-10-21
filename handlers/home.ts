import { Handler } from "../common/types";


export const home: Handler = (req, res) => {
  res.send('Hello world');
};