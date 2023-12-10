import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})

export class GifsService {

  public gifList:Gif[] = []; /*se crea un arreglo para almacenar los gifs*/

  private _tagsHistory:string[]=[];

  private apiKey:string = 'S7EDFgX687q8Q0y9DaqUz566gflDMRAv';
  private serviceURL:string = 'https://api.giphy.com/v1/gifs';


  constructor( private http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs Service Ready');
  }

  get tagsHistory(){

    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string){

    tag = tag.toLowerCase();

    if ( this._tagsHistory.includes(tag) ) {

      this._tagsHistory = this._tagsHistory.filter( (oldTg) => oldTg !== tag)
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.splice(0,10);

    this.saveLocalStorage();

  }

  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history'))return;

    this._tagsHistory=JSON.parse(localStorage.getItem('history') !);

    if (this._tagsHistory.length === 0) return;

    this.searchTag(this._tagsHistory[0]);

  }

  searchTag(tag:string):void{

    if(tag.length === 0 )return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    //agrgamos el fech
    /*fetch('https://api.giphy.com/v1/gifs/search?api_key=S7EDFgX687q8Q0y9DaqUz566gflDMRAv&q=Dragon Ball Super&limit=20')
    .then( resp => resp.json())
    .then (data => console.log(data)); */
    this.http.get<SearchResponse>(`${this.serviceURL}/search`, {params})
    .subscribe( resp =>{


      this.gifList = resp.data;
      console.log({gifs: this.gifList});
      });

  }

}
