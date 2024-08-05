const arr1 = [1, 2, 3, 4, 5];
console.log(arr1?.some((val) => val === 5)); //return true if any one element matches the val

console.log(arr1?.reduce((acc, val) => acc * val)); //arguments(accumalator and a value).
console.log(arr1?.reduce((acc, val) => acc + val)); //Returns the accumulated value based on the condition

console.log(arr1?.every((val) => val === 2)); //checks if every element in the array is same as given in the condition
const arr2 = [1, 1, 1, 1, 1];
console.log(arr2?.every((val) => val === 1)); //returns a boolean

console.log(arr1.map((val) => val * 2)); //return a new array that contains an image of each element of the array.

console.log(
  arr1?.map((val) => {
    if (val > 3) {
      return val * 2;
    } else {
      return val;
    }
  })
);
//https://www.ggorantala.dev/how-to-prevent-cannot-read-property-map-of-undefined/

const arr3 = [1, 2, 3, [5, 6, 7, [8, 9, 4]], 56]; //flat() methods takes the depth of the arr as argument.
console.log(arr3.flat(2)); //It can be a number, infinity (depending upon the depth). flat() flat(depth)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

console.log(arr1.filter((val) => val !== 2)); //returns a new arr based on conditions

const myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
];

console.log(myAwesomeArray.findIndex((val) => val.id === 2));
console.log(myAwesomeArray.find((val) => val.name === "Ali"));

const arr4 = [1, 2, 3, 4, 5];
// The first argument (0) is the value
// The second argument (1) is the starting index (considered while adding)
// The third argument (3) is the ending index (Ignored while adding)
console.log(arr4.fill(0, 1, 3));
//-------> Output : [1, 0, 0, 4, 5]

console.log(arr4.includes(3));
