import { registerEnumType } from 'type-graphql';

export enum Roles {
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN'
}

registerEnumType(Roles, {
  name: 'Roles'
});
