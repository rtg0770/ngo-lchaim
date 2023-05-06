import { Controller, Post, Body } from '@nestjs/common';

enum UserRole {
  ADMIN = 'Admin',
  VOLUNTEER = 'Volunteer',
  EDITOR = 'Editor',
}

interface User {
  username: string;
  password: string;
  name: string;
  surname: string;
  role: UserRole;
}

const users: User[] = [
  {
    username: 'admin',
    password: 'admin',
    name: 'John',
    surname: 'Doe',
    role: UserRole.ADMIN,
  },
  {
    username: 'volunteer',
    password: 'volunteer',
    name: 'Jane',
    surname: 'Doe',
    role: UserRole.VOLUNTEER,
  },
  {
    username: 'editor',
    password: 'editor',
    name: 'Bob',
    surname: 'Smith',
    role: UserRole.EDITOR,
  },
];

@Controller()
export class AuthController {
  @Post('login')
  login(@Body() credentials: { username: string; password: string }) {
    const user = users.find(
      (u) => u.username === credentials.username && u.password === credentials.password,
    );
    if (user) {
      return user;
    } else {
      return { message: 'Invalid credentials' };
    }
  }
}
