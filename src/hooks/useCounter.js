import { useState } from "react";

/* 
1. Complete the useCounter hook functionality here
2. Feel free to change any boilerplate logic present inside this custom hook
3. DO NOT CHANGE the name `useCounter` of this custom hook
*/
export const useCounter = (initial) => {
  const {initialValue,minCount,maxCount} = initial
  
  const [countValue,setCountValue] = useState(initialValue)
  console.log(initialValue)

  // const countValue = "";
  const incCount = (value) => {
    if(countValue >= maxCount){
    return false
    }else{
      value ? setCountValue(prev => prev+value) : setCountValue(prev=>prev + 1)
    }
  };

  const decCount = (value) => {
    if(countValue <= minCount){ return false}
    else{
      value? setCountValue(prev=> prev-value) : setCountValue(prev=>prev-1)
    }
  };

  return {countValue,incCount, decCount};
};
