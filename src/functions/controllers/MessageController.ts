import { Request, Response } from 'express';
import Mail from '../lib/Mail';

const EMAIL_USER = String(process.env.EMAIL_USER);

class MessageController {
  async index(req: Request, res: Response) {
    return res.json({
      msg: 'So, this is the part where I might send you an email',
    });
  }

  async store(req: Request, res: Response) {
    const { email } = req.body;

    Mail.sendMail({
      from: `Mock <${EMAIL_USER}>`,
      to: email,
      subject: 'Testing Mock email',
      text: 'Hello, this is just a Mock',
    });

    return res
      .status(200)
      .json({
        sendMail: true,
      });
  }
}

export default new MessageController();
