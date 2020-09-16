import { NextApiHandler } from 'next';
import Cookie from 'cookies';

const AuthHandler: NextApiHandler = (req, res) => {
  if (req.method === 'POST') {
    const cookie = new Cookie(req, res);

    cookie.set('token', req.body.token);

    res.status(200).json({ message: 'realized' });
  }
};

export default AuthHandler;
