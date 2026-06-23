import { Component } from '@angular/core';

interface Categorie { icon: string; nom: string; pros: string; }
interface Pro {
  initiales: string; nom: string; specialite: string; ville: string;
  note: number; avis: number; dispo: 'Disponible' | 'Occupé' | 'Indisponible';
  tags: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  categories: Categorie[] = [
    { icon: 'fa-trowel-bricks', nom: 'Maçonnerie', pros: '820 pros' },
    { icon: 'fa-bolt',          nom: 'Électricité', pros: '640 pros' },
    { icon: 'fa-wrench',        nom: 'Plomberie',  pros: '510 pros' },
    { icon: 'fa-paint-roller',  nom: 'Peinture',   pros: '430 pros' },
    { icon: 'fa-ruler-combined',nom: 'Menuiserie', pros: '290 pros' },
    { icon: 'fa-border-all',    nom: 'Carrelage',  pros: '210 pros' }
  ];

  pros: Pro[] = [
    { initiales: 'JP', nom: 'Jean-Paul M.', specialite: 'Maçonnerie', ville: 'Yaoundé', note: 4.8, avis: 124, dispo: 'Disponible', tags: ['Maçonnerie', 'Carrelage'] },
    { initiales: 'MT', nom: 'Martin T.',    specialite: 'Électricité', ville: 'Yaoundé', note: 4.6, avis: 88,  dispo: 'Disponible', tags: ['Électricité', 'Domotique'] },
    { initiales: 'SF', nom: 'Sophie F.',    specialite: 'Plomberie',  ville: 'Douala',  note: 4.9, avis: 152, dispo: 'Occupé',     tags: ['Plomberie', 'Sanitaire'] },
    { initiales: 'DK', nom: 'David K.',     specialite: 'Peinture',   ville: 'Yaoundé', note: 4.7, avis: 64,  dispo: 'Disponible', tags: ['Peinture', 'Décoration'] }
  ];

  dispoClass(d: string): string {
    return d === 'Disponible' ? 'dispo' : d === 'Occupé' ? 'occupe' : 'indispo';
  }
}
