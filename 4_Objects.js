car = {type: "BMW", model: "X-570", color: "Gold", getInfo: function() { return this.type + " " + this.model }}

console.log(car);
console.log(car.getInfo());


const bike = new Object();
bike.name = "BMW"
bike.model = "R1250"

console.log(bike["name"])
