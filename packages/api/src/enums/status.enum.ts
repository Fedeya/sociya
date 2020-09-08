import { registerEnumType } from 'type-graphql';

export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

registerEnumType(Status, {
  name: 'Status'
});
