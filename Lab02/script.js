//this  keyword in JavaScript

var vehicleName = 'Toyota';

function printVehicleNameOuter(){
    console.log(this.vehicleName);
}

console.log(this);

printVehicleNameOuter();

var vehicle = {
     vehicleName: 'Nissan',
    printVehicleNameInner:printVehicleNameOuter
};

vehicle.printVehicleNameInner();

var vehicle = {
    vehicleName: 'Nissan',
    printVehicleNameInner : function () {
        console.log("1. "+this.vehicleName);
        return function (){
            console.log("2. "+this.vehicleName);
        }
    }
};

var execute = vehicle.printVehicleNameInner();
//execute();   // Output    1.Nissan   2.Toyota

//execute.call(vehicle);    //Output    1.Nissan    2.Nissan

//execute.bind(vehicle);      //Output    1.Nissan

var exe = vehicle.printVehicleNameInner().bind(vehicle);
exe();            //Output    1.Nissan    2.Nissan

//Promises

function fetchUsers(){
    fetch('https://api.github.com/users').then(function (response) {
        return response.json();
    }).then(function (json){
        console.log(json)
    })
}

fetchUsers();

function fetchUsers2(){
    return fetch('https://api.github.com/users').then(response => response.json());
}

fetchUsers2().then(function (json){
    console.log(json);
});

//Classes

function Vehicle(type){
    Vehicle.VehicleCount++;
    this.type = type;
}

Vehicle.VehicleCount = 0;
Vehicle.prototype.drive = function(){
    console.log('Vehicle is driving');
};

var vehicle = new Vehicle('Toyota');
function Car(type) {
    Vehicle.call(this.type);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.balanceWhells = function () {
    console.log('Wheels are balance');
};

var car = new Car('Nissan');
car.drive();

car.balanceWhells();
console.log(Vehicle.VehicleCount);