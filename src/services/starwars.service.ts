import axios from 'axios';

export class StarWarsService {
  private baseUrl = 'https://swapi.py4e.com/api';

  async getCharacter(id: string) {
    const response = await axios.get(`${this.baseUrl}/people/${id}`);
    return this.translateToSpanish(response.data);
  }

  private translateToSpanish(character: any) {
    return {
      nombre: character.name,
      altura: character.height,
      peso: character.mass,
      colorCabello: character.hair_color,
      colorPiel: character.skin_color,
      colorOjos: character.eye_color,
      añoNacimiento: character.birth_year,
      genero: character.gender,
    };
  }
} 