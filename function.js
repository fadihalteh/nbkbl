function fun(nums){
    for (let i=0;i<=nums.length;i++){
        if(!nums.includes(i)){
            return (i);
        }
    }
}
console.log(fun([0,3,2,4,1]));