import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingHomeComponent } from './pages/landing/landing-home/landing-home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ExamenesComponent } from './pages/home/examenes/examenes.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CursosComponent } from './pages/home/cursos/cursos.component';
import { FormsModule } from '@angular/forms';
import { PreguntaComponent } from './pages/components/pregunta/pregunta.component';
import { ComponentsComponent } from './pages/components/components.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LandingHomeComponent,
    LoginComponent,
    RegisterComponent,
    ExamenesComponent,
    AuthComponent,
    HomeComponent,
    LandingComponent,
    CursosComponent,
    PreguntaComponent,
    ComponentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
