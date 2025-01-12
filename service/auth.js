const jwt = require("jsonwebtoken");
const secret = "Shekhar$123@$"

function setUser( user){
    return jwt.sign(payload, secret);
}

function getUser(id){
   return sessionIdToUserMap.get(id);
}

module.exports={
    setUser,
    getUser
};