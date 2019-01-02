function addSomeMultiples(number){

  var multiplesArray =[0];
  var multiplesString = "";
  var i;
  for (i = 1; i < number; i++) {
  	if (i % 3 == 0 || i % 5 == 0) {
      	multiplesString = (multiplesString + i + ", ");
   			multiplesArray.push(i);
    }
  };

 	var cleanerNumList = multiplesString.replace(/,([^,]*)$/,".$1")
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  var multiplesSum = multiplesArray.reduce(reducer);

  return "The original number was " + number + ". <br><br>"  +
  "The multiples of 3 and 5 that are less than " + number + " are " +
  cleanerNumList + "<br><br>" + "The sum of those numbers is " +
  multiplesSum + ".";
};

function processIt() {
  var val2 = document.getElementById("chosenNumber").elements.namedItem("number").value;
  document.getElementById("answer").innerHTML = addSomeMultiples(val2);
}
