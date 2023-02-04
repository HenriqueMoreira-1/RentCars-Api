import { celebrate, Joi, Segments } from "celebrate"

export const createCategoryRouteValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({ name: Joi.string().required(), description: Joi.string().required() }),
})
