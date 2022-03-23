import resizeImage from '../../utils/processing';
import path from 'path';
import { ErrorCodeAndMessage } from '../../utils/validate';

describe('Test the resizing function', (): void => {
    it('The resizeImage function should not throw error if take valid inputImagePath, outputImagePath, outputDir', (): void => {
        const inputImagePath: string =
            path.resolve('./') + '/assets/images/santamonica.jpg';
        const outputImagePath: string =
            path.resolve('./') + '/assets/thumb/santamonica_80_80.jpg';
        const outputDir: string = path.resolve('./') + '/assets/thumb/';
        expect(
            async (): Promise<ErrorCodeAndMessage> =>
                await resizeImage(inputImagePath, outputImagePath, outputDir)
        ).not.toThrowError();
    });
    it('The resizeImage function should return Success message if take valid inputImagePath, outputImagePath, outputDir', async (): Promise<void> => {
        const inputImagePath: string =
            path.resolve('./') + '/assets/images/santamonica.jpg';
        const outputImagePath: string =
            path.resolve('./') + '/assets/thumb/santamonica_70_70.jpg';
        const outputDir: string = path.resolve('./') + '/assets/thumb/';
        const resizeErrorCodeAndMessage: ErrorCodeAndMessage =
            await resizeImage(inputImagePath, outputImagePath, outputDir);
        expect(resizeErrorCodeAndMessage.message).toEqual('Success');
    });
});
