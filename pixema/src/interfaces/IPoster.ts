import { ICountry } from "./ICountry";
import { IGenre } from "./IGenre";
import { IPerson } from "./IPerson";

export interface IPoster {
  id: number;
  name: string;
  description: string;
  movieLength: number;
  year: number;
  genres: IGenre[];
  countries: ICountry[];
  poster: {
    previewUrl: string;
    url: string;
  };
  rating: {
    imdb: number;
  };
  fees: {
    world: {
      value: number;
      currency: string;
    };
  };
  persons: IPerson[];
}