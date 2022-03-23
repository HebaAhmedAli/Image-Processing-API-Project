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
});
