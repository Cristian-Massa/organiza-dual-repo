import { User } from '@/modules/users/schema/users.schema';
import { HttpStatus } from '@nestjs/common';

export interface AuthResponse {
  status: HttpStatus;
  message: string;
  data: User;
}
