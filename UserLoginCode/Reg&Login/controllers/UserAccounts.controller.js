const mongoose = require('mongoose');

const User = mongoose.model('UserAccounts');

module.exports.register = (req, res, next) =>{
    console.log("in register function");
    var user = new User();
    user.Name = req.body.Name;
    user.Email = req.body.Email;
    user.Password = req.body.Password;
    user.save((err, doc) => {
        if(!err)
            res.send(doc);
        else{
            if(err.code === 11000)
            {
                res.status(442).send(['Duplicate email adress found']);
            }
            else
            {
                next(err);
            }
            console.log(err);
        }
        
     });
}