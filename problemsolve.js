let n = 95; 
const array = new Array(n).fill(1);
console.table(array);

function checkIndex(index) {
    if (index >50) {   
        console.error(`Error: index ${index} exceeded 100`);
        return false; 
    }
    return true;
}

if (n % 2 === 0) {
    let mid = Math.floor(n / 2);
    let left = mid - 1;
    let right = mid;
    while (left >= 0 && right < n) {
        if (!checkIndex(left) || !checkIndex(right)) break;
        array[left] = array[right] = 0;
        console.table([...array]);
        left--;
        right++;
    }
} else {
    let mid = Math.floor(n / 2);
    if (!checkIndex(mid)) return;
    array[mid] = 0;
    console.table([...array]);
    let left = mid - 1;
    let right = mid + 1;
    while (left >= 0 && right < n) {
        if (!checkIndex(left) || !checkIndex(right)) break;
        array[left] = array[right] = 0;
        console.table([...array]);
        left--;
        right++;
    }
}
