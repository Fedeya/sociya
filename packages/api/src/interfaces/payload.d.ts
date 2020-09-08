import { ObjectId } from 'mongodb';
import { Rol } from '@Enums';

export interface Payload {
  user: {
    id: ObjectId;
    rol: Rol;
  };
  iat: number;
  exp: number;
}
