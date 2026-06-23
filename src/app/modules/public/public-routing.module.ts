import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ProfilComponent } from './profil/profil.component';
import { DevenirProComponent } from './devenir-pro/devenir-pro.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: 'professionnels/:id', component: ProfilComponent },
  { path: 'devenir-pro', component: DevenirProComponent },
  { path: 'tarifs', component: TarifsComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
