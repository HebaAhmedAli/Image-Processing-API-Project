import { existsSync } from 'fs';
import path from 'path';

type ErrorCodeAndMessage = {
    code: number;
    message: string;
};

const validateInputs = (
    imageName: string,
    width: string,
    height: string
): ErrorCodeAndMessage => {
    if (imageName === undefined) {
        return {
            code: 400,
            message: 'Bad request, parameter (image) is required.',
        };
    }
    if (width === undefined) {
        return {
            code: 400,
            message: 'Bad request, parameter (width) is required.',
        };
    }
    if (height === undefined) {
        return {
            code: 400,
            message: 'Bad request, parameter (height) is required.',
        };
    }
    if (isNaN(Number(width))) {
        return {
            code: 400,
            message: 'Bad request, the provided (width) is not a number.',
        };
    }
    if (isNaN(Number(height))) {
        return {
            code: 400,
            message: 'Bad request,  the provided (height) is not a number.',
        };
    }
    const imgLocation: string =
        path.resolve('./') + '/assets/images/' + imageName + '.jpg';
    if (!existsSync(imgLocation)) {
        return {
            code: 404,
            message: 'Resource not found, there is no image with this name',
        };
    }
    return { code: 0, message: 'No validation errors' };
};

export { validateInputs, ErrorCodeAndMessage };
