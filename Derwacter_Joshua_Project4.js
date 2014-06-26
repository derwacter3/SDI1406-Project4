//alert("JavaScript works!")
// Joshua Derwacter 
// SDI1406
// Project 4

// Number Library
var numberLibrary = function () {
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
