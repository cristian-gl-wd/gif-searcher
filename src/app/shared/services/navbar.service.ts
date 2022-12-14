import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsReponse, Gif } from '../../gifs/interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private apiKey: string = 'ownc3tM97bUoacJMFZmfPRiciiRGkWvy';
  private urlService: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];

  public results: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor( private http: HttpClient ) {
    if (localStorage.getItem('history') && localStorage.getItem('gifsHistory')) {
      this._history = JSON.parse(localStorage.getItem('history')!);
      this.results = JSON.parse(localStorage.getItem('gifsHistory')!);
    }
  }

  searchGifs( query: string ) {

    query = query.trim().toLocaleLowerCase();
    
    if(!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '30');

    this.http.get<SearchGifsReponse>(`${ this.urlService }/search`,{ params })
      .subscribe( (resp )  => {
        this.results = resp.data;

        localStorage.setItem('gifsHistory', JSON.stringify(resp.data));
      });
  }
}
