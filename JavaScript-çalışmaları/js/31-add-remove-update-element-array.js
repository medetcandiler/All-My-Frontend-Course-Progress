// Add an element in the Array and remove an element in the array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let items=[10, 20, 30, 40]
console.log('items-first state', items)

//Array: add new element at the end of the array => push()
items.push(50)
console.log('50: ', items)

//Array: add new element at the beggining of the array => unshift()
items.unshift(0);
console.log('0: ', items)

//Array : remove the last element of the array => pop() 
// we declared the pop process in order to keep last element in a declaration otherwise it stay in the air 
let lastItem= items.pop()
console.log(' after pop(): ',items) // 
console.log('lastItem: ', lastItem)

//Array: remove the first element of the array =>shift()
let firstItem= items.shift()
console.log(' after shift(): ',items)
console.log('firstItem: ', firstItem)

// How to change a value of element inside the array 

// change second element
items=['a', 'b', 'c', 'd', 'e']
let changeSecondIndex= items[1]=3
console.log(items)

//change last element
items[items.length-1]='last item has changed'
console.log(items)

//change middle element
items[Math.floor(items.length/2)]= 'mid item has been changed'
console.log(items)


// if we changed let say 10000 element of the array it creates empty elements
items[10000]='10000element has changed'
console.log(items) // you can see on the console it creates 9995 number of empty array element ///// be caraful while changing an element