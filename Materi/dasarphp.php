<?php
// variabel
$nama = "ajeng";
$NAMA = "danil";

const VARIABEL = "EKONO";
$variabel_satu = "satu";
$iniVariabelSatuJuga = "satu";
$variable; 

// tipe data
$char = 'a'; // ini adalah karakter
$string = "ini string"; // ini tipe data string atau teks
$integer = 123; // ini tipe data integer atau bilangan bulat
$float = 3.14; // ini tipe data float atau bilangan desimal 
$boolean = true; // ini tipe data boolean atau logika (true/false)

// fungsi nemapilkan teks
echo "nama saya"; 
echo("nama saya");

print "nama saya";
print("nama saya");

printf(
    "nama saya adalah %s",
    $nama
  );


// percabangan if else dan switch 
$nilai = 85;
$kehadiran = 90;

if ($nilai >= 90) {
  echo"Grade A";
} else if ($nilai >= 75) {
  // nested if di dalam else if
  if ($kehadiran >= 80) {
    echo "Grade B (kehadiran baik)";
  } else {
    echo "Grade B (kehadiran kurang)";
  }
} else if ($nilai >= 60) {
  echo "Grade C";
} else {
  echo "Tidak lulus";
}

$grade = "B";

switch ($grade) {
  case "A":
    echo "Sangat baik";
    break;
  case "B":
    echo "Baik";
    break;
  case "C":
    echo "Cukup";
    break;
  default:
    echo "Tidak lulus";
}
