function twoSum(nums: number[], target: number): number[] {
    let array = [];
    let k = 0;
    for(let i = 0; i< nums.length; i++){  
        for(let j = 1-k; j<nums.length; j++){
            if(j<0) continue
            if(nums[i]+nums[j] === target && i !== j){
                array.push(i,j)
                return array;
            }    
        }
        k++;
    }
    return array;
};