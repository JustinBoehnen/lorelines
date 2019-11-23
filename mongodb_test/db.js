const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const dbname = "testdb";
//const url = "mongodb://localhost:27017";
const url = "mongodb+srv://sethjray:DracosLordos*17@lorelinescluster-veurv.mongodb.net/test?retryWrites=true&w=majority";
const mongoOptions = {useNewUrlParser : true};

const state = {
    db : null
};

const connect = (cb) =>{
    if(state.db)
    CDATASection();
    else{
        MongoClient.connect(url, mongoOptions,(err,client)=>{
            if(err){
                cb(err);
            }
            else{
                state.db = client.db(dbname);
                cb();
            }
        });
    }
}

const getPrimaryKey = (_id)=>{
    return ObjectID(_id);
}

const getDB = ()=>{
    return state.db;
}

module.exports = {getDB, connect, getPrimaryKey};