function PijarFood(harga, voucher, jarak, pajak) {
  let potongan = 0;
  let biaya_antar = jarak > 2 ? 5000 + (jarak - 2) * 3000 : 5000;
  let pajak_harga = pajak ? harga * 0.05 : 0;

  if (voucher === 'PIJARFOOD5' && harga >= 50000) {
    potongan = Math.min(harga * 0.5, 50000);
  } else if (voucher === 'DITRAKTIRPIJAR' && harga >= 25000) {
    potongan = Math.min(harga * 0.6, 30000);
  } else if ((voucher = false)) {
    return;
  }

  const subtotal = harga - potongan + biaya_antar + pajak_harga;

  return {
    harga,
    potongan,
    biaya_antar,
    pajak: pajak_harga,
    subtotal,
  };
}

// Contoh penggunaan fungsi
const result = PijarFood(110000, false, 4, false);
console.log('Harga :', result.harga);
console.log('Potongan :', result.potongan);
console.log('Biaya Antar :', result.biaya_antar);
console.log('Pajak :', result.pajak);
console.log('SubTotal :', result.subtotal);
