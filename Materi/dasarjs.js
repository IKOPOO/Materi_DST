// variabel
const VARIABLE = 'EKONO'; 
let variable_satu = 'satu'; 
let iniVariableSatuJuga = 'satu'; 
let who; 
who = "danil";

// tipe data
let char = 'a'; // ini adalah karakter 
let data = "halo dunia"; // ini adalah tipe data string atau teks
let angka = 456.43; // ini adalah tipe data integer atau bilangan bulat 
let status = false ; // ini adalah tipe data boolean atau logika (true/false)
let siapa; 
siapa = "martin";

// menampilkan teks 
console.log("nama saya adalah seseorang")

let nilai = 85;
let kehadiran = 90;

if (nilai >= 90) {
  console.log("Grade A");
} else if (nilai >= 75) {
  // nested if di dalam else if
  if (kehadiran >= 80) {
    console.log("Grade B (kehadiran baik)");
  } else {
    console.log("Grade B (kehadiran kurang)");
  }
} else if (nilai >= 60) {
  console.log("Grade C");
} else {
  console.log("Tidak lulus");
}


let grade = "B";

switch (grade) {
  case "A":
    console.log("Sangat baik");
    break;
  case "B":
    console.log("Baik");
    break;
  case "C":
    console.log("Cukup");
    break;
  default:
    console.log("Tidak lulus");
}
