const find = require('../../infra/repository/mongo.repository');
const User = require('../../infra/models/user.model')
const generateXls = require('../../layers/utils/xlsGenerate')
const moment = require("moment");

class GetDatasService {
    async execute(repository,data){
        moment.locale('pt-br')
        const Data = await find(User)
        generateXls(Data[0].name, Data[0].email, moment(new Date(Data[0].createdAt)).format('DD-MM-YYYY'), Data[0].skills ,Data[0].cpf ,Data[0].rg, Data[0]._id)
        return Data;
    };
}

module.exports = GetDatasService;