function summing(arr) {
  var str = '';
  var sumFunc = arr => arr.reduce((sum,num)=>sum + (Array.isArray(num) ? sumFunc(num)  : num),0);

  function depth(arr, level = 0){
      if (Array.isArray(arr)){
          return (level > 0 ? 1 : 0) + arr.map(function(array){
              return depth(array, level+1)
          }).reduce((sum, v) => sum + v, 0)
      }
      return 0;
  }

  str = `Сумма чисел массива равно ${sumFunc(arr)}. Максимальная вложенность ${depth(arr)} `;
    return str;
}


console.log(summing([1,6,[5,9]]))
console.log(summing([1,3,[7,2,[3,4]]]))
