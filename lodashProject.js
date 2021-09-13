let _ = {
  
    //method 1 - recreating lodash's clamp method by comparing lowerClampedValue (higher of the number and lower bound) to the upper bound to return the clamped value
    clamp (number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
  
    //method 2 - recreating lodash's inRange method which returns a boolean value if the number is between the range - start and end, or 0 and end
    inRange (number, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      }; 
      if (start > end) {
        let temp = end
        end = start
        start = temp
      };
      let isInRange = start <= number && number < end;
      return isInRange
    },
  
    //method 3 - recreating lodash's word method but without the [pattern] functionality. Takes in a string as a parameter and splits it up into an array of seperated words
    words (string) {
      let words = string.split(' ')
      return words
    },
  
    //method 4 - recreating lodash's pad method but without the [chars] functionality. It takes in a string and length as parameters and if the length is longer than the string, it evenly distributes padding either side of the string to meet the length. If it's odd, it adds extra padding to the end
    pad (string, length) {
      if (length <= string.length) {
        return string
      }; 
      let startPaddingLength = Math.floor((length-string.length)/2);
      let endPaddingLength = length-string.length-startPaddingLength;
      let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      return paddedString;
    },
  
    //Method 5 - recreating lodash's has method. Checks if a key is present in an object and returns a boolean value
    has (object, key) {
      let hasValue = object[key];
      if (hasValue !== undefined) {
        return true;
      } return false;
    },
  
    //Method 6 - recreating lodash's invert method. It iterates through each key/value pair and swaps the key and value
    invert (object) {
      let invertedObject = {};
      for (key in object) {
        const originalValue = object[key];
        invertedObject[originalValue] = key;
      }
      return invertedObject;
    },
  
    //Method 7 - recreating lodash's findKey method - it iterates through each key/value pair and returns a truthy value for the first pair that meets the functions requirements
    findKey (object, predicate) {
      for (key in object) {
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
          return key;
        };
      };
      undefined
      return undefined;
    },
  
    //Method 8 - recreating lodash's drop method. It takes in an array, and number of elements to drop from the start and returns a new array without those elements
    drop (array, n) {
      if (n === undefined) {
        n = 1;
      }
      let droppedArray = array.slice(n, array.length);
      return droppedArray;
    },
  
    //Method 9 - recreating lodash's dropWhile method. Continues to drop n number of elements from the start of an array as long as the predicate is truthy
    dropWhile (array, predicate) {
      let dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
  
    //Method 10 - recreating lodash's chunk method. This splits an array into pieces/chunks the size you define
    chunk (array, size) {
      if (size === undefined) {
        size = 1;
      };
      let arrayChunks = [];
      for (let i = 0; i < array.length; i+= size) {
        let arrayChunk = array.slice(i, (i+size));
        arrayChunks.push(arrayChunk);
      };
      return arrayChunks;
    }
  };
  
  // Do not write or modify code below this line.
  module.exports = _;