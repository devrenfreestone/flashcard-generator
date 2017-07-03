// console.log('main.js working');
var clozeCard = require ('./clozeCard.js');
var basicCard = require ('./basicCard.js');
var inquirer = require ('inquirer');

var card = new clozeCard ("this should read cloze","cloze");
var flashArray = [];



// console.log(clozeCard("Hi","Bye"));

var flashCard = new clozeCard ("Devren","Freestone")

inquirer.prompt ([{
	name: "name",
	message: "What is this flashcard's name?"
},{
	text: "text",
	message: "What do you want the first part of the flashcard to say? (Remember to leave out the key words-we'll get those in a second)"
},{
	cloze: "cloze",
	message: "Okay, now we need the key words that you'll be trying to remember. What are they?"
}]).then(function(answers){
	var newcard = new clozeCard(answers.text,answers.cloze);
})