import { User } from './user.model';
import { Specialite } from './specialite.model';

export interface Technicien extends User {
  specialite: Specialite;
  ville: string;
  description: string;
  anneesExperience: number;
  noteMoyenne: number;
  nombreAvis: number;
  estVerifie: boolean;
  abonnementActif: boolean;
  dateExpirationAbonnement?: Date;
}
