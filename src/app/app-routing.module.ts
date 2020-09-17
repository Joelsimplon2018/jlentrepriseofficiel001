import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { MissionFormComponent } from './mission-form/mission-form.component'
import { PrestatRegsiterComponent } from './Prestataire/prestat-regsiter/prestat-regsiter.component'
import { PrestatDeatilsComponent } from './Prestataire/prestat-deatils/prestat-deatils.component'
import { PrestatEditComponent } from './Prestataire/prestat-edit/prestat-edit.component'
import { PrestatListComponent } from './Prestataire/prestat-list/prestat-list.component'
import { PrestatProfilComponent } from './Prestataire/prestat-profil/prestat-profil.component'
import { ContactComponent } from './contact/contact.component'
import { FooterComponent } from './footer/footer.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { TopMenuComponent } from './top-menu/top-menu.component'

import { AuthGuard } from '../app/security/auth.guard'

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'prestataireRegister', component: PrestatRegsiterComponent, canActivate: [AuthGuard] }, { path: 'prestataire/:id/mission', component: MissionFormComponent, canActivate: [AuthGuard] }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
