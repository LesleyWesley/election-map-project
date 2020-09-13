var winner;

var candidateProfile = function(name, color) {
  var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.partyColor = color;
    politician.totalVotes = 0;


  politician.addTotalVotes = function() {

    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++)
      {
        this.totalVotes = this.totalVotes + this.electionResults[i];
      }
  };

  return politician;
};





/* politicans */

var cranjis = candidateProfile("Cranjis McBasketball", [132, 17, 11]);
var dandy = candidateProfile("Dandy Chiggins", [245, 141, 136]);

cranjis.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

dandy.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

cranjis.electionResults[9] = 1;
dandy.electionResults[9] = 28;

cranjis.electionResults[4] = 17;
dandy.electionResults[4] = 38;

cranjis.electionResults[43] = 11;
dandy.electionResults[43] = 27;

var setStateResults = function(state) {

  theStates[state].winner = null;

  if (cranjis.electionResults[state] > dandy.electionResults[state]) {
    theStates[state].winner = cranjis;
  } else if (dandy.electionResults[state] > cranjis.electionResults[state]) {
    theStates[state].winner = dandy;
  }

  var stateWinner = theStates[state].winner;

  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }

  /*State Table */

    var stateResults = document.getElementById('stateResults');
    var header = stateResults.children[0];
    var mainSection= stateResults.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var candidateOneName = mainSection.children[0].children[0];
    var candidateOneResults = mainSection.children[0].children[1];
    var candidateTwoName = mainSection.children[1].children[0];
    var candidateTwoResults = mainSection.children[1].children[1];
    var winnerName = mainSection.children[2].children[1];

    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
    candidateOneName.innerText = cranjis.name;
    candidateTwoName.innerText = dandy.name;
    candidateOneResults.innerText = cranjis.electionResults[state];
    candidateTwoResults.innerText = dandy.electionResults[state];

    if (theStates[state].winner === null){
    winnerName.innerText = "DRAW";
} else {
    winnerName.innerText = theStates[state].winner.name;
}

}

cranjis.addTotalVotes();
dandy.addTotalVotes();

console.log(cranjis.totalVotes);
console.log(dandy.totalVotes);


/* Winner Announcement */

if (cranjis.totalVotes > dandy.totalVotes) {
  winner = cranjis.name;
} else if (dandy.totalVotes > cranjis.totalVotes){
  winner = dandy.name;
} else {
  winner = "Uh-oh!  It's a tie!  Time for a recount!";
}

console.log(winner + " has won the election!  Congratulations!");

var countryResults = document.getElementById('countryResults');
var row = countryResults.children[0].children[0];

row.children[0].innerText = cranjis.name;
row.children[1].innerText = cranjis.totalVotes;
row.children[2].innerText = dandy.name;
row.children[3].innerText = dandy.totalVotes;
row.children[5].innerText = winner;
