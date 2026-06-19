import { Technicien } from './technicien.model';

export interface Media {
  id?: number;
  technicien: Technicien;
  url: string;
  type: 'PHOTO' | 'VIDEO' | 'DOCUMENT';
  description?: string;
  dateAjout: Date;
}
