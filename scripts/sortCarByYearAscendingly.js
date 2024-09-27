function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  var len = result.length
  // Mengurutkan dari tahun terkecil
  for (var i = 0 ; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      //Jika tahun mobil pertama lebih besar dari tahun berikutnya maka ditukar posisinya
      if (result[j].year > result[j + 1].year) {
        //Menyimpan mobil pada result[j] ke variabel temp
        var temp = result[j];
        //mobil pada result[j+1] disimpan di result[j]
        result[j] = result[j + 1];
        //mobil pada temp disimpan ke result[j+1] 
        result[j + 1] = temp;
      }
    }
  }
   
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
