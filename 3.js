function memo(fn) {
  let cache = {};
  let del;
  return function () {
    let counter = Object.keys(cache);
    let args = JSON.stringify(arguments);
    if (args in cache) {
      console.log('Взято из кэша');
      del = args
      return cache[args];
    }

    else {
          if (counter.length < 2) {
            let result = fn.apply(null,arguments);
            cache[args] = result;
            return result;
          }
          else if (counter.length >= 2)  {
            delete cache[del]
            let result = fn.apply(null,arguments);
            cache[args] = result;
            return result;
          }
        }

    }
}
function multi(a,b) {
  return a*b
}
const memSum = memo(multi);

