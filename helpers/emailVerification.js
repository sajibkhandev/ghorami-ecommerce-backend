
const nodemailer = require("nodemailer");

const emailVerification =async (email,otp) => {


    const transporter = nodemailer.createTransport({
        host: "sajibkhan.cit.bd@gmail.com",
        service: "gmail",
        auth: {
            user: "sajibkhan.cit.bd@gmail.com",
            pass: "spkpkfsaoxqbrrsp",
        },
    });
    const info = await transporter.sendMail({
        from: '"Ghorami" <sajibkhan.cit.bd@gmail.com>',
        to: email,
        subject: "Email Verification",
        text: "Hello world?",
        html: `<div style="width:500px;padding:50px 0;background:#98d7ee;text-align:center;border-radius:10px"><h1>Email Verification</h1><p style=width:400px;margin:auto>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus laborum officiis culpa hic enim accusantium nulla sunt ipsum corporis excepturi reiciendis .</p><a href=# style="margin-top:30px;display:inline-block;background:#00f;padding:10px 30px;border:0;border-radius:8px;color:#fff;font-size:20px;text-decoration:none">${otp}</a><div style="display:flex;column-gap:15px;padding:30px 0;justify-content:center"><a href=https://www.facebook.com/ ><img alt=""height=30 src=https://i.ibb.co.com/pjjkqrYF/Facebook-f-logo-2021-svg.webp width=30> </a><a href=https://www.facebook.com/ ><img alt=""height=30 src=https://i.ibb.co.com/pjjkqrYF/Facebook-f-logo-2021-svg.webp width=30> </a><a href=https://www.facebook.com/ ><img alt=""height=30 src=https://i.ibb.co.com/pjjkqrYF/Facebook-f-logo-2021-svg.webp width=30> </a><a href=https://www.facebook.com/ ><img alt=""height=30 src=https://i.ibb.co.com/pjjkqrYF/Facebook-f-logo-2021-svg.webp width=30></a></div></div>`,
    });

}
module.exports = emailVerification