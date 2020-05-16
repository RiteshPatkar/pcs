const dbConnection = require('../db/sqllite.db');

const randomstring = require("randomstring");

const AuthCode = () => {
}

AuthCode.code = result => {
    var code = randomstring.generate(6);
}

AuthCode.insertCode = (code, email) => {

    //get current time + 15 minutes
    let expireTime = dbConnection.query("SELECT time('now','+15 minutes')");

    dbConnection.query("INSERT INTO AUTH_CODE VALUES(?, ?, ?)", [email, code, expireTime], (error, response) => {
        if (error) {
            console.log("error while inserting authcode : ", error);
            result(error, null);
            return;
          }
      
          console.log("auth code inserted for email: ", email);
    });
}

module.exports = AuthCode;


