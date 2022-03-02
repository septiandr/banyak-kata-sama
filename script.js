const input = ['xc', 'dz', 'bbb', 'dz']  
const query = ['bbb', 'ac', 'dz','xc']  
const arr =[]

for (let i=0; i<query.length;i++){
  let count=0;
  for(let j=0; j<input.length;j++){
    if(query[i]==input[j]){
      count = count+1;
    }
  }
  arr.push(count)
}
console.log(arr)
