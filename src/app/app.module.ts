import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './home-page/profile/profile.component';
import { ConsoleComponent } from './home-page/console/console.component';
import { GameFloorComponent } from './game-floor/game-floor.component';
import { PlayerCardsComponent } from './game-floor/player-cards/player-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignupComponent,
    LoginComponent,
    HomePageComponent,
    ProfileComponent,
    ConsoleComponent,
    GameFloorComponent,
    PlayerCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
