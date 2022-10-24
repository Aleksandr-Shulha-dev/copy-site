import { Request, Response, NextFunction } from 'express';
import { RegistrationFormGroup, TypedRequestBody } from '../common/types';
import nodemailer from 'nodemailer';
import httpStatus from 'http-status-codes';


const sendMail = async (
  req: TypedRequestBody<RegistrationFormGroup>,
  res: Response,
  next: NextFunction,
) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.ukr.net",
      port: 465,
      secure: true, 
      auth: {
        user: "robot-sender-for-appside@ukr.net",
        pass: "K6Bqyngw3H2kDWUC",
      },
    });
  
    let info = await transporter.sendMail({
      from: '"Appside test task (Oleksandr Shulha)" <robot-sender-for-appside@ukr.net>',
      to: "alexross2197@gmail.com",
      subject: "Appside test task (Oleksandr Shulha)",
      text: `Result`,
      html: `<b>First name : </b><span>${req.body.firstName}</span><br/>
      <b>Last name : </b><span>${req.body.lastName}</span><br/>
      <b>Email : </b><span>${req.body.email}</span><br/>
      <b>Telephone : </b><span>${req.body.tel}</span>`,
    });
  
    res.sendStatus(httpStatus.CREATED);
   
  } catch(error) {
    console.log(error)
  }
};

export { sendMail }