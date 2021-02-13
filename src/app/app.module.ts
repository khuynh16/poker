import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './home-page/profile/profile.component';
import { ConsoleComponent } from './home-page/console/console.component';
import { GameFloorComponent } from './game-floor/game-floor.component';
import { PlayerMatsComponent } from './game-floor/player-mats/player-mats.component';
import { AuthFormComponent } from './auth/auth-form/auth-form.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { CommunityCardsComponent } from './game-floor/community-cards/community-cards.component';
import { PlayingAreaComponent } from './game-floor/playing-area/playing-area.component';


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
    PlayerMatsComponent,
    AuthFormComponent,
    GameSettingsComponent,
    CommunityCardsComponent,
    PlayingAreaComponent
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
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
