import { AWS } from "aws-sdk";

module.exports.sendEmail = (event, context, callback) => {
  // Set the region where your Amazon SES resources are located
  AWS.config.region = "eu-west-3";

  // Create a new SES object
  var ses = new AWS.SES();

  // Set the email parameters
  var params = {
    Destination: {
      ToAddresses: ["kerr.digitalsolver@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Data:
            "Name: " +
            event.name +
            "\n" +
            "Email: " +
            event.email +
            "\n" +
            "Message: " +
            event.message,
        },
      },
      Subject: {
        Data: "Contact Form Submission",
      },
    },
    Source: event.email,
  };

  // Send the email
  ses.sendEmail(params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
      callback(err);
    } else {
      console.log(data);
      callback(null, data);
    }
  });
};
