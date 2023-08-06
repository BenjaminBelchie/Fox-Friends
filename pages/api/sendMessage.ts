import { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    let emailDetails = {
      from: req.body.from,
      to: process.env.MAIL_USERNAME,
      subject: `Message From Crochet Website: ${req.body.subject}`,
      text: req.body.message,
      html: `
      <div>
        <h2>New message from: ${req.body.from}, they have requested</h2>
        <p>${req.body.message}</p>
    </div>
    `,
    };

    transporter.sendMail(emailDetails, (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: error });
      } else {
        return res.status(200).json({ result: 'Success' });
      }
    });
  } else {
    // Handle any other HTTP method
  }
}
