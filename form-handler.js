// Get a reference to the form element
const form = document.querySelector("form");

 // Get AWS Keys
 const accessKeyId = CryptoJS.AES.decrypt("vnx/QjGQOK8I7A6RcAhB5YfP/bUZbfKL7O6VSuOVgrQ=", "kds-portfolio123");
 const secretAccessKey = CryptoJS.AES.decrypt("cNRyaHKnuBCaqh/AVJO2HsllR+WTE1xkLShi3b2/9G9MdSUBpVS6imN66cTQ5xDUS", "kds-portfolio123");

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);
  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  const question = formData.get("question");
  const email = formData.get("email");

  // Configure the AWS SDK with your AWS access keys and region
  AWS.config.update({
    accessKeyId: accessKeyId.toString(CryptoJS.enc.Utf8),
    secretAccessKey: secretAccessKey.toString(CryptoJS.enc.Utf8),
    region: "eu-west-3",
  });

  // Create the email params object
  const emailParams = {
    Source: email,
    Destination: {
      ToAddresses: ["kerr.digitalsolver@gmail.com"],
    },
    Message: {
      Subject: {
        Data: "New message from your portfolio contact form",
      },
      Body: {
        Text: {
          Data: `First Name: ${firstName}\nLast Name: ${lastName}\nQuestion: ${question}\nEmail: ${email}`,
        },
      },
    },
  };

  // Send the email using the AWS SDK and Axios
  const ses = new AWS.SES();
  axios
    .post(ses.endpoint.href, emailParams)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
});
