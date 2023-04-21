import { DefaultBodyType, MockedRequest, rest, RestHandler } from 'msw';
import { mockDataRom } from '../data/room';

const roomHandler: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.get('/api/v1/rooms', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockDataRom.getRoomList(1)));
  }),
];

export default roomHandler;
