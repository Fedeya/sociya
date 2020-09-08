import jwt from 'jsonwebtoken';

import { SECRET_JWT } from '@Config';
import { User } from '@Models/user.model';
import { Payload } from '@Interfaces';

export class JWT {
  static verifyToken(token: string) {
    return jwt.verify(token, SECRET_JWT) as Payload;
  }

  static generateToken(user: User, expiresIn: string = '1h') {
    return jwt.sign({ user: { id: user.id } }, SECRET_JWT, { expiresIn });
  }
}
