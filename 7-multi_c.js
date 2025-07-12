const x = process.argv[2];
const num = Number(x);
if(isNaN(num)){
    console.log('Missing number of occurrences');
}
for ( let i = 0; i < num; i++){
    console.log('C is fun');
}