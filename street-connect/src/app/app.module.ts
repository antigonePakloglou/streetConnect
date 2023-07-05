import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { ForumComponent } from './components/forum/forum.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ThematiqueComponent } from './components/thematique/thematique.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MessageComponent } from './components/thematique/message/message.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { SujetComponent } from './components/forum/sujet/sujet.component';
import { InscriptionComponent } from './components/login/inscription/inscription.component';
import { ConnexionComponent } from './components/login/connexion/connexion.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ForumComponent,
    ThematiqueComponent,
    MessageComponent,
    SujetComponent,
    InscriptionComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    AppRoutingModule,
    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
