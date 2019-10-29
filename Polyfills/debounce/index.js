function callAPI() {
  console.log('API is called');
}

function debounce(fn, delay) {
  const scope = this;
  let timer;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(scope, args);
    }, delay);
  };
}

const debouncedCallAPI = debounce(callAPI, 300);
