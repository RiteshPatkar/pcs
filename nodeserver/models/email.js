require('dotenv').config();

const Email = () => {
}


const nodemailer = require('nodemailer');
//const randomstring = require("randomstring");

// let mailOption = {
//     from: 'riteshkpatkar@gmail.com',
//     to: 'riteshkpatkar@gmail.com',
//     subject: 'PCS Registration Code',
//     text: 'Here is you Code: ' + randomstring.generate(6)

// }


Email.sendEmail = (emailAddress, subject, text) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    
    let mailOption = {
        from: 'riteshkpatkar@gmail.com',
        to: emailAddress,
        subject: subject,
        text: text
    
    }

    transporter.sendMail(mailOption, function(error, data){
        if(error) {
            console.log('Error During sending mail', error);
        } else {
            console.log('Email Sent!!!!');
        }
    });

}


module.exports = Email;

