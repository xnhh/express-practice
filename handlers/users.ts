import { Handler } from '../common/types';
import { addUser, getUser } from '../data/users';

export const login: Handler = (req, res) => {
  const { username, password } = req.body;
  const found = getUser({ username, password });
  if (!found) {
    return res.status(401).send('Login failed');
  }
  res.status(200).send('Success');
};

export const signup: Handler = (req, res) => {
  const { username, password } = req.body;
  if (!username?.trim() || !password?.trim()) {
    return res.status(400).send('Bad username or password');
  }
  addUser({ username, password });
  res.status(200).send('User created');
};