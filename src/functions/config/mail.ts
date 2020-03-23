const EMAIL_SERVICE = String(process.env.EMAIL_SERVICE);
const EMAIL_USER = String(process.env.EMAIL_USER);
const EMAIL_PASSWORD = String(process.env.EMAIL_PASSWORD);

export default {
  service: EMAIL_SERVICE,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
};
