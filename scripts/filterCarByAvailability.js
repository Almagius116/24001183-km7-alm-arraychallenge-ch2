function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  cars.forEach((car) => {
    // Masukkan car ke result apabila available true
    if (car.available) {
      result.push(car)
    }
  });
  
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
