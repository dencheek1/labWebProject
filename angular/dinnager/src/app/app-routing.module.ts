import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DieryPageComponent } from './diery-page/diery-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StartPageComponent } from './start-page/start-page.component';
import { StatsPageComponent } from './stats-page/stats-page.component';

const routes: Routes = [
  {path:'start-page',component:StartPageComponent},
  {path:'main',component:MainPageComponent},
  {path:'stats', component:StatsPageComponent},
  {path:'diery', component:DieryPageComponent},
  {path:'',redirectTo:'/start-page', pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
