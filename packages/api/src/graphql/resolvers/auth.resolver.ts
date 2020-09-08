import { Resolver, Mutation, Arg } from 'type-graphql';

import { UserModel } from '@Models/user.model';
import { Token } from '@Types/token.type';
import { AuthInput } from '@Inputs/auth.input';
import { UserInput } from '@Inputs/user.input';
import { JWT } from '@Utils/jwt';

@Resolver(Token)
export class AuthResolver {
  @Mutation(() => Token)
  async login(@Arg('input') input: AuthInput): Promise<Token> {
    const user = await UserModel.findOne({ email: input.email }).exec();
    if (!user) throw new Error('user not exist');

    if (!(await user.comparePassword(input.password)))
      throw new Error('incorrect password');

    return {
      token: JWT.generateToken(user)
    };
  }

  @Mutation(() => Token)
  async register(@Arg('input') input: UserInput): Promise<Token> {
    const user = new UserModel(input);
    await user.save();

    return {
      token: JWT.generateToken(user)
    };
  }
}
