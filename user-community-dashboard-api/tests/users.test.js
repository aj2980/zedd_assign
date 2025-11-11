const request = require('supertest');
const app = require('../src/index'); // Adjust the path if necessary

describe('GET /users', () => {
    it('should return all users', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            { id: 1, name: "Alice", role: "Admin" },
            { id: 2, name: "Bob", role: "Member" },
        ]);
    });
});

describe('POST /users', () => {
    it('should add a new user', async () => {
        const newUser = { name: "Charlie", role: "Member" };
        const response = await request(app).post('/users').send(newUser);
        expect(response.status).toBe(201);
        expect(response.body).toEqual(expect.objectContaining(newUser));
    });

    it('should return 400 for invalid user data', async () => {
        const invalidUser = { name: "", role: "Member" };
        const response = await request(app).post('/users').send(invalidUser);
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Invalid user data');
    });
});