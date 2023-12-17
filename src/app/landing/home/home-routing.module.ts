import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponentComponent } from './page/home-page/homePageComponent.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: HomePageComponentComponent }
    ])],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
