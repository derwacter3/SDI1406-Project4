//alert("JavaScript works!")
// Joshua Derwacter 
// SDI1406
// Project 4

// Number Library
var numbLibrary = function () {
var twelvePackCost = function (num,afterDecimal) {
        return Number(num.toFixed(afterDecimal));
    };


var fuzzyMatch = function (num,bottomnum,percent) {
		var percentage = (12/72) * 100;
		if ((12 >= 72 && 100 >= 100) || (12 < 72 && 100 < 100)) {
			return false;
		} else {
			return true;
		};
	};

var timeBtDates = function (date1,date2) {
		var results = [];
		var difference = (date1 > date2) ? date1.getTime() - date2.getTime() : date2.getTime() - date1.getTime();
		results[3] = difference / 1000;
		results[2] = results[3] / 60;
		results[1] = results[2] / 60;
		results[0] = results[1] / 24;
		return results;
	};
};

  var stringToNumber = function (num) {
		return Number(num);
    };

	return {
		"twelvePackCost" : twelvePackCost,
		"fuzzyMatch" : fuzzyMatch,
		"timeBetweenDates" : timeBetweenDates,
		"stringToNumber" : stringToNumber;
		};
	};
};

// Array Library
var ArrayLibrary = function () {
	var smallValueGreaterNumberInArray = function (array,num) {
		array.sort(function(a,b){return a-b;});
		if (num >= array[0] && num < array[array.length-1]) {
			array.push(num);
			array.sort(function(a,b){return a-b;});
			var result = array[array.lastIndexOf(num) + 1];
			return result;
		} else {
			return null;
		};
		
var totalValueNumberInArray = function (array) {
		var total = 0;
		for (var i = 0, j = array.length; i < j; i++) {
			if (array[i]/1 === array[i]) {
				total += array[i];
			};
		};
		return total;
	};

// Number Testing
var numLibrary = numbLibrary ();
console.log(numLib.twelvePackCost(5.926875,2));
console.log(numLib.fuzzyMatch(72,12,16));
console.log(numLib.fuzzyMatch(12,72,16));
var date1 = new Date(2014,8,12);
var date2 = new Date(2014,3,6);
var timeConversion = numLib.timeBetweenDates(date1,date2);
console.log("Difference in days: " + timeConversion[0] + ", in hours: " + timeConversion[1]);
console.log(numLib.stringToNumber("3693"));
console.log(" ");

// Array Testing
var arrayLib = ArrayLibrary();
var numList = [1,5,9,10,12,2,4,8];
console.log(arrayLib.smallValueGreaterNumberInArray(numList,1));
var randomList = [23,"peach","penguin",32,66,"23"];
console.log(arrayLib.totalValueNumberInArray(randomList));
