import { Request, Response } from 'express';
import { PutCommand, GetCommand } from '@aws-sdk/lib-dynamodb';
import { dynamoDb } from '../services/dynamodb.service';
import { StarWarsService } from '../services/starwars.service';
import { v4 as uuidv4 } from 'uuid';

const starWarsService = new StarWarsService();

export class CharacterController {
  async createCharacter(req: Request, res: Response) {
    try {
      const id = uuidv4();
      const character = {
        id,
        ...req.body,
        createdAt: new Date().toISOString()
      };

      await dynamoDb.send(new PutCommand({
        TableName: "my-characters-table",
        Item: character
      }));
      res.status(201).json(character);
    } catch (error) {
      res.status(500).json({ error: 'Could not create character' });
    }
  }

  async getCharacters(req: Request, res: Response) {
    try {
      const result = await dynamoDb.send(new GetCommand({
        TableName: process.env.DYNAMODB_TABLE,
        Key: { id: req.params.id }
      }));

      res.json(result.Item);
    } catch (error) {
      res.status(500).json({ error: 'Could not fetch characters' });
    }
  }
} 