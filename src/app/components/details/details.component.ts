import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {
  @Input() movie = {
    "adult": false,
    "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    "belongs_to_collection": null,
    "budget": 55000000,
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "homepage": "http://www.jokermovie.net/",
    "id": 475557,
    "imdb_id": "tt7286456",
    "original_language": "en",
    "original_title": "Joker",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "popularity": 321.624,
    "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "production_companies": [
      {
        "id": 9993,
        "logo_path": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
        "name": "DC Entertainment",
        "origin_country": "US"
      },
      {
        "id": 174,
        "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
        "name": "Warner Bros. Pictures",
        "origin_country": "US"
      },
      {
        "id": 429,
        "logo_path": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
        "name": "DC Comics",
        "origin_country": "US"
      },
      {
        "id": 83036,
        "logo_path": null,
        "name": "Joint Effort",
        "origin_country": "US"
      },
      {
        "id": 79,
        "logo_path": "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
        "name": "Village Roadshow Pictures",
        "origin_country": "US"
      },
      {
        "id": 13240,
        "logo_path": "/aTc07YaNHo8WNgkQSnvLmG6w4nW.png",
        "name": "Bron Studios",
        "origin_country": "CA"
      },
      {
        "id": 53152,
        "logo_path": "/shr6ZcOMI3WFQo1q6J4E4yk0PZe.png",
        "name": "Creative Wealth Media Finance",
        "origin_country": "CA"
      }
    ],
    "production_countries": [
      {
        "iso_3166_1": "CA",
        "name": "Canada"
      },
      {
        "iso_3166_1": "US",
        "name": "United States of America"
      }
    ],
    "release_date": "2019-10-02",
    "revenue": 1060753468,
    "runtime": 122,
    "spoken_languages": [
      {
        "iso_639_1": "en",
        "name": "English"
      }
    ],
    "status": "Released",
    "tagline": "Put on a happy face.",
    "title": "Joker",
    "video": false,
    "vote_average": 8.3,
    "vote_count": 7803
  }

  constructor() {
    console.log(this.movie)
   }

  ngOnInit() {
  }


}
