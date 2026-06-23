import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="ft">
    <div class="container">
      <div class="ft-grid">
        <div>
          <a class="brand" routerLink="/" style="color:#fff">
            <span class="logo"><i class="fa-solid fa-hammer"></i></span>Build<b style="color:var(--blue-500)">Connect</b>
          </a>
          <p style="margin-top:1rem;font-size:.88rem;color:#94a3b8">
            La plateforme qui connecte les clients aux meilleurs professionnels du bâtiment au Cameroun.
          </p>
        </div>
        <div>
          <h5>Navigation</h5>
          <a routerLink="/">Accueil</a>
          <a routerLink="/recherche">Trouver un pro</a>
          <a routerLink="/devenir-pro">Devenir pro</a>
          <a routerLink="/blog">Blog</a>
        </div>
        <div>
          <h5>Catégories</h5>
          <a routerLink="/recherche">Maçonnerie</a>
          <a routerLink="/recherche">Électricité</a>
          <a routerLink="/recherche">Plomberie</a>
          <a routerLink="/recherche">Peinture</a>
        </div>
        <div>
          <h5>Ressources</h5>
          <a routerLink="/blog">Conseils</a>
          <a>FAQ</a>
          <a>Conditions d'utilisation</a>
          <a>Politique de confidentialité</a>
        </div>
        <div>
          <h5>Newsletter</h5>
          <p style="font-size:.88rem;color:#94a3b8">Recevez nos conseils et nouveautés.</p>
          <div class="newsletter">
            <input placeholder="Votre email">
            <button class="btn btn-primary btn-sm">OK</button>
          </div>
        </div>
      </div>
      <div class="ft-bottom">
        <span>© 2026 BuildConnect. Tous droits réservés.</span>
        <span>Orange Money · MTN Mobile Money</span>
      </div>
    </div>
  </footer>
  `
})
export class FooterComponent {}
