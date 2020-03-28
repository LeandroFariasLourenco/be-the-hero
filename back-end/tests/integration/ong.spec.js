const request = require('supertest'),
  app = require('./../../src/app'),
  connection = require('./../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest(); 
  });

  afterAll(async () => {
    await connection.destroy();
  })

  it('Should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        nome: "YoloLand",
        email: "feleolive2010@hotmail.com",
        telefone: "+5511983732412",
        cidade: "Uberlândia",
        uf: "MG"
      });

      expect(response.body).toHaveProperty('ID');
      expect(response.body.ID).toHaveLength(8);
  })
})