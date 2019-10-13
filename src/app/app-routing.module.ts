import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CheckTokenComponent } from './pages/check.token/check.token.component';
import { AuthGuard } from './services/auth.guard.service';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { RedirectionComponent } from './pages/redirection/redirection.component';

const routes: Routes = [
  { path: '', redirectTo: `playlist`, pathMatch: 'full'},
  { path:"login", component: LoginComponent },
  {
    path: 'playlist',canActivate: [AuthGuard], component:RedirectionComponent, children: [
      { path:'', component: PlaylistComponent},
      { path:':id', component: TracksComponent }]
    },
    { path:"check_token", component: CheckTokenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
