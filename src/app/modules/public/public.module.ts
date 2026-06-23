import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ProfilComponent } from './profil/profil.component';
import { DevenirProComponent } from './devenir-pro/devenir-pro.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    HomeComponent,
    RechercheComponent,
    ProfilComponent,
    DevenirProComponent,
    TarifsComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
