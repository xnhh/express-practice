import { Route } from './common/types';
import { home } from './handlers/home';
import { signup, login } from './handlers/users';
import { requestLogger } from './middleware/requestLogger';

export const routes: Route[] = [
  {
    method: 'get',
    path: '/',
    middleware: [],
    handler: home,
  },
  {
    method: 'post',
    path: '/users',
    middleware: [],
    handler: signup,
  },
  {
    method: 'post',
    path: '/login',
    middleware: [requestLogger],
    handler: login,
  },
];