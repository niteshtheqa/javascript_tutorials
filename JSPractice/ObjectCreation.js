//1.Object Literals : {}

const user = {
    name: 'Michael',
    age: 25,
    country: 'Malta',
    Occupation: 'IT Professional'
};

console.log(user.name)

// Constructor Function:

function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};


const bmwCar = new Car('BMW', 'M5', 20000);
console.log("Brand : " + bmwCar.brand + "  Model: " + bmwCar.model + " Price: " + bmwCar.price);

// Class Style:
class Customer {
    constructor(name, product) {
        this.name = name;
        this.product = product;
    }

    addToCart(){
        
    }
}