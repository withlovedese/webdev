const _ = require('lodash');

const numbers =[1,2,4,565,75,6,4,5476,99];

_.each(numbers, function(number, i){
    console.log(number);
})