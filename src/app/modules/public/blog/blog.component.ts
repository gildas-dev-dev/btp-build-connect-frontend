import { Component } from '@angular/core';

interface Article { categorie: string; titre: string; extrait: string; date: string; }

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent {
  articles: Article[] = [
    { categorie: 'Conseils', titre: '5 conseils pour bien choisir son maçon', extrait: 'Comment évaluer l\'expérience, vérifier les références et comparer les devis avant de vous lancer.', date: '12 mai 2026 · 4 min' },
    { categorie: 'Construction', titre: 'Les étapes clés d\'une construction réussie', extrait: 'Du terrassement aux finitions, le guide complet pour piloter votre chantier sereinement.', date: '8 mai 2026 · 6 min' },
    { categorie: 'Électricité', titre: 'Entretien des installations électriques', extrait: 'Les bonnes pratiques pour une installation sûre et conforme aux normes.', date: '2 mai 2026 · 5 min' }
  ];
}
