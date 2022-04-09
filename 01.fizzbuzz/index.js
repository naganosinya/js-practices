'use strict';

(function () {
  [...Array(20).keys()].map((i) => ++i).forEach((number) => {
    if (number % 15 === 0) {
      console.log('fizzbuzz')
    } else if (number % 5 === 0) {
      console.log('Buzz')
    } else if (number % 3 === 0) {
      console.log('Fizz')
    } else {
      console.log(number)
    }
  })
})()
