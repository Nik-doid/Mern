let list = [12,33,12,34,55,32,67,123];

let stat =0
 for(let i=0;i<list.length;i++){
      for (let j=0;j<i;j++) {

        if(list[i]==list[j]){
            // console.log(list[i]);
            stat =1
        }
      
        if (stat==1){
            break;
        }
        break
    }
 }

let x = 100;

// x<10 ? (console.log("less than 10")) :(console.log("more than 10"))

// x > 10 && (console.log('yes'))

function hello(){
    console.log(x)
}
hello()