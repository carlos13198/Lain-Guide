import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingHomeComponent } from './pages/landing/landing-home/landing-home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ExamenesComponent } from './pages/home/examenes/examenes.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { CursosComponent } from './pages/home/cursos/cursos.component';
import { PreguntaComponent } from './pages/components/pregunta/pregunta.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        redirectTo: 'landing-home',
        pathMatch: 'full',
      },
      {
        path: 'landing-home',
        component: LandingHomeComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'cursos',
        pathMatch: 'full',
      },
      {
        path: 'examenes',
        component: ExamenesComponent,
      },
      {
        path: 'cursos',
        component: CursosComponent,
      },
    ],
  },
  {
    path: 'components/pregunta',
    component: PreguntaComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
