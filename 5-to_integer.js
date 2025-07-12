const arg = process.argv[2];
const number = Number(arg);
if(!isNaN(number)){
    console.log(`My Number : ${parseInt(number)}`);
}else {
    console.log('Not a Number');
}