import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';




@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent /*no se exporta porque solo se va utilizar en el homepage*/
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent,
    SearchBoxComponent, //exportar el servicio
  ]
})
export class GifsModule { }
