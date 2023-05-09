<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Validate and sanitize the data (optional)
  // ...

  // Send email
  $to = "loraaelliott1@gmail.com";
  $subject = "New Contact Form Submission";
  $body = "Name: " . $name . "\n";
  $body .= "Email: " . $email . "\n";
  $body .= "Message: " . $message . "\n";

  // Use appropriate email headers
  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you for contacting me!";
  } else {
    echo "Oops! Something went wrong.";
  }
}
?>
