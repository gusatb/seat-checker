var account = require('./config.js');
var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://' + account.user + '%40gmail.com:' + account.pass + '@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo <foo@blurdybloop.com>', // sender address
    to: 'gusatb@gmail.com', // list of receivers
    subject: 'Hello', // Subject line
    text: 'Server email test' // plaintext body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});