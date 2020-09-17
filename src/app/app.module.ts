import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ContactComponent } from './contact/contact.component';
import { PrestatRegsiterComponent } from './Prestataire/prestat-regsiter/prestat-regsiter.component';
import { PrestatListComponent } from './Prestataire/prestat-list/prestat-list.component';
import { PrestatDeatilsComponent } from './Prestataire/prestat-deatils/prestat-deatils.component';
import { PrestatProfilComponent } from './Prestataire/prestat-profil/prestat-profil.component';
import { PrestatEditComponent } from './Prestataire/prestat-edit/prestat-edit.component';
import { MissionFormComponent } from './mission-form/mission-form.component';
import { SafeUrlPipe } from './security/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    TopMenuComponent,
    ContactComponent,
    PrestatRegsiterComponent,
    PrestatListComponent,
    PrestatDeatilsComponent,
    PrestatProfilComponent,
    PrestatEditComponent,
    MissionFormComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
