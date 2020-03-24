const connect = require('./../database/connection');

module.exports = {
    async post(request , response){
        const { id } = request.body,
            ong = await connect('T_HERO_ONGS')
                .where('ID_CODIGO' , id)
                .select('DS_NOME')
                .first();
        if(!ong){
            return response.status(400).json({ error: "No ong found with this id"});
        }
        
        return response.json(ong)
        
    }
}