import { Injectable } from '@nestjs/common';
@Injectable()
export class UserService {
  getUser(): string {
    return 'getUser';
  }
  getAllUsers(): string {
    return 'getAllUsers';
  }
  createUser(): string {
    return 'createUser';
  }
  updateUser(): string {
    return 'updateUser';
  }
  deleteUser(): string {
    return 'deleteUser';
  }
}
