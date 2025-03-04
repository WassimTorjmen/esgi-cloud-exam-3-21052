module.exports = {
  s3: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // TODO
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // TODO
    endpoint: 's3.eu-west-1.amazonaws.com', // TODO
    bucket: 'esgi-cloud-exam-bucket-21052', // TODO
  },
  suffix: {
    small: '_small.jpg',
    full: '_full.jpg'
  }
};
