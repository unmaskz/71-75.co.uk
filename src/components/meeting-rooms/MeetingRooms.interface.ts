import {
  DirectusId,
  DirectusImage,
  DirectusPrice,
} from '@/interfaces/directus.interface';

export interface Props {
  rooms: MeetingRoom[];
}

export interface MeetingRoom {
  id: DirectusId;
  name: string;
  location: string;
  prices: DirectusPrice[];
  image: DirectusImage;
  room_size: number;
  seats: number;
}
