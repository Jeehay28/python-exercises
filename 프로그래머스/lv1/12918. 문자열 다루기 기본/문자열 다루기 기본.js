function solution(s) {
   if (s.length === 4 || s.length === 6) {
      return s.match(/[0-9]/g).join("") === s ? true : false;
   } 
    return false;
}