<html>
<body>

Welcome <?php 
$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$email = $_POST["email"];
$innerMessage = $_POST["message"];

$to      = 'talarbatov98@gmail.com';
$subject = "New message from " . $firstName . " " . $lastName;
$message =  "$innerMessage \n \n Email: " . $email;

$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

echo "Mail sent!"; ?><br>


</body>
</html>
