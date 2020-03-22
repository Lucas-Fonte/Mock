import { Request, Response } from 'express';

class HelloController {
  async index(req: Request, res: Response) {
    return res.json({
      msg: 'Hello, check out this number!',
      number: Math.floor(Math.random() * 10),
    });
  }
}

export default new HelloController();
