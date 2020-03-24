const crypto = require('crypto'),
    connect = require('./../database/connection');

module.exports = {
    async post(request, response) {
        const { nome, email, telefone, cidade, uf } = request.body,
            id = crypto.randomBytes(4).toString('HEX');

        await connect('T_HERO_ONGS').insert({
            ID_CODIGO: id,
            DS_NOME: nome,
            DS_EMAIL: email,
            DS_TELEFONE: telefone,
            DS_CIDADE: cidade,
            DS_UF: uf
        })

        return response.json({
            "ID": id
        })
    },
    
    async get(request, response) {
        const ongs = await connect('T_HERO_ONGS').select('*');
        return response.json(ongs);
    }
}