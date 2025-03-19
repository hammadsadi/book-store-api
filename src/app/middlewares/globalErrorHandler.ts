/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { TErrorResources } from '../interfaces/error';
import AppError from '../utils/AppError';
import handleDuplicateError from '../error/handleDuplicateError';
import handleCastError from '../error/handleCastError';
import handleValidationError from '../error/handleValidationError';
import config from '../config';

const globalErrorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  // eslint-disable-next-line no-unused-vars
  next,
) => {
  let statusCode = 500;
  let message = 'Something Went Wrong';

  // Error
  let errorResources: TErrorResources = [
    {
      path: '',
      message: 'Something Went Wrong',
    },
  ];

 if (error?.name === 'ValidationError') {
    // If Zod Validation Error not Workin then it be worked
    const errorSimplies = handleValidationError(error);
    statusCode = errorSimplies.statusCode;
    message = errorSimplies.message;
    errorResources = errorSimplies.errorResources;
  } else if (error?.name === 'CastError') {
    // Handle CastError
    const errorSimplies = handleCastError(error);
    statusCode = errorSimplies.statusCode;
    message = errorSimplies.message;
    errorResources = errorSimplies.errorResources;
  } else if (error?.code === 11000) {
    // Handle CastError
    const errorSimplies = handleDuplicateError(error);
    statusCode = errorSimplies.statusCode;
    message = errorSimplies.message;
    errorResources = errorSimplies.errorResources;
  } else if (error instanceof AppError) {
    // Handle Throw New Error
    statusCode = error?.statusCode;
    message = error.message;
    errorResources = [
      {
        path: '',
        message: error?.message,
      },
    ];
  } else if (error instanceof Error) {
    // Handle Error
    message = error.message;
    errorResources = [
      {
        path: '',
        message: error?.message,
      },
    ];
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorResources,
    stack: config.NODE_ENV === 'development' ? error?.stack : null,
  });
};
export default globalErrorHandler;
