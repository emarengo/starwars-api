import { SWAPICharacter, Character } from '../types/character.types';

export class TransformerService {
  static swapiToSpanish(data: SWAPICharacter): Partial<Character> {
    return {
      nombre: data.name,
      añoNacimiento: data.birth_year,
      colorOjos: data.eye_color,
      peliculas: data.films,
      genero: data.gender,
      colorPelo: data.hair_color,
      altura: data.height,
      mundoNatal: data.homeworld,
      peso: data.mass,
      colorPiel: data.skin_color,
      especies: data.species,
      navesEspaciales: data.starships,
      vehiculos: data.vehicles,
      url: data.url,
      fechaCreacion: data.created,
      fechaActualizacion: data.edited
    };
  }

  static spanishToSwapi(data: Partial<Character>): Partial<SWAPICharacter> {
    return {
      name: data.nombre,
      birth_year: data.añoNacimiento,
      eye_color: data.colorOjos,
      films: data.peliculas,
      gender: data.genero,
      hair_color: data.colorPelo,
      height: data.altura,
      homeworld: data.mundoNatal,
      mass: data.peso,
      skin_color: data.colorPiel,
      species: data.especies,
      starships: data.navesEspaciales,
      vehicles: data.vehiculos,
      url: data.url
    };
  }
} 