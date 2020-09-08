import { registerEnumType } from 'type-graphql';

export enum Rol {
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN'
}

registerEnumType(Rol, {
  name: 'Rol'
});
