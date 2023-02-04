import { celebrate, Joi, Segments } from "celebrate"

export const createRoleRouteValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({ name: Joi.string().required() }),
})

export const listRolesRouteValidation = celebrate({
  [Segments.QUERY]: Joi.object().keys({ page: Joi.number(), limit: Joi.number() }),
})

export const showRoleRouteValidation = celebrate({
  [Segments.PARAMS]: Joi.object().keys({ id: Joi.string().uuid().required() }),
})

export const changeRoleRouteValidation = celebrate({
  [Segments.PARAMS]: Joi.object().keys({ id: Joi.string().uuid().required() }),
  [Segments.BODY]: Joi.object().keys({ name: Joi.string().required() }),
})

export const deleteRoleRouteValidation = celebrate({
  [Segments.PARAMS]: Joi.object().keys({ id: Joi.string().uuid().required() }),
})
