import { DirectusId, DirectusImage } from '@/interfaces/directus.interface';

export interface Props {
  staff: Staff[];
}

export interface Staff {
  id: DirectusId;
  name: string;
  job_title: string;
  biography: string;
  image: DirectusImage;
}
