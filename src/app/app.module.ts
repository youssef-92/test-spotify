import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CheckTokenComponent } from './pages/check.token/check.token.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { TracksComponent } from './pages/tracks/tracks.component';
import { RedirectionComponent } from './pages/redirection/redirection.component';

@NgModule({
  declarations: [
    RedirectionComponent,
    AppComponent,
    LoginComponent,
    PlaylistComponent,
    CheckTokenComponent,
    TracksComponent
  ],
  imports: [FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
