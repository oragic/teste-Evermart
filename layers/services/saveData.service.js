const save = require('../../infra/repository/mongo.repository');
const User = require('../../infra/models/user.model')
class SaveDatasService {
    async execute(repository,data){
        save(data,User)
        return data;
    };
}

module.exports = SaveDatasService;