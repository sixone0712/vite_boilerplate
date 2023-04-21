import { RequestHandler } from 'msw';
import roomHandler from './room';

const handlers: Array<RequestHandler> = [...roomHandler];

export default handlers;
