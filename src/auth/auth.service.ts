import { Injectable } from '@nestjs/common';
import { User } from 'src/types/user';

@Injectable()
export class AuthService {
  private users: User[] = [];

  signup(email: string, password: string) {
    const userExists = this.users.find((user) => user.email === email);
    if (userExists) {
      return { error: 'User already exists' };
    }

    if (email == '' || password == '')
      return { error: 'Password or email missing' };

    this.users.push({ email, password });
    return { message: 'User registered successfully' };
  }

  signin(email: string, password: string) {
    const user = this.users.find(
      (user) => user.email === email && user.password === password,
    );
    if (user) {
      return { user: user, message: 'Login successful' };
    }
    return { error: 'Invalid email or password' };
  }

  getUsers(): User[] {
    return this.users;
  }
}
