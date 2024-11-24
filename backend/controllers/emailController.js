const fetch = require('node-fetch');

const sendEmailNotification = async (item) => {
  const formData = new FormData();
  formData.append('name', 'New Item Added');
  formData.append('email', 'kiplagatjapheth544@gmail.com');
  formData.append('message', `A new ${item.title} has been added with price: ${item.price}`);

  try {
    const response = await fetch('https://formspree.io/f/mldedrgk', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    console.log("Email sent successfully", data);
  } catch (error) {
    console.error("Error sending email", error);
  }
};

module.exports = { sendEmailNotification };
