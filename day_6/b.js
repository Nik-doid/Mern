let arraaay = [2,54,23,16,57,24];
arraaay.push(30)
// console.log(arraaay[2])
for(let i=0;i<arraaay.length;i++){
    for(let j =0;j<i;j++){
        let temp;
        if(arraaay[i]<arraaay[j]){
            temp = arraaay[i]
            arraaay[i] = arraaay[j]
            arraaay[j] = temp
        }
    }
}
console.log(arraaay)

let duelists = ["jett","reyna","phoenix","neon","iso","raze"]
console.log(duelists) 

const mappedArray = arraaay.map((item)=>(item+1))
console.log(mappedArray)

const DUELISTS = duelists.map((item) =>(item.toLocaleUpperCase()))
console.log(DUELISTS)