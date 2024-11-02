import { Router } from 'express';
import { CharacterController } from '../controllers/character.controller';
import { validateCharacter } from '../middlewares/validation.middleware';
import { StarWarsService } from '../services/starwars.service';

const router = Router();
const characterController = new CharacterController(new StarWarsService());

/**
 * @swagger
 * components:
 *   schemas:
 *     Character:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         nombre:
 *           type: string
 *         añoNacimiento:
 *           type: string
 *         colorOjos:
 *           type: string
 *         peliculas:
 *           type: array
 *           items:
 *             type: string
 *         genero:
 *           type: string
 *         colorPelo:
 *           type: string
 *         altura:
 *           type: string
 *         mundoNatal:
 *           type: string
 *         peso:
 *           type: string
 *         colorPiel:
 *           type: string
 *         especies:
 *           type: array
 *           items:
 *             type: string
 *         navesEspaciales:
 *           type: array
 *           items:
 *             type: string
 *         vehiculos:
 *           type: array
 *           items:
 *             type: string
 *         fechaCreacion:
 *           type: string
 *         fechaActualizacion:
 *           type: string
 *       required:
 *         - nombre
 */

/**
 * @swagger
 * /characters:
 *   get:
 *     summary: Get all characters
 *     tags: [Characters]
 *     responses:
 *       200:
 *         description: List of characters
 */
router.get('/', characterController.getAllCharacters.bind(characterController));

/**
 * @swagger
 * /characters/{id}:
 *   get:
 *     summary: Get a character by ID
 *     tags: [Characters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get('/:id', characterController.getCharacter.bind(characterController));

router.post('/', validateCharacter, characterController.createCharacter.bind(characterController));
router.put('/:id', validateCharacter, characterController.updateCharacter.bind(characterController));
router.delete('/:id', characterController.deleteCharacter.bind(characterController));

export default router; 