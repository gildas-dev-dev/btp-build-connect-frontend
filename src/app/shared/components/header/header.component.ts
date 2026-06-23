import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header class="site-header">
    <div class="container">
      <a class="brand" routerLink="/">
        <span class="logo"><i class="fa-solid fa-hammer"></i></span>Build<b>Connect</b>
      </a>
      <nav class="nav-links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Accueil</a>
        <a routerLink="/recherche" routerLinkActive="active">Trouver un pro</a>
        <a routerLink="/devenir-pro" routerLinkActive="active">Devenir pro</a>
        <a routerLink="/blog" routerLinkActive="active">Blog</a>
      </nav>
      <div class="header-actions">
        <a class="btn btn-outline btn-sm" routerLink="/connexion">Connexion</a>
        <a class="btn btn-primary btn-sm" routerLink="/inscription">Inscription</a>
      </div>
    </div>
  </header>
  `
})
export class HeaderComponent {}
