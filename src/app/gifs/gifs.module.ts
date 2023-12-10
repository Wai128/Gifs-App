import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';






@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent /*no se exporta porque solo se va utilizar en el homepage*/
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    HomePageComponent,
    SearchBoxComponent, //exportar el servicio
  ]
})
export class GifsModule { }
