import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports:[UserModule, PassportModule.register({ defaultStrategy: 'local' }),],
  providers: [AuthResolver, AuthService,LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
