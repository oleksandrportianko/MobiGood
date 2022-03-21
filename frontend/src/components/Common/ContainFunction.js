export function contains(arr, elem) {
   for (var i = 0; i < arr.length; i++) {
       if (arr[i] === elem) {
           return true;
       }
   }
   return false;
}
