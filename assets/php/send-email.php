<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitise form data
    $firstName = trim(htmlspecialchars($_POST['firstName']));
    $lastName = trim(htmlspecialchars($_POST['lastName']));
    $email = trim(htmlspecialchars($_POST['email']));
    $mobile = trim(htmlspecialchars($_POST['mobile']));
    $message = trim(htmlspecialchars($_POST['message']));

    // Validate email address format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Email settings
    $to = "your-email@example.com";  // Replace with your email address
    $subject = "New Contact Form Submission from $firstName $lastName";
    $body = "Name: $firstName $lastName\nEmail: $email\nMobile: $mobile\nMessage:\n$message";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message! We will get back to you shortly.";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
}
?>