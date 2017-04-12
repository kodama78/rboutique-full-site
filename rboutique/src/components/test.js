let age = 60;
console.log(age); // this will output 60

age = 80;
console.log(age); // age will now be 80

let me = 'Shawn';
var other = 'Dan'
let points = 89;
console.log(me); // will result in 'Shawn'
console.log(other); // will result in 'Dan'

if (points < 90) {
    let me = 'loser';
    var other = 'winner';
    console.log (me) //result will be 'loser'
    console.log (other) //result will be 'winner!'
}

console.log(me); //result will still be 'Shawn'
console.log(other); //result will still be 'winne r!'