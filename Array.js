const bikes = [
  { name: "Yamaha R15", price: 500000, stock: 5 },
  { name: "Suzuki Gixxer", price: 350000, stock: 3 },
  { name: "Honda CBR 150R", price: 450000, stock: 4 },
  { name: "KTM Duke 200", price: 600000, stock: 2 },
  { name: "Bajaj Pulsar 150", price: 225000, stock: 6 },
  { name: "Royal Enfield Classic 350", price: 580000, stock: 1 }
];

function filterBikeByPrice(bikes,maxPrice){
    return bikes.filter(bikes=> bikes.price <= maxPrice);
//     return bikes.filter(function (bike) {
//         return bike.price <= maxPrice;
//     });
 }

function UpdatedBikeByPrice(bikes, price){
    return bikes.map(bike => {
        if (bike.price <= 600000) {
            return { ...bike, price: bike.price * 0.9 }; 
        }
        else {
            return { ...bike, price: bike.price * 0.95 }  
        }      
    }); 
}

let TotalStock = bikes.reduce(( total, bike) => total + bike.stock, 0);

let TotalStockPrice = bikes.reduce((sum,bike) => sum + (bike.price * bike.stock), 0);

console.log(filterBikeByPrice(bikes, 500000));
console.log(UpdatedBikeByPrice(bikes));
console.log("Total stock of bikes: " + TotalStock);
console.log("Total stock price: " + TotalStockPrice);