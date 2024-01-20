interface IFilm {
  url: string;
}

interface ISpecies {
  url: string;
}

interface IVehicle {
  url: string;
}

interface IStarship {
  url: string;
}

interface IPeople {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: IFilm[];
  species: ISpecies[];
  vehicles: IVehicle[];
  starships: IStarship[];
  created: string;
  edited: string;
  url: string;
}

export default IPeople;
