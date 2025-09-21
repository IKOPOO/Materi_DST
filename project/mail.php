<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $from = $_POST['email'];
  $pesan = $_POST['message'];

  $to = "emailkamu@example.com";
  $subject = "Pesan dari Form Contact";

  $headers = "From: " . $from;

  if (mail($to, $subject, $pesan, $headers)) {
    echo "Pesan berhasil dikirim!";
  } else {
    echo "Pesan gagal dikirim.";
  }
}
