import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { CurrentUser } from './user.decorator';

import { User, InputUser } from './user.model';
import { GQLocalAuthGuard } from './graphql-local-auth.guard';

@Resolver('Auth')
export class AuthResolver {

  @Query(() => User)
  fakeUser() {
    return { username: 'test' };
  }

  @Mutation(() => User)
  @UseGuards(GQLocalAuthGuard)
  login(@CurrentUser() user: InputUser) {
    return { username: 'ok' };
  }

}
