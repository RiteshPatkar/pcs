const authCodeModel = require('../models/authcode');
const emailModel = require('../models/email');

const Register = function() {
};

this.text1 = "Your authentication code is - ";
this.text2 = ". Your authentication code is valid for 15 minutes.";
this.subject = "PCS Registration Authentication Code";

Register.sendMail = (emailAddress) => {

    // var code = authCodeModel.code();
    var code = "122323";

    //insert code
  //  authCodeModel.insertCode(code, emailAddress);

    var text = this.text1  + code + this.text2;

    //send email
    emailModel.sendEmail(emailAddress, this.subject, text);

}

module.exports = Register;