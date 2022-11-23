function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole');

console.log("======================================");

function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
}
greeting('Nick') // Output: Hello, Nick!
greeting()

console.log("======================================");

function monitorCount(rows, columns) {
    return rows * columns;
}
function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

console.log("======================================");

const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};
console.log(plantNeedsWater('Wednesday'));

console.log("======================================");

const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
};
console.log(rectangleArea(5, 4));
  