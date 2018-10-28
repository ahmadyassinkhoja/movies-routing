import { Component, OnInit, DoCheck } from '@angular/core';
import { MoviesService } from './movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, DoCheck {
  ids = 4
  movies

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    // Getting data from service
    this.movies = this.movieService.movies
  }

  ngDoCheck(){
  }

  addMovie(title,genre,length,photo) {

    console.log(photo.files[0].name)

    let newMovie = {
      id: this.ids++,
      name: title.value,
      genre: genre.value,
      length: length.value,
      image: '../../assets/images/' + photo.files[0].name
    }
    // console.log(title.value,genre.value,length.value,photo.files[0].name)
    this.movies.push(newMovie)
    
  }

  onDeleteMovie(movie){
    // console.log(movie)
    let index = this.movies.indexOf(movie)

    this.movies.splice(index, 1)
  }

}
