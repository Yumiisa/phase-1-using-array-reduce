const batteryBatches = [4, 5, 3, 4, 4, 6, 5]
let totalBatteries= batteryBatches.reduce(function(total,batteries){
    return total +batteries
});

// Code your solution here
/*
const couponLocations = [
    { room: 'Living room', amount: 5 },
    { room: 'Kitchen', amount: 2 },
    { room: 'Bathroom', amount: 1 },
    { room: 'Master bedroom', amount: 7 }
  ];
  
function ourReduce(arr, reducer, init) {
    let accum = init;
    for (const element of arr) {
        accum = reducer(accum, element);
    };
    return accum;
}

function couponCounter(totalAmount, location) {
  return totalAmount + location.amount;
console.log(ourReduce(couponLocations, couponCounter, 0)); // LOG: 15
console.log(ourReduce(couponLocations, couponCounter, 3)); // LOG: 18

const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator}, 7)
// => 12
console.log(doubledAndSummed)*/

