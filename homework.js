// Do not change any of the function names

function invokeCallback(cb) {
  //invoke cb
	cb();
  // invoke cb
}

function sumArray(numbers, cb) {
  var sum = 0;
	for (var i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}

	cb(sum);
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
}

function forEach(arr, cb) {
  arr.forEach(function(value) {
		cb(value);
	});
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
}

function map(arr, cb) {
  var newArray = [];

	newArray = arr.map(function(value) {
		return cb(value);
	});
	return newArray;
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
}

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};