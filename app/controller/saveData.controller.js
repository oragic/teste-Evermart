const SaveDatasService = require('../../layers/services/saveData.service')
class SaveDataController{
   async handle(req,res){
        const { name,email,_id,created_at,skills,cpf,rg} =  req.body;
        console.log(req.body);
        const saveDatasService = new SaveDatasService();
        const toReturn = await saveDatasService.execute("",{name,email,_id,created_at,skills,cpf,rg});

        return res.status(200).json({message:"succes",data:toReturn});
    }
}

module.exports = SaveDataController;