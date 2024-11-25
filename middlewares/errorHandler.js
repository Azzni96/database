import { validationResult } from "express-validator";

export const notFoundhandler = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    error.status = 404;
    next(error);
    }

export const errorHandler = (error, req, res, next) => {
    res.status(error.status || 500); 
    res.json({
        error: {
            message: error.message,
            status: error.status || 500,
        },
    });
    };

export const validationErrorHandler = (req, res, next) => {
    const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log('Validation failed', errors.array());
            const errorsString = errors.array().map((error) => item.path + '');
            return next(customError('Validation failed in:' + errorsString, 400));
        }   
    next();
    }

export const customError = (message, status) => {
    const error = new Error(message);
    error.status = status || 500;
    return error;
    }