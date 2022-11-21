import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() movies: IMovie[] = [];
  currentMovie: number = this.moviesService.currentMovie;

  
   
  constructor(private moviesService: MoviesService) {
    this.moviesService.currentMovieSubject.subscribe((value)=>{
      this.currentMovie=value
     })
  }

  ngOnInit(): void {
    // setInterval(()=>{
    //   this.currentMovie = this.moviesService.currentMovie;
    // },100)
  }

  ngOnUpdate():void {
    this.currentMovie = this.moviesService.currentMovie;
  }
}
