import { Technicien } from './technicien.model';

export interface Recommandation {
  id?: number;
  recommandeur: Technicien;
  recommande: Technicien;
  commentaire: string;
  dateRecommandation: Date;
}
