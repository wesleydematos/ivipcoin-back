import {Request, Response, NextFunction} from "express"
import {AnySchema, ValidationError} from "yup"

const ensureDataValidationMiddleware = (schema: AnySchema) => 
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const validatedData = await schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true,
            })

            req.body = validatedData

            return next();
        } catch (error: ValidationError | any) {
            return res.status(400).json({message: error.errors || error})
        }
    }

export {ensureDataValidationMiddleware}