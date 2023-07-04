import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ForumComponent } from './components/forum/forum.component';
import { ThematiqueComponent } from './components/thematique/thematique.component';
import { InscriptionComponent } from './components/login/inscription/inscription.component';
import { ConnexionComponent } from './components/login/connexion/connexion.component';


const routes: Routes = [
  { path: '', component: AppComponent, },
  { path: 'forum', component: ForumComponent} ,
  { path: 'thematique/:id', component: ThematiqueComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
