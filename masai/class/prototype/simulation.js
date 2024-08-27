function Vehicle(brand, model, speed, fuelType) {
  this.model = model;
  this.brand = brand;
  this.speed = speed;
  this.fuelType = fuelType;
}
Vehicle.prototype.accelerate = function () {
  this.speed = this.speed + 1;
  console.log(this.speed);
};
Vehicle.prototype.brake = function () {
  this.speed = this.speed - 1;
  console.log(this.speed);
};
Vehicle.prototype.refuel = function () {
  console.log("the vechile is refueling");
};

function Car(brand, speed, model, fuelType,numberOfWheels) {
  let car1 = new Vehicle(this, brand, speed, model, fuelType);
  console.log(car1);
}
Car.prototype.numberOfWheels  = function(){
    console.log(this.numberOfWheels);
}
Car.prototype.honk=function(){
    console.log("honk");
}
let biggest=new Car("Tata",100,152,"Disel",4)
biggest.numberOfWheels()