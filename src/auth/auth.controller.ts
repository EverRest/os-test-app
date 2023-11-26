import { Controller, Get, Post, Version } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Version('1.0')
  @Get()
  async register(): Promise<string> {
    return this.authService.register();
  }
  @Version('1.0')
  @Post()
  async login(): Promise<string> {
    return this.authService.login();
  }
  @Version('1.0')
  @Post()
  async logout(): Promise<string> {
    return this.authService.logout();
  }
}
