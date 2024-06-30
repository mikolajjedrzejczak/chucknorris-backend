import { Controller, Post, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/types/user';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.signup(email, password);
  }

  @Post('signin')
  signin(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.signin(email, password);
  }

  @Get('users')
  getUsers(): User[] {
    return this.authService.getUsers();
  }
}
