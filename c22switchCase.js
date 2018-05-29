function checkCar() {
  var car;
  var favCar = prompt("input a car");

  switch(favCar) {
    case "BMW":
      car = "German car";
      break;
    case "Ford":
      car = "American car";
      break;
    case "Peugeot":
      car = "French car";
      break;
    default:
      car = "invalid car";
      break;
      
  }
  console.log(car)
}
checkCar()
