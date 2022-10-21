import { Request, Response, RequestHandler as Middleware } from 'express';

export type Handler = (req: Request, res: Response) => any;

type Method =
  | 'get'
  | 'head'
  | 'post'
  | 'put'
  | 'delete'
  | 'connect'
  | 'options'
  | 'trace'
  | 'patch';


export type Route = {
  method: Method;
  path: string;
  middleware: Middleware[];
  handler: Handler;
};

export * from './users';