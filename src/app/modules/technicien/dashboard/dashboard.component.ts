import { Component } from '@angular/core';

interface Demande { client: string; objet: string; type: string; date: string; statut: string; statutClass: string; }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  demandes: Demande[] = [
    { client: 'Marc A.',  objet: 'Construction maison',   type: 'Devis',   date: '23 juin', statut: 'Nouveau',  statutClass: 'dispo' },
    { client: 'Fatou N.', objet: 'Rénovation appart.',    type: 'Contact', date: '21 juin', statut: 'En cours', statutClass: 'pending' },
    { client: 'Paul E.',  objet: 'Travaux de carrelage',  type: 'Devis',   date: '19 juin', statut: 'Conclu',   statutClass: 'verified' }
  ];
}
