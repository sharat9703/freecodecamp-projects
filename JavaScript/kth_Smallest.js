let kthSmallestElement=(arr,k)=>{
    let arr1 = [...arr];
    arr1.sort((a,b)=>{return a-b});

    return arr1[k-1];
}
console.log(kthSmallestElement([23,43,546,234,432,123,44,41,34,54],5));