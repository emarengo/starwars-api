import { Router } from 'express';
import { CharacterController } from '../controllers/character.controller';

const router = Router();
const controller = new CharacterController();

router.post('/', controller.createCharacter);
router.get('/', controller.getCharacters);

export default router; 