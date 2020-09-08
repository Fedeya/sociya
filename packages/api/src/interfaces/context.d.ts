import { Roles } from '@Enums';
import { ObjectId } from 'mongodb';

export interface Context {
  user?: {
    id: ObjectId;
    rol: Roles;
  };
}
