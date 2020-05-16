// require('dotenv').config();

// const nodemailer = require('nodemailer');
// const randomstring = require("randomstring");

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user:process.env.EMAIL,
//         pass: process.env.PASSWORD
//     }
// });

// let mailOption = {
//     from: 'riteshkpatkar@gmail.com',
//     to: 'riteshkpatkar@gmail.com',
//     subject: 'PCS Registration Code',
//     text: 'Here is you Code: ' + randomstring.generate(6)

// }

// transporter.sendMail(mailOption, function(error, data){
//     if(error) {
//         console.log('Error During sending mail', error);
//     } else {
//         console.log('Email Sent!!!!');
//     }
// });
