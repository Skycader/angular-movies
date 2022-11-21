import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies : any = [];

  constructor(private moviesService: MoviesService) {}

  getMovies() {
    this.moviesService.getMovies().subscribe((res : any) => {
      console.log("RES",res)
      this.movies = res.results;
    });
  }

  ngOnInit(): void {
      this.moviesService.getMovies().subscribe((res : any) => {
      console.log("RES",res)
      this.movies = res.results;
    });
  }
}
