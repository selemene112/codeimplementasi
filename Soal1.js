function isPalindrome(string) {
  // Menghapus spasi dan mengubah semua huruf menjadi lowercase
  string = string.replace(/\s/g, '').toLowerCase();
  // Membalikkan string
  var reversedString = string.split('').reverse().join('');
  // Membandingkan string asli dengan string yang sudah dibalik
  if (string === reversedString) {
    return 'String tersebut adalah palindrome.';
  } else {
    return 'String tersebut bukan palindrome.';
  }
}

console.log(isPalindrome('woow    '));
