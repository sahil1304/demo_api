const firebase = require("./firebase_connect");

module.exports = {
    saveData: function(req,callback){
        let CustName=req.CustName;
        let MobileNumber=req.MobileNumber;
        let CustMail=req.CustMail;
        let CustAge=req.CustAge;
        let CustAddress=req.CustAddress;
        let Medicine=req.Medicine;
        let Quantity=req.Quantity;

        firebase.database().ref("orders/"+CustName).set({
            CustName: req.CustName,
            MobileNumber: req.MobileNumber,
            CustMail=req.CustMail,
            CustAge=req.CustAge,
            CustAddress=req.CustAddress,
            Medicine=req.Medicine,
            Quantity=req.Quantity,

        })
        callback(null,{"statuscode":200,"message":"Order Placed Successfully "})
    }
}