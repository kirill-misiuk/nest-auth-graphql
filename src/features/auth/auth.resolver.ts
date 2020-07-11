import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation } from '@nestjs/graphql';
import { CurrentUser } from './user.decorator';

import { User, UserInput } from './user.model';
import { GQLocalAuthGuard } from './graphql-local-auth.guard';

@Resolver('Auth')
export class AuthResolver {


 @Mutation(()=> User)
 @UseGuards(GQLocalAuthGuard)
 login(@CurrentUser() user: UserInput) {
  console.log(user)
  return {username:'ok'}
 }

}
