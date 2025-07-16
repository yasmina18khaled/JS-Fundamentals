 let arg = process.argv[2];
 let num = Number(arg);

 if (isNaN(num)){
     console.log(1);
 } 
 else {
    function factorial(n){
       let result = 1;
       for (let i = 2; i <= n; i++){
           result *= i;
        
       }
       return result; 
    }
    console.log(factorial(num)); 
 }
 
