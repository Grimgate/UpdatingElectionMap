var makePolitician = function(name, result, votes, partyColor) {
  var politician = {};
  politician.name = name;
  politician.electionResults = result;
  politician.totalVotes = votes;
  politician.partyColor = partyColor;
  politician.tallyUpTotalVotes = function() {
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };

  return politician;
};

var jane = makePolitician("Jane Fakey", null, 0, [245, 141, 136]);
var john = makePolitician("John False", null, 0, [132, 17, 11]);
jane.electionResults = [
  5,
  1,
  7,
  2,
  33,
  6,
  4,
  2,
  1,
  14,
  8,
  3,
  1,
  11,
  11,
  0,
  5,
  3,
  3,
  3,
  7,
  4,
  8,
  9,
  3,
  7,
  2,
  2,
  4,
  2,
  8,
  3,
  15,
  15,
  2,
  12,
  0,
  4,
  13,
  1,
  3,
  2,
  8,
  21,
  3,
  2,
  11,
  1,
  3,
  7,
  2
];

john.electionResults = [
  4,
  2,
  4,
  4,
  22,
  3,
  3,
  1,
  2,
  15,
  8,
  1,
  3,
  9,
  0,
  6,
  1,
  5,
  5,
  1,
  3,
  7,
  8,
  1,
  3,
  3,
  1,
  3,
  2,
  2,
  6,
  2,
  14,
  0,
  1,
  6,
  7,
  3,
  7,
  3,
  6,
  1,
  3,
  17,
  3,
  1,
  2,
  11,
  2,
  3,
  1
];
john.tallyUpTotalVotes();
jane.tallyUpTotalVotes();
console.log("test1");
var setStateResults = function(state) {
  theStates[state].winner = null;

  var stateInfoTable = document.getElementById("stateResults");
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];

  if (jane.electionResults[state] > john.electionResults[state]) {
    theStates[state].winner = jane;
  } else if (jane.electionResults[state] < john.electionResults[state]) {
    theStates[state].winner = john;
  }

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

  candidate1Name.innerText = john.name;
  candidate2Name.innerText = jane.name;

  candidate1Results.innerText = john.electionResults[state];
  candidate2Results.innerText = jane.electionResults[state];

  if (theStates[state].winner === null) {
    winnersName.innerText = "DRAW";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }

  var stateWinner = theStates[state].winner;
  if (theStates[state].winner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }
};

console.log("test2");

var setStateColor = function(state) {
  var stateWinner = theStates[state].winner;
};

console.log("test3");
var countryWinner = null;
var setCountryWinner = function() {
  if (john.totalVotes > jane.totalVotes) {
    countryWinner = "John False";
  } else if (john.totalVotes < jane.totalVotes) {
    countryWinner = "Jane Fakey";
  } else {
    countryWinner = "DRAW!";
  }
};
setCountryWinner();
var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0];

row.children[0].innerText = john.name;
row.children[1].innerText = john.totalVotes;
row.children[2].innerText = jane.name;
row.children[3].innerText = jane.totalVotes;
row.children[5].innerText = countryWinner;

// calling the method for each politician, add below the code that updates the electionResults arrays

//console log total votes
console.log(john.totalVotes);
console.log(jane.totalVotes);
console.log(jane.partyColor);
console.log(john.partyColor);
