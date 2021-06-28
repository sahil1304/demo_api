const firebase = require("./firebase_connect");

module.exports = {
    saveData: function(req,callback){
        let FormName=req.FormName;
        let FieldName=req.FieldName;

        firebase.database().ref("Form/Sahil/"+FormName+"/"+FieldName).set({
            FieldName: req.FieldName,
            FieldValue: req.FieldValue,

        })
        callback(null,{"statuscode":200,"message":"Inserted Data"})
    }
}