const repository = "";
const moment = require("moment");

class GetDatasService {
    async execute(repository,data){
        moment.locale('pt-br')
        const Data = {
            name:"RAI", 
            email:"EXEMPLE@EMAIL.COM", 
            _id:"1", 
            created_at:moment(new Date),
            skills:"NODEJS", 
            cpf:"111.111.111-15",
            rg:"2324456"
        };
        return Data;
    };
}

module.exports = GetDatasService;