import { CharacterController } from '../controllers/character.controller';
import { StarWarsService } from '../services/starwars.service';
import { dynamoDb } from '../services/dynamodb.service';
import { mockRequest, mockResponse } from 'jest-mock-req-res';
import { Request, Response } from 'express';

jest.mock('../services/dynamodb.service');
jest.mock('../services/starwars.service');

describe('CharacterController', () => {
  let controller: CharacterController;
  let starWarsService: StarWarsService;

  beforeEach(() => {
    starWarsService = new StarWarsService();
    controller = new CharacterController(starWarsService);
  });

  describe('createCharacter', () => {
    it('should create a character successfully', async () => {
      const req = mockRequest({
        body: {
          nombre: "Luke Skywalker",
          añoNacimiento: "19 BBY",
          colorOjos: "azul",
          peliculas: ["Una Nueva Esperanza"],
          genero: "masculino"
        }
      });
      const res = mockResponse();

      await controller.createCharacter(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          nombre: "Luke Skywalker",
          añoNacimiento: "19 BBY"
        })
      );
    });
  });
}); 