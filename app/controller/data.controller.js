const service = ""
class GetDataController{
   async handle(req,res){
        const data = {
            name:"RAI", 
            email:"EXEMPLE@EMAIL.COM", 
            _id:"1", 
            created_at:"2022/07/20", 
            skills:"NODEJS", 
            cpf:"111.111.111-15",
            rg:"2324456"
        }
    
        return res.send(data)
    }
}

module.exports = GetDataController