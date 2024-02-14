var dateDiffInDays = function (date1, date2) {
  const startDate = new Date(date1);
	const endDate = new Date(date2);
	let result = parseInt((endDate-startDate)/(1000*60*60*24))
	return result;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
