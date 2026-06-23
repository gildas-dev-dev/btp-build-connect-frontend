import { Component } from '@angular/core';

interface Conversation { initiales: string; nom: string; apercu: string; heure: string; active?: boolean; }

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent {
  conversations: Conversation[] = [
    { initiales: 'MA', nom: 'Marc A.',  apercu: 'Bonjour, j\'aimerais un devis pour...', heure: '10:24', active: true },
    { initiales: 'FN', nom: 'Fatou N.', apercu: 'Merci pour votre réponse rapide !',     heure: 'Hier' },
    { initiales: 'PE', nom: 'Paul E.',  apercu: 'Le carrelage est parfait 👍',           heure: 'Lun' },
    { initiales: 'ET', nom: 'Éric T.',  apercu: 'On collabore sur le chantier ?',         heure: '2 j' }
  ];
}
