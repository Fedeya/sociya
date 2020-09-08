import { AuthChecker } from 'type-graphql';

import { Context } from '@Interfaces';
import { Roles } from '@Enums';

export const authChecker: AuthChecker<Context, Roles> = (
  { context: { user } },
  roles
) => {
  if (!user) return false;

  if (user.rol === Roles.ADMIN) return true;

  if (roles.includes(user.rol)) return true;

  return false;
};
