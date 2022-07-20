async function save(data,schema){
    const Data = await new schema(data);
    await Data.save();
}

async function find(schema){
    const toReturn = await schema.find();
    return toReturn;
}


module.exports = find;