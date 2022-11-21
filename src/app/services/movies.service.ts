import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
  currentMovie: number = 0;
  currentMovieSubject: Subject<number> = new Subject<number>();

  constructor( private http: HttpClient) { 
    setInterval(()=>{
      console.log("OK")
      this.currentMovie=(this.currentMovie+1)%20
      this.currentMovieSubject.next(this.currentMovie)
    },5000)
  }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=4097a3375b3da833a413fa09bae9e61a&language=en-US&page=1')
  }

}
