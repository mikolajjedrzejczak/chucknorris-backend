import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'src/types/user';

@Injectable()
export class AuthService {
  private users: User[] = [];

  signup(email: string, password: string) {
    const userExists = this.users.find((user) => user.email === email);
    if (userExists) {
      return new HttpException(
        'User already exists',
        HttpStatus.CONFLICT,
      );
    }

    if (email == '' || password == '')
    return new HttpException(
        'Password or email missing!',
        HttpStatus.UNAUTHORIZED,
      );

    this.users.push({ email, password });
    return 'User registered successfully!';
  }

  signin(email: string, password: string) {
    const user = this.users.find(
      (user) => user.email === email && user.password === password,
    );
    
    if (user) {
      return { user: user, message: 'Login successful!' };
    }

    return new HttpException(
        'Invalid email or password!',
        HttpStatus.UNAUTHORIZED,
      );
  }

  getUsers(): User[] {
    return this.users;
  }
}
