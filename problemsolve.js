let n = 5; 
const array = new Array(n).fill(1);
console.log(array);

if(n%2 === 0){
    let left = n/2 - 1;
    let right = n/2;
    while(left >= 0 && right < n){
        array[left] = array[right] = 0;
        console.log([...array]);
        left--;
        right++;
    }
}

else {
    let mid = Math.floor(n/2);
    array[mid] = 0;
   console.log([...array]);
    let left = mid - 1;
    let right = mid + 1;
    while(left >= 0 && right < n){
        array[left] = array[right] = 0;
        console.log([...array]);
        left--;
        right++;
    }   
}
