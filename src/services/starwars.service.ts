import axios from 'axios';
import { SWAPICharacter } from '../types/character.types';
import { TransformerService } from './transformer.service';

export class StarWarsService {
  private baseUrl = 'https://swapi.dev/api';

  async getCharacter(id: string) {
    try {
      const response = await axios.get<SWAPICharacter>(`${this.baseUrl}/people/${id}`);
      return TransformerService.swapiToSpanish(response.data);
    } catch (error) {
      throw new Error('Error fetching character from SWAPI');
    }
  }

  async searchCharacters(query: string) {
    try {
      const response = await axios.get<{ results: SWAPICharacter[] }>(
        `${this.baseUrl}/people/?search=${query}`
      );
      return response.data.results.map(char => TransformerService.swapiToSpanish(char));
    } catch (error) {
      throw new Error('Error searching characters from SWAPI');
    }
  }
} 