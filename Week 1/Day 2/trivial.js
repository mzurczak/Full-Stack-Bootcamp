function Question(question, choices, correctAnsw, category){
  this.question=question;
  this.choices=choices;
  this.correctAnsw=correctAnsw;
  this.category=category;
}

Question.prototype.showQuestion = function (){
  var content = this.question;
  for (var i in this.choices){
    content += ("\n"+this.choices[i]);
  }
  return window.prompt(content);
}

function Trivial(){
  this.questions={};
  this.numOfQuestion=0;
  this.currentQuestion=1;
  this.players={};
  this.numOfPlayers=0;
  this.currentPlayerIndex=1;
}

Trivial.prototype.addQuestion = function (question){
  this.numOfQuestion++;
  var questionId=this.numOfQuestion;
  this.questions[questionId]=question;
}

Trivial.prototype.askQuestion = function(){
  if (this.currentQuestion>this.numOfQuestion) this.currentQuestion=1;
  var givenAnswer = this.questions[this.currentQuestion].showQuestion();
  if (givenAnswer.toUpperCase()===this.questions[this.currentQuestion].correctAnsw) {
    var category = this.questions[this.currentQuestion].category;
    this.players[this.currentPlayerIndex].addScore(category);
    window.alert('Correct! Great job!' /*Your score: ' + this.players[this.currentPlayerIndex].score*/);
  }
  else window.alert('Your answer is wrong!'/*' Your score: ' + this.players[this.currentPlayerIndex].score*/);
  this.currentQuestion++;
}

Trivial.prototype.play = function(){
  this.currentQuestion=1;
  this.score=0;
  for (var i in this.questions) this.askQuestion();
}

Trivial.prototype.addPlayer = function (player){
  this.numOfPlayers++;
  this.players[this.numOfPlayers]=player;
}

Trivial.prototype.playAgainst = function(){
  this.currentQuestion=1;
  this.currentPlayerIndex=1;
  for (var i in this.questions) {
    if (this.currentPlayerIndex>this.numOfPlayers) this.currentPlayerIndex=1;
    window.alert('Now it is time for ' + this.players[this.currentPlayerIndex].name);
    this.askQuestion();
    this.currentPlayerIndex++;
  }
  var finalMessage = 'It is all! Final results: ';
  for (var i in this.players) {
    finalMessage += this.players[i].finalResult();
  }
  window.alert(finalMessage);
}

Trivial.prototype.setPlayers = function (){
  var playersCounter=0;
  var name;
  do{
    name = window.prompt('Give next player\'s name :');
    if (name.length!==0){
      var player = new Player(name);
      this.addPlayer(player);
      playersCounter++;
    }
  }
  while (name.length>0);
  if (playersCounter>1) this.playAgainst();
  else this.play();
}

function Player (name){
  this.name=name;
  this.score={};
}

Player.prototype.addScore = function(category){
  if (!this.score[category]) this.score[category]=1;
  else this.score[category]++;
  // console.log(this.score[category]);
}

Player.prototype.finalResult = function () {
  var totalScore=0;
  var message = ("\n" + this.name + " :");
  for (var i in this.score){
    totalScore += this.score[i];
    message += ("\n- " + i + " : " + this.score[i] + " points.")
  }
  message += ("\nTOTAL : " + totalScore + " points.")
  return message;
}

var quiz = new Trivial();

var question1 = new Question('Capital of France', ['A - Paris', 'B - Rome'], 'A', 'geography');
var question2 = new Question('Capital of Italy', ['A - Milan', 'B - Rome'], 'B', 'geography');
var question3 = new Question('Capital of Spain', ['A - Valencia', 'B - Madrid'], 'B', 'geography');
var question4 = new Question('Capital of Poland', ['A - Warsaw', 'B - Poznan'], 'A', 'geography');
var question5 = new Question('Who won the last Champions League Final', ['A - Real Madrid', 'B - FC Barcelona'], 'A', 'football');
var question6 = new Question('Who is the actual World Champion in football', ['A - Argentina', 'B - Germany'], 'B', 'football');
var question7 = new Question('Who sang the song \'We are the champions\'', ['A - Scorpions', 'B - Queen'], 'B', 'music');
var question8 = new Question('From which record comes \'Smells like teen spirit\' by Nirvana', ['A - Bleach', 'B - Nevermind'], 'B', 'music');


var michal = new Player('Michal');
var amy = new Player('Amy');

quiz.addQuestion(question1);
quiz.addQuestion(question2);
quiz.addQuestion(question3);
quiz.addQuestion(question4);
quiz.addQuestion(question5);
quiz.addQuestion(question6);
quiz.addQuestion(question7);
quiz.addQuestion(question8);
// quiz.addPlayer(michal);
// quiz.addPlayer(amy);
// quiz.askQuestion();
// quiz.play();
// quiz.playAgainst();
quiz.setPlayers();
