var fs = require('fs');
function generateXls(name,email,created_at,skills,cpf,rg,_id){
    var writeStream = fs.createWriteStream("./file.xls");

    var header="name"+"\t"+"email"+"\t"+"created_at"+"\t" + "skills"+"\t"+ "cpf"+"\t" + "rg"+"\t" + "id"+"\t" +"\n";
    var row1 = name +"\t"+ email +"\t"+ created_at +"\t" + skills +"\t"+ cpf +"\t"+ rg +"\t"+  +  _id +"\t" + "\n";

    writeStream.write(header);
    writeStream.write(row1);

    writeStream.close();
}

module.exports = generateXls;