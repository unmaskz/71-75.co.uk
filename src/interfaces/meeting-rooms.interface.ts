import { Price } from '@/interfaces/prices.interface';

export interface MeetingRoom {
    id: string;
    name: string;
    description: string;
    image: string;
    location: string;
    prices: Price[];
    room_size: string;
    seats: number;
}
