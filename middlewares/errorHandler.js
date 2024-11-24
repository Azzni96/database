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
    