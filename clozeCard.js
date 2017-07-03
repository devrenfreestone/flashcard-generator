//method replace for strings on the string prototype string.prototype.replace("","");
// console.log('cloze card');

var Cloze = function(name,text,cloze,partial){
	this.name = name;
	this.text = text;
	this.cloze = cloze;
	this.partial = text + "_______";
	console.log(text + " " + cloze);
};

// Cloze.prototype.replace(cloze,"_____")

module.exports = Cloze;