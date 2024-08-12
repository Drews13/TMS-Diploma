export interface IFiltets {
  sort: "Rating" | "Year";
  years: {
    from: string;
    to: string;
  };
  rating: {
    from: string;
    to: string;
  };
}