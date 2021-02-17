const cron = require('node-cron');
var nodemailer = require('nodemailer');
const express = require('express');
var app = express();


cron.schedule('0 0 8 19 * * ', () => {
   transporter.sendMail(mailOptions, function(err, info){
       if(err)
       console.log(err);
       else
       console.log(info)
   })
})
cron.schedule('0 0 12 23 * * ', () => {
   transporter.sendMail(mailOptions, function(err, info){
       if(err)
       console.log(err);
       else
       console.log(info)
   })
})
cron.schedule('0 0 17 30 * * ', () => {
   transporter.sendMail(mailOptions, function(err, info){
       if(err)
       console.log(err);
       else
       console.log(info)
   })
})


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'geotim199422@gmail.com',
        pass: 'march221994'
    }
});

const mailOptions = {
    from: 'pfajemilo@gmail.com',
    to: "info@maxitech.ng",
    subject: 'Interview Assessment',
    html: '<p>Maxitech is an IT company that focuses on Ecommerce, Information Technology and Investment</p>'
}
app.listen(4000)
