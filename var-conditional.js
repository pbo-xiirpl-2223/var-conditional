// ===VARIABLE & DATA PRIMITIF==
// tanpa notasi
// var
// let
// const

// namavariable = 'string';
// namavariable = 1;
// namavariable = true;

// var number = 1; // public
// let angka = 2; // private
// const phi = 3.14; // konstan

// if (1 > 0) {
// 	var a = 2;
// 	let b = 3;
// 	console.log(b);
// }

//==CONDITIONAL IF==
// if (1 > 0) {
// 	if (1 < 2) {
// 		var a = 2;
// 		let b = 3;
// 		console.log(b);
// 	}
// }

// if (1 > 0 && 1 < 2) {
// 	console.log("nested menggunakan operator &&");
// }

// if (1 > 0) {
// 	if (1 < 2) {
// 		console.log("nested biasa");
// 	}
// }
// 1 > 0 ? console.log(b); : jikasalah

/*
    Buatlah sebuah program untuk menampilkan pesan AHAY jika string termasuk genap, dan akan menghsilkan pesan YAHA jika string ganjil.

    let string = 'abcd';
    string.length

    . mod (%) jka angak mod 2 = 0 => genap
    . mod (%) jka angak mod 2 = 1 => ganjil
*/

// let string = "";
// let jumlahChar = string.length;
// console.log(jumlahChar);

// if (jumlahChar > 0) {
// 	if (jumlahChar % 2 == 0) {
// 		console.log("AHAY");
// 	} else if (jumlahChar % 2 == 1) {
// 		console.log("YAHA");
// 	}
// } else {
// 	console.log("string kosong!");
// }

// if (jumlahChar > 0 && jumlahChar % 2 == 0) {
// 	console.log("AHAY");
// } else if (jumlahChar > 0 && jumlahChar % 2 == 1) {
// 	console.log("YAHA");
// } else {
// 	console.log("string kosong!");
// }
// let hari = -1;
// switch (hari) {
// 	case 0:
// 		console.log("Minggu");
// 		break;
// 	case 1:
// 		console.log("Senin");
// 		break;
// 	default:
// 		console.log("tidak valid");
// 		break;
// }

/*

 * Buatlah program untuk memilih menu makanan dan 
 * membayar sesuai harga makan, bila uang kurang dari 
 * harga maka pesan  = "Uang kurang!", bila uang pas dari
 * harga maka muncul pesan = "Anda memesan (menu yang 
 * dipilih), selamat menikmati..", bila uang lebih dari
 * harga maka muncul pesan = "Anda memesan (menu yang
 * dipilih), kembalian anda Rp. (sisa-uang),s
 * elamat menikmati.."

 *MENU:
 *1 - Seblak Rp. 5000
 *2 - Basreng Rp. 7000
 *3 - Batagor Rp. 10000

*/

// let pilihMenu = 1;
// let uang = 10000;
// switch (pilihMenu) {
// 	case 1:
// 		if (uang > 5000) {
// 			console.log(
// 				`Anda memesan Seblak, kembalian anda Rp.${
// 					uang - 5000
// 				}, selamat menikmati..`
// 			);
// 		} else if (uang == 5000) {
// 			console.log(`Anda memesan Seblak, selamat menikmati..`);
// 		} else {
// 			console.log(`Uang anda kurang !`);
// 		}
// 		break;
// 	case 2:
// 		uang > 7000
// 			? console.log(
// 					`Anda memesan ${menu[2]}, kembalian anda Rp.${
// 						uang - 7000
// 					}, selamat menikmati..`
// 			  )
// 			: uang == 7000
// 			? console.log(`Anda memesan ${menu[2]}, selamat menikmati..`)
// 			: console.log(`Uang anda kurang !`);

// 		break;
// 	default:
// 		break;
// }
