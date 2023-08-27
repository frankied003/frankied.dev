import * as FormData from "form-data";
import Mailgun from "mailgun.js";

export default function handler(req, res) {
  const mailgun = new Mailgun(FormData);
  const domain = "sandbox633873fa1e584b7b9278006fb6f58c1e.mailgun.org";
  const mg = mailgun.client({
    key: process.env.MAILGUN_API_KEY,
    username: domain,
  });
  const data = {
    from: "Mailgun Sandbox <postmaster@sandbox633873fa1e584b7b9278006fb6f58c1e.mailgun.org>",
    to: ["frankied3030@gmail.com", req.body.email],
    subject: "Inquiry Received - Frankied.dev",
    template: "inquiry received",
    "h:X-Mailgun-Variables": JSON.stringify({
      fullName: req.body.name,
      email: req.body.email,
      number: req.body.number,
      description: req.body.description,
    }),
  };
  return mg.messages
    .create(domain, data)
    .then((msg) => res.status(200).json(msg)) // logs response data
    .catch((err) => res.status(400).json(err)); // logs any error
}
