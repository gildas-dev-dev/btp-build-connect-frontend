import { User } from './user.model';

export interface Client extends User {
  ville: string;
  adresse?: string;
}
