import { Technicien } from './technicien.model';
import { Client } from './client.model';

export interface Avis {
  id?: number;
  client: Client;
  technicien: Technicien;
  note: number;
  commentaire: string;
  dateAvis: Date;
  estApprouve: boolean;
}
