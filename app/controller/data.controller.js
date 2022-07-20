const GetDatasService = require('../../layers/services/getDatas.service');
class GetDataController{
   async handle(req,res){

        const getDatasService = new GetDatasService();
        const toReturn = await getDatasService.execute();
        return res.status(200).send({message:"succes",data:toReturn});
    }
}

module.exports = GetDataController;