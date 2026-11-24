class Player{
  constructor(name, team, ppg){
    this.name = name,
    this.team = team,
    this.ppg = ppg
  }
}
const NBA1 = new Player("Derick", "team1", 11.2);
const NBA2 = new Player("Duku", "team2", 20.2);
​
function sumPPG(playerOne, playerTwo){
  return playerOne.ppg + playerTwo.ppg
}