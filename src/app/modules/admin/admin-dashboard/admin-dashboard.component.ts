import { Component } from '@angular/core';

interface EnAttente { initiales: string; nom: string; ville: string; specialite: string; docs: number; }
interface AvisSignale { sujet: string; nb: string; nbClass: string; extrait: string; }

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent {
  enAttente: EnAttente[] = [
    { initiales: 'DK', nom: 'David K.',  ville: 'Douala',    specialite: 'Électricité', docs: 2 },
    { initiales: 'AM', nom: 'Aline M.',  ville: 'Yaoundé',   specialite: 'Peinture',    docs: 1 },
    { initiales: 'RT', nom: 'Roger T.',  ville: 'Bafoussam', specialite: 'Plomberie',   docs: 2 }
  ];
  signales: AvisSignale[] = [
    { sujet: 'Avis sur Sophie F.', nb: '3 signalements', nbClass: 'indispo', extrait: '« Contenu jugé abusif par plusieurs utilisateurs... »' },
    { sujet: 'Avis sur Marc D.',   nb: '1 signalement',  nbClass: 'pending', extrait: '« Note injustifiée selon le technicien... »' }
  ];
  docsArray(n: number): any[] { return new Array(n); }
}
