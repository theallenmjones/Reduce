// let nums = [ 20, 30, 40 ,50, -2, -6, 67, 23, 88, 95];

// // find the highest number with > and find the lowest number with <
// let min = nums[0];
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > min) min = nums[i];
   
// }
// console.log(min);


// const wholeName = 'allenmichaeljones'

// const newObject = {};
// for ( let char of wholeName){
//      if (newObject[char]){
//          newObject[char] += 1;
//      } else {
//          newObject[char] = 1;
//      }
// }

// finding how many times a letter is repeated within a string

// const words = [ 'hey', 'how', 'are', 'you', 'today']
// words.reduce(function(accum, otherValue){
//     console.log(accum, otherValue);
//     return accum + otherValue;
// })



//---------------------------------------------QUESTION 1
function extractValue(arr, key) {
    return arr.reduce(function(acc, obj) {
      acc.push(obj[key]);
      return acc;
    }, []);
  }
//---------------------------------------------QUESTION 2
  function vowelCount(str) {
    const vowels = 'aeiou';
  
    return [...str.toLowerCase()].reduce(function(acc, char) {
      if (vowels.includes(char)) {
        if (acc[char]) {
          acc[char]++;
        } else {
          acc[char] = 1;
        }
      }
      return acc;
    }, {});
  }
//---------------------------------------------QUESTION 3
  function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc, obj) {
      obj[key] = value;
      acc.push(obj);
      return acc;
    }, []);
  }
  //---------------------------------------------QUESTION 4
  function partition(arr, callback) {
    return arr.reduce(function(acc, val) {
      if (callback(val)) {
        acc[0].push(val);
      } else {
        acc[1].push(val);
      }
      return acc;
    }, [[], []]);
  }
    