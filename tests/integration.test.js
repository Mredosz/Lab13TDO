const request = require('supertest');
const app = require('../app/index');

describe('GET /api/status', () => {
    it('should return status and version', async () => {
        const res = await request(app).get('/api/status');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('status', 'ok');
    });
});

describe('GET /api/data', () => {
    it('should return data array', async () => {
        const res = await request(app).get('/api/data');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body.data)).toBe(true);
    });
});
