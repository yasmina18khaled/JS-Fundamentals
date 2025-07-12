const size = process.argv[2];
const Size = Number(size);
if(isNaN(Size)){
    console.log('Missing size');
} 

for (let i = 0; i < Size; i++){
    let row = '';
    for (let y = 0; y < Size; y++){
       row += 'X';
      
    }
    console.log(row);
   
}