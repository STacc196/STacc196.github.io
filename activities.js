let test = '[{"cat" : "gabby", "moves" : "bite scratch meow -"},{"cat" : "milo", "moves" : "sit belly-rub stay -"}]';
let obj = JSON.parse(test);
const {cat, moves} = obj[0];
console.log(moves);
test = [['cat','gabby', 'silly'],['moves','run', 'mean'],['evilpoints',5000, 'hungry']]
// const [gabby,moves,evilpoints] = test;
// for(const data of test) {
//     const [val1,val2,val3] = data;
//     console.log(val1 + " " + val2);
// }