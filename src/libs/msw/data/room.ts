export interface Message {
  userId: number;
  roomId: number;
  text?: string;
  pictureUrl?: string;
  createAt: Date;
}

interface ServerUser {
  id: number;
  name: string;
  avatarUrl: string;
  rooms: {
    [key: number]: {
      lastReadLine: number;
    };
  };
}

interface ServerRoom {
  roomId: number;
  membersId: number[];
  messages: Message[];
}

interface User {
  id: number;
  name: string;
  avatarUrl: string;
}

interface RoomListItem {
  roomId: number;
  opponent: User;
  lastMessage: Message;
  unreadCount: number;
  lastReadLine: number;
}

const mockUserData: ServerUser[] = [
  {
    id: 1,
    name: 'Dean',
    avatarUrl: 'https://avatars.githubusercontent.com/u/5938217?v=4',
    rooms: {
      1: {
        lastReadLine: 0,
      },
    },
  },
  {
    id: 2,
    name: 'John',
    avatarUrl: 'https://avatars.githubusercontent.com/u/5938217?v=4',
    rooms: {
      1: {
        lastReadLine: 0,
      },
    },
  },
];
const mockRoomData: ServerRoom[] = [
  {
    roomId: 1,
    membersId: [1, 2],
    messages: [
      {
        userId: 1,
        roomId: 1,
        text: 'Hello',
        createAt: new Date(),
      },
      {
        userId: 2,
        roomId: 1,
        text: 'Hi',
        createAt: new Date(),
      },
    ],
  },
];

class MockDataRoom {
  users = mockUserData;

  rooms = mockRoomData;

  getRoomList(userId: number): RoomListItem[] {
    return this.rooms.reduce((acc, room) => {
      const opponentId = room.membersId.find((id) => id !== userId);
      const opponent = this.users.find((user) => user.id === opponentId);
      const me = this.users.find((user) => user.id === userId);
      if (opponent && me) {
        const addRoom: RoomListItem = {
          roomId: room.roomId,
          opponent,
          lastMessage: room.messages[room.messages.length - 1],
          unreadCount: room.messages.length - me.rooms[room.roomId].lastReadLine,
          lastReadLine: me.rooms[room.roomId].lastReadLine,
        };
        acc.push(addRoom);
      }

      return acc;
    }, [] as RoomListItem[]);
  }
}

export const mockDataRom = new MockDataRoom();
