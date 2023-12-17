import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', redirectTo: 'home', pathMatch: 'full'},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
