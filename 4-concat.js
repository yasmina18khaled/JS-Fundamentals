const args = process.argv.slice(2);

if(args.length === 0){
    console.log('undefined is undefined');
}else if(args.length === 1){
    console.log(process.argv[2] + ' is undefined');
}else {
    console.log(process.argv[2] + ' is ' + process.argv[3]);
}