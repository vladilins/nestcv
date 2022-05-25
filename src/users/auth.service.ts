import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string) {
    // See if email already exists
    const user = await this.usersService.find(email);
    if (user.length) {
      throw new BadRequestException('email in use');
    }

    // Hash the password

    // Create a new user

    // return the user
  }

  signin() {}
}
