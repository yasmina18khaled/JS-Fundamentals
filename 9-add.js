const num1 = process.argv[2];
const num2 = process.argv[3];

const a = Number(num1);
const b = Number(num2);

if (isNaN(a) &&  isNaN(b) ){
    console.log('NaN');
}
function add(a,b){
    console.log(a+b);
}
add(a,b);