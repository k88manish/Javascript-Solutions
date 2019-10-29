const person = {
  firstName: 'Manish',
  lastName: 'Kumar'
};

function printInfo(age, state) {
  console.log(
    this.firstName + ' ' + this.lastName + ', Age: ' + age + ', State: ' + state
  );
}

const bindedPringInfo = printInfo.bind(person, 30);
bindedPringInfo('Delhi');

Function.prototype.myBind = function(...args) {
  const fn = this;
  const [scope, ...params] = args;
  return function(...bindedArgs) {
    fn.apply(scope, [...params, ...bindedArgs]);
  };
};

const myBindedPringInfo = printInfo.myBind(person, 30);
myBindedPringInfo('Delhi');
