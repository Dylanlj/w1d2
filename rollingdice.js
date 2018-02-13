var diceRolls = process.argv.slice(2,3)
var rollResults = "";
for(i = 0; i < diceRolls; i++){
	var singleRoll = Math.random() * 5 + 1;
	rollResults +=  singleRoll.toFixed() + " ";
}
console.log(rollResults);