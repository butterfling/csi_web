function sendMessage() {
  const uname = document.getElementById("uname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const formData = {
    uname: uname,
    email: email,
    message: message
  };

  fetch("http://localhost:4000/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())

    .then(data => {

      alert("Message Sent");
    })

    .catch(error => {
      console.error("Error sending message:", error);

    });
}
