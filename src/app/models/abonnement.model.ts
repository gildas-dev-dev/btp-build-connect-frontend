import { Technicien } from './technicien.model';

export interface Abonnement {
  id?: number;
  technicien: Technicien;
  dateDebut: Date;
  dateFin: Date;
  statut: 'ACTIF' | 'EXPIRE' | 'EN_ATTENTE';
  formule: 'MENSUEL' | 'TRIMESTRIEL' | 'ANNUEL';
  montant: number;
  moyenPaiement: 'MTN_MONEY' | 'ORANGE_MONEY';
  referenceTransaction: string;
}
