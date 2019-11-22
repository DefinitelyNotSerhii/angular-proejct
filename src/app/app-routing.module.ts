import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { Comp2Component } from './comp2/comp2.component';
const routes: Routes = [
  {
    path: '',
  redirectTo: '/Comp2',
  pathMatch: 'full',
},
{path: 'nav', component: NavComponent},
{path: 'footer', component: FooterComponent},
{path: 'comp2', component: Comp2Component},
{path: 'button', component: ButtonComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
