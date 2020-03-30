import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';
import QueueSchema from '../cluster/QueueSchema';

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
      // eslint-disable-next-line arrow-body-style
      async (error, info) => {
        // await QueueSchema.create({
        //   action: JSON.stringify(error || info),
        // });

        // console.log(error || info);

        return error || info;
      });
  }
}

export default new Mail();
