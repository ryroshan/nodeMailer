const nodemailer = require('nodemailer');

const transpoter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        // type: 'OAuth2',
        user : process.env.EMAIL,
        pass : process.env.PASSWORD
    }
})

const mailOptions ={
    from : 'ryroshan9@gmail.com',
    to : 'roshanros13@gmail.com',
    subject : 'just for checking that local server sending a mail or not',
    text : `<h1> LOL... let's see what happens!!! </h1>`
}

transpoter.sendMail(mailOptions, (error, info)=>{
    if(error) {
        console.log('error occured'+error);
    }else{
        console.log(`Email sent ${info.response}`);
    }
})