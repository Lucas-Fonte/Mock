import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';

class Mail {
  constructor() {
    const { service, auth } = mailConfig;
    this.transporter = nodemailer.createTransport({
      service,
      auth,
    });
  }

  sendMail(message) {
    return this.transporter.sendMail(message,
      (error, info) => (error || info));
  }
}

export default new Mail();
