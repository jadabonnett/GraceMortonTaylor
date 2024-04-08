//export function setup() {
  function Player(name, personalScore, personalFouls, correctAnswers) {
    this.name = name;
    this.personalScore = personalScore;
    this.personalFouls = personalFouls;
    this.correctAnswers = correctAnswers;
  }

  let player1 = new Player("Jada", 100, 0, 5);
  let player2 = new Player("Ashley", 20, 0, 1);
  let player3 = new Player("Mason", 40, 2, 2);
  let player4 = new Player("Ellie", 20, 0, 1);
  let player5 = new Player("DMike", 40, 3, 2);
  let player6 = new Player("Dyson", 40, 1, 2);
  let currentQuizzer = player1;

  export function Team(score, timeouts, fouls, players, teamName, league, church) {
    this.score = score;
    this.timeouts = timeouts;
    this.fouls = fouls;
    this.players = players;
    this.teamName = teamName;
    this.league = league;
    this.church = church;
  }

  export let teamA = new Team(
    180,
    3,
    2,
    [player1, player2, player3, player4],
    "Upland 1",
    "HS",
    "UCC"
  );
  export let teamB = new Team(
    80,
    2,
    4,
    [player5, player6],
    "Upland 2",
    "MS",
    "Taylor Chapel"
  );

  export function setListA(players){
    let dropdown = document.getElementById("TeamAPlayers");
    var opt = document.createElement("option"); 
    opt.text = players.name;
    opt.value = players; //values have to be strings... not sure what to do about that yet trying to get the correct player when chosen to attribute points
    //may have to wait to make those changes until we are not using a dropdown.
    dropdown.options.add(opt);
  }
//}

//export default setup