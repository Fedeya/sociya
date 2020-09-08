import { ObjectId } from 'mongodb';
import { Roles } from '@Enums';

export interface Payload {
  user: {
    id: ObjectId;
    rol: Roles;
  };
  iat: number;
  exp: number;
}
