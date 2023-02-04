import { celebrate, Joi, Segments } from "celebrate"

export const createCarRouteValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    daily_rate: Joi.number().positive().min(1).required(),
    license_plate: Joi.string().required(),
    fine_amount: Joi.number().positive().min(1).required(),
    brand: Joi.string().required(),
    category_id: Joi.string().uuid().required(),
  }),
})
