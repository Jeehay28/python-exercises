function solution(a, b) {
   let sum = 0;
   if (a === b) {
       sum = a;
   } else {
       for(let i = Math.min(a, b); i <= Math.max(a, b); i++) {
           sum += i;
       }   
   }
    return sum;
}