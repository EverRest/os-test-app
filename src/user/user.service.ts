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
  updateUser(id: string): string {
    return 'updateUser ' + id;
  }
  deleteUser(id: string): string {
    return 'deleteUser ' + id;
  }
}
