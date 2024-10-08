import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './home/details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DescriptionComponent } from './home/description/description.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, children: [
    {path: 'desc', component: DescriptionComponent}
  ]},
  {path: 'about', component: AboutComponent},
  {path: 'car/:id', component: DetailsComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
