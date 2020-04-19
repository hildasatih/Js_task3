


 
 function divide(num){
    let a =[];
    for(let i=1; i<=num; i++){
       if(i%2===0 && i%3===0 && i%5===0){
           a.push('yu-gi-oh')

       }else if(i%2===0 && i%3===0 && i%5==!0){
           a.push('yu-gi')

       }else if(i%2===0 && i%3==!0 && i%5===0){
           a.push('yu-oh')
           
       }else if(i%2==!0 && i%3===0 && i%5===0){
           a.push('gi-oh')
   
       }else if(i%2===0){
           a.push('yu')
       } else if(i%3===0){
   
           a.push('gi')
       }else if(i%5===0){
           a.push('oh')
       }else{
           a.push(i)
       } 
       
     
    }
    console.log(a);
     return a;
}
divide(100);
divide(30);
