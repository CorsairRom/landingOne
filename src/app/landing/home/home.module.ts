import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { TopBarComponent } from '../components/TopBar/TopBar.component';
import { HomePageComponentComponent } from './page/home-page/homePageComponent.component';
import { CarouselComponent } from '../components/Carousel/Carousel.component';
import { FeatureComponent } from './components/feature/feature.component';
import { StepComponent } from './components/step/step.component';
import { FooterComponent } from '../components/footer/footer.component';




@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FeatureComponent,
    StepComponent,
    FooterComponent

  ],
  declarations: [
    HomePageComponentComponent,
    TopBarComponent,
    CarouselComponent

  ],
})
export class AdministrarAccesosModule { }
