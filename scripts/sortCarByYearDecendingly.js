function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  var len = result.length
  // Mengurutkan dari tahun terbesar
  for (var i = 0 ; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      //Jika tahun mobil pertama lebih kecil dari tahun berikutnya maka ditukar posisinya
      if (result[j].year < result[j + 1].year) {
        //Menyimpan mobil pada result[j] ke variabel temp
        var temp = result[j];
        //Mobil pada result[j+1] disimpan di result[j]
        result[j] = result[j + 1];
        //Mobil pada temp disimpan ke result[j+1] 
        result[j + 1] = temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
