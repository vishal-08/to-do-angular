import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
