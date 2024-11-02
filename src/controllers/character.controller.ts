import { Request, Response } from 'express';
import { PutCommand, GetCommand, DeleteCommand, ScanCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { dynamoDb } from '../services/dynamodb.service';
import { StarWarsService } from '../services/starwars.service';
import { v4 as uuidv4 } from 'uuid';
import { Character } from '../types/character.types';

const TABLE_NAME = 'my-characters-table';

export class CharacterController {
  constructor(private starWarsService: StarWarsService) {}

  async createCharacter(req: Request, res: Response) {
    try {
      const id = uuidv4();
      const character: Character = {
        id,
        ...req.body,
        fechaCreacion: new Date().toISOString(),
        fechaActualizacion: new Date().toISOString()
      };

      await dynamoDb.send(new PutCommand({
        TableName: TABLE_NAME,
        Item: character
      }));
      res.status(201).json(character);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo crear el personaje' });
    }
  }

  async getCharacter(req: Request, res: Response) {
    try {
      const result = await dynamoDb.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: { id: req.params.id }
      }));

      if (!result.Item) {
        return res.status(404).json({ error: 'Personaje no encontrado' });
      }

      res.json(result.Item);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener el personaje' });
    }
  }

  async getAllCharacters(req: Request, res: Response) {
    try {
      const result = await dynamoDb.send(new ScanCommand({
        TableName: TABLE_NAME
      }));

      res.json(result.Items);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener los personajes' });
    }
  }

  async updateCharacter(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updates = req.body;
      
      const updateExpression = Object.keys(updates)
        .map((key) => `#${key} = :${key}`)
        .join(', ');
      
      const expressionAttributeNames = Object.keys(updates).reduce((acc, key) => ({
        ...acc,
        [`#${key}`]: key,
      }), {});
      
      const expressionAttributeValues = Object.entries(updates).reduce((acc, [key, value]) => ({
        ...acc,
        [`:${key}`]: value,
      }), { ':updatedAt': new Date().toISOString() });

      const result = await dynamoDb.send(new UpdateCommand({
        TableName: TABLE_NAME,
        Key: { id },
        UpdateExpression: `SET ${updateExpression}, #updatedAt = :updatedAt`,
        ExpressionAttributeNames: {
          ...expressionAttributeNames,
          '#updatedAt': 'updatedAt',
        },
        ExpressionAttributeValues: expressionAttributeValues,
        ReturnValues: 'ALL_NEW',
      }));

      res.json(result.Attributes);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo actualizar el personaje' });
    }
  }

  async deleteCharacter(req: Request, res: Response) {
    try {
      await dynamoDb.send(new DeleteCommand({
        TableName: TABLE_NAME,
        Key: { id: req.params.id }
      }));

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'No se pudo eliminar el personaje' });
    }
  }
} 