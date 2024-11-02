import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const characterSchema = Joi.object({
  nombre: Joi.string().required(),
  añoNacimiento: Joi.string(),
  colorOjos: Joi.string(),
  peliculas: Joi.array().items(Joi.string()).default([]),
  genero: Joi.string(),
  colorPelo: Joi.string(),
  altura: Joi.string(),
  mundoNatal: Joi.string(),
  peso: Joi.string(),
  colorPiel: Joi.string(),
  especies: Joi.array().items(Joi.string()).default([]),
  navesEspaciales: Joi.array().items(Joi.string()).default([]),
  vehiculos: Joi.array().items(Joi.string()).default([])
}).options({ 
  stripUnknown: true, 
  presence: 'optional'
});

export const validateCharacter = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { error, value } = characterSchema.validate(req.body);
    if (error) {
      res.status(400).json({ 
        error: error.details[0].message,
        campo: error.details[0].context?.key
      });
      return;
    }
    req.body = value; 
    next();
  } catch (err) {
    res.status(500).json({ error: 'Error en la validación' });
  }
}; 