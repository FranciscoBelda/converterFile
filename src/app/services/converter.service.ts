import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  private readonly http: HttpClient =
    inject(HttpClient);
  public readonly page = signal(1);

  constructor() {
  }

  loadData(url:string,data:string): Observable<Movie[]> {
    const movies: Movie[] = [];
    //let page = 1;

    // const url = 'https://api.themoviedb.org/3/movie/popular?api_key=6a9954c562acf2cc4a9b2b0b9648e899&page=';

    const getMoviesByPage = (page: number): Observable<Movie[]> => {
      return this.http.get<any>(url + page).pipe(
        map(response => response[data])
      );
    };

    const fetchAllMovies = () => {
      return new Observable<Movie[]>(
        observer => {
        const fetchData = () => {
          getMoviesByPage(this.page()).subscribe(
            {
              next: data => {
                movies.push(...data);
                this.page.update(data => data+1);
                if (this.page() < 501) {
                  console.log(this.page());
                  if (this.page() === 500) console.log(movies);
                  fetchData();
                } else {
                  console.log('Completed');
                  observer.next(movies);
                  observer.complete();
                }
              }, error: error => {
                console.error(error);
                observer.error(error);
              }
            });
        };
        fetchData();
      });
    };
    return fetchAllMovies();

  }
}

export interface Movie{
  adult: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
