import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

type TCanActivate = boolean | Promise<boolean> | Observable<boolean>;

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): TCanActivate {
    const request: Request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;

    return validateToken(token);
  }
}

function validateToken(token: string): TCanActivate {
  return token === `Bearer ${process.env.TOKEN}`;
}
