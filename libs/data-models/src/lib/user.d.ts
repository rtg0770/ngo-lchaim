
export enum UserRole {
    ADMIN = 'Admin',
    VOLUNTEER = 'Volunteer',
    EDITOR = 'Editor',
  }
  
  export interface User {
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
    role: UserRole;
  }
  