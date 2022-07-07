import {Request, Response} from 'express';
import {HTTP_CODE} from '../constants/constants';
import {ExpressMiddlewareInterface, Middleware} from 'routing-controllers';

@Middleware({ type: 'before' })
export class AuthMiddleware implements ExpressMiddlewareInterface {
  use(request: Request, response: Response, next: (err?: any) => any): void {
    const requestAuthKey = request.header('x-api-key');

    if (!requestAuthKey || requestAuthKey !== process.env.X_API_KEY) {
      response.status(HTTP_CODE.ERR_UNAUTHORIZED).end();
      return;
    }
    next();
  }
}
