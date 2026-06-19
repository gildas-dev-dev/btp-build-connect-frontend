export interface User {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  role: 'ADMIN' | 'TECHNICIEN' | 'CLIENT';
  dateCreation?: Date;
  statut: boolean;
}
