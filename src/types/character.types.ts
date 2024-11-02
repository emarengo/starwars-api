export interface Character {
  id: string;
  nombre: string;
  añoNacimiento: string;
  colorOjos: string;
  peliculas: string[];
  genero: string;
  colorPelo: string;
  altura: string;
  mundoNatal: string;
  peso: string;
  colorPiel: string;
  especies: string[];
  navesEspaciales: string[];
  vehiculos: string[];
  url: string;
  fechaCreacion: string;
  fechaActualizacion: string;
}

export interface SWAPICharacter {
  name: string;
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  skin_color: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
}

export interface CharacterCreateDTO {
  nombre: string;
  añoNacimiento?: string;
  colorOjos?: string;
  genero?: string;
  colorPelo?: string;
  altura?: string;
  mundoNatal?: string;
  peso?: string;
  colorPiel?: string;
  especies?: string[];
  navesEspaciales?: string[];
  vehiculos?: string[];
}

export interface CharacterUpdateDTO extends Partial<CharacterCreateDTO> {} 