function fizzbuzz(n){

    for(let i=1;i<=n;i++){
        if(i%3===0 && i%5 ===0) console.log('fizzbuzz');
        else if(i%3===0) console.log('fizz');
        else if(i%5===0) console.log('buzz');
        
        else console.log(i);
    }

}


function fizzbuzz2(n){

    for(let i=1;i<=n;i++){
       let str="";
       if(i%3===0){
        str+='fizz';
       
       }
       if(i%5===0){
        str+='buzz';
       
       }
       if(str==="") str+=i;
       console.log(str);
    }


}

function fizzbuzz3(n){
    let cnt3=1;
    let cnt5=1;
    for(let i=1;i<=n;i++){
        let str="";
        if(cnt3===3) {
            str+='fizz';
            cnt3=0;
        }
        if(cnt5===5) {
            str+='buzz';
            cnt5=0;
        }

        if(str==="" ) str+=i;
        cnt3++;
        cnt5++;

      
        console.log(str);
    }


}




let n=process.argv.pop();
// fizzbuzz(n);
// fizzbuzz2(n);
fizzbuzz3(n);