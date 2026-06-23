import { Component } from '@angular/core';

interface ResultPro {
  initiales: string; nom: string; specialite: string; ville: string; exp: string;
  note: number; avis: number; recos: number;
  dispo: 'Disponible' | 'Occupé' | 'Indisponible'; tags: string[];
}

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html'
})
export class RechercheComponent {
  resultats: ResultPro[] = [
    { initiales: 'JP', nom: 'Jean-Paul M.', specialite: 'Maçonnerie', ville: 'Yaoundé', exp: '18 ans', note: 4.8, avis: 124, recos: 18, dispo: 'Disponible', tags: ['Maçonnerie', 'Carrelage'] },
    { initiales: 'MT', nom: 'Martin T.',    specialite: 'Électricité', ville: 'Yaoundé', exp: '9 ans',  note: 4.6, avis: 88,  recos: 9,  dispo: 'Disponible', tags: ['Électricité', 'Domotique'] },
    { initiales: 'SF', nom: 'Sophie F.',    specialite: 'Plomberie',  ville: 'Douala',  exp: '12 ans', note: 4.9, avis: 152, recos: 21, dispo: 'Occupé',     tags: ['Plomberie', 'Sanitaire'] },
    { initiales: 'DK', nom: 'David K.',     specialite: 'Peinture',   ville: 'Yaoundé', exp: '6 ans',  note: 4.7, avis: 64,  recos: 7,  dispo: 'Disponible', tags: ['Peinture', 'Décoration'] }
  ];

  dispoClass(d: string): string {
    return d === 'Disponible' ? 'dispo' : d === 'Occupé' ? 'occupe' : 'indispo';
  }
}
