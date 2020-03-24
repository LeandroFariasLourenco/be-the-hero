const connect = require('./../database/connection');

module.exports = {
    async get(request , response) {
        const ongId = request.headers.authorization,
            incidents = await connect('T_HERO_INCIDENTS')
                .where('T_HERO_ONGS_ID', ongId)
                .select('*');
        
        return response.json(incidents);
    }

}