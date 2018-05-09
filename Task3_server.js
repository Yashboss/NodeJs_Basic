var http = require('http');
var url= require('url');
var nodemailer = require('nodemailer');
http.createServer(function (req, res) {
  var q= url.parse(req.url,true).pathname;
  q=q.slice(1,q.length);
  
    res.writeHead(200, {'Content-Type': 'text/html'});

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yashboss9747@gmail.com',
    pass: 'yashsri1212'
  }
});

var mailOptions = {
  from: 'yashksri199747@gmail.com',
  to: q ,
  subject : 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
}).listen(5000); 
