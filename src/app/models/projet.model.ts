import { Technicien } from './technicien.model';
import { Client } from './client.model';

export interface Projet {
  id?: number;
  client: Client;
  technicien: Technicien;
  titre: string;
  description: string;
  dateCreation: Date;
  statut: 'NOUVEAU' | 'EN_COURS' | 'TERMINE' | 'ANNULE';
}
