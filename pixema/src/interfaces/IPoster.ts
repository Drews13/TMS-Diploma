import { IGenre } from "./IGenre";

export interface IPoster {
  id: number;
  name: string;
  description: string;
  movieLength: number;
  year: number;
  countries: string[];
  genres: IGenre[];
  poster: {
    previewUrl: string;
    url: string;
  };
}