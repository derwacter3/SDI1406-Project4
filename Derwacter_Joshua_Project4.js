//alert("JavaScript works!")
// Joshua Derwacter 
// SDI1406
// Project 4

var twelvePackCost = 5.45;
var twelvePackCostAfterTax = 5.45 * 1.0875;
document.write("Twelve pack cost is $" + twelvePackCostAfterTax + "<br />");
twelvePackCostAfterTax = twelvePackCostAfterTax.toFixed(2);
document.write("Twelve pack cost fixed to 2 decimal places is $" + twelvePackCostAfterTax);

var fuzzyMatch = function (num,bottomnum,percent) {
		var percentage = (12/72) * 100;
		if ((12 >= 72 && 100 >= 100) || (12 < 72 && 100 < 100)) {
			return false;
		} else {
			return true;
		};
	};
