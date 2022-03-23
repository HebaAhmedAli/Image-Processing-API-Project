import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Testing the endpoints', (): void => {
    it('Using the main endpoint / returns 200', async () => {
        await request.get('/').expect(200);
    });
    it('Using the endpoint /resizing with valid image, width, height returns 200', async () => {
        await request
            .get('/resizing?image=santamonica&width=100&height=100')
            .expect(200);
    });
    it('Using the endpoint /resizing with image that not exist returns 404', async () => {
        await request
            .get('/resizing?image=santamonica2&width=100&height=100')
            .expect(404);
    });
    it('Using the endpoint /resizing with no image param returns 400', async () => {
        await request.get('/resizing?width=100&height=100').expect(400);
    });
    it('Using the endpoint /resizing with no width param returns 400', async () => {
        await request.get('/resizing?image=santamonica&height=100').expect(400);
    });
    it('Using the endpoint /resizing with height that is not a number returns 400', async () => {
        await request
            .get('/resizing?image=santamonica&width=100&height=xxx')
            .expect(400);
    });
});
