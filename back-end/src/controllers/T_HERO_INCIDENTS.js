const connect = require('./../database/connection');

module.exports = {
    async post(request, response) {
        const { titulo, descricao, custo } = request.body,
            ongId = request.headers.authorization;

        const [id] = await connect('T_HERO_INCIDENTS').insert({
            DS_TITULO: titulo,
            DS_DESCRICAO: descricao,
            VL_CUSTO: custo,
            T_HERO_ONGS_ID: ongId
        })

        return response.json({ id })
    },

    async get(request, response) {
        const { page = 1 } = request.query,
            ongTable = 'T_HERO_ONGS',
            incidents = await connect('T_HERO_INCIDENTS')
                .join('T_HERO_ONGS', 'ID_CODIGO' , '=' , 'T_HERO_INCIDENTS.T_HERO_ONGS_ID')
                .limit(5)
                .offset((page - 1) * 5)   
                .select([
                    'T_HERO_INCIDENTS.*', 
                    `${ongTable}.DS_NOME`, 
                    `${ongTable}.DS_EMAIL`, 
                    `${ongTable}.DS_TELEFONE`, 
                    `${ongTable}.DS_CIDADE`, 
                    `${ongTable}.DS_UF`
                ]),
            [ count ] = await connect('T_HERO_INCIDENTS')
                .count();

        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidents);
    },

    async delete(request, response) {
        const { id } = request.params,
            ongId = request.headers.authorization,
            incident = await connect('T_HERO_INCIDENTS')
                .where('id', id)
                .select('T_HERO_ONGS_ID')
                .first();
        if(incident.T_HERO_ONGS_ID !== ongId){
            return response.status(401).json({ error: "operation not authorized"});
        }
        await connect('T_HERO_INCIDENTS').where('id', id).delete();

        return response.status(204).send();
    }
}