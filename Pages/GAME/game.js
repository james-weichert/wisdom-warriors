


//--------GAME-WIDE VARIABLES---------\\

var scrollSpeed = 80;

var userName;

var selectedCharacter;

var defineFavoriteSubject;
var defineWorstSubject;

var isItMainMenu = 1;

var isSpanish = 0;

var onLoadParam;

var str = "Oh no! The Castle's magical pencil has been stolen!";
var strESP = "\xA1No! \xA1El l\xC1piz m\xC1gico del castillo est\xC1 robado!"; 
var i = 0;
var isOver = false;

var aOptionOne = 0;
var aOptionTwo = 0;
var aOptionThree = 0;
var aOptionFour = 0;

var readANoteCancel;
var findCluesCancel;

var whichOptionDidYouChoose;

var flashState;

var levelOneSelectedOption;

var levelOnePuzzleNum = 0;

var puzzleOneVal = 0;
var puzzleTwoVal = 0;
var puzzleThreeVal = 0;

var j = 0;

var gemLimit;

var xpLimit;

var LangWrongOne;
var LangWrongTwo;
var LangWrongThree;
var LangWrongFour;
var LangWrongFive;
var LangWrongSix;
var LangWrongSeven;
var LangWrongEight;
var LangWrongNine;
var LangWrongTen;
var LangWrongEleven;
var LangWrongTwelve;

var levelOneScienceNum = 0;

var scienceOneVal;
var scienceTwoVal;
var scienceThreeVal;
var scienceFourVal;
var scienceFiveVal;
var scienceSixVal;

var SuccessLang = 0;
var FailLang = 0;

var SuccessSocial = 0;
var FailSocial = 0;

var SuccessMath = 0;
var FailMath = 0;

var SuccessScience = 0;
var FailScience = 0;

var DateNow = new Date();
var DateNowTime = DateNow.toLocaleDateString();

var actualGems = 0;

var actualMathXP = 0;
var actualLangXP = 0;
var actualSocialXP = 0;
var actualScienceXP = 0;

var lastPlayed;


var speedCoefficient = 1;

var actualSpeed;


//-----------------------\\

function onLoadStartFunc(x) {

onLoadParam = x;

isSpanish = JSON.parse(localStorage.getItem("spanish"));

if (JSON.parse(localStorage.getItem("spanish")) != null){
isSpanish = JSON.parse(localStorage.getItem("spanish"));
} else {
	isSpanish = 0;
}

//alert(isSpanish);



if (isSpanish == 0) {
	changeToEnglish();
} else if (isSpanish == 1) {
	changeToSpanish();
}



if (onLoadParam > 0) {
whichCharacter();
}

if (onLoadParam == 2){

	lastPlayed = new Date();

	var setDate = lastPlayed.toLocaleDateString();
	var setTime = lastPlayed.toLocaleTimeString();

	localStorage.setItem("setDate", JSON.stringify(setDate));
	localStorage.setItem("setTime", JSON.stringify(setTime));

	document.getElementById('pencil').style.opacity = "1";
	setTimeout(poofFunction, 7000);
}

}

//--------PENCIL POOF-------------\\

function poofFunction(){
	document.getElementById('pencil').style.transition = "opacity 1s linear 0s";
	document.getElementById('pencil').style.opacity = 0;
	setTimeout(merlinChange, 1500);
}
function merlinChange() {
	document.getElementById('merlin').src = "../../Assets/Characters/Single/MerlinSuprised.gif";
	setTimeout(ohNo, 500);
}
function ohNo() {
	document.getElementById('speakerCircle').src = "../../Assets/Characters/MerlinCoin.png"

	document.getElementById('hiddenForInvis').style.transition = "opacity 1s linear 0s";
	document.getElementById('hiddenForInvis').style.opacity = 0.9;
	document.getElementById('speakerCircle').style.transition = "opacity 1s linear 0s";
	document.getElementById('speakerCircle').style.opacity = 1;


	document.getElementById('textArea').style.opacity = 1;

	setTimeout(theCastle,1000);
}

function theCastle() {
	i = 0;
	isOver = false;
	str = "Oh no! The Castle's magical pencil has been stolen!";
	strESP = "\xA1No! \xA1El l\xC1piz m\xC1gico del castillo est\xC1 robado!";

	type();

	i = 0;
	isOver = false;
	str = "Oh no! The Castle's magical pencil has been stolen!";
	strESP = "\xA1No! \xA1El l\xC1piz m\xC1gico del castillo est\xC1 robado!";


	setTimeout(withoutIt, 6000);
}

function withoutIt() {
	type();

	i = 0;
	isOver = false;
	str = "Without it, all our powers will go away.";
	strESP = "Sin \xC9l, todas nuestras fuerzas se van a desaparecer.";

	setTimeout(youHaveTo, 6000);
}

function youHaveTo() {
	type();

	i = 0;
	isOver = false;
	str = "You have to get it back before";
	strESP = "Necesitas recuperar el l\xC1piz antes de que";

	setTimeout(theThiefLeaves, 4000);
}

function theThiefLeaves() {
	type();

	i = 0;
	isOver = false;
	str = "the thief leaves the Castle with the pencil.";
	strESP = "el ladr\xD3n puede salir del castillo con el l\xC1piz.";

	setTimeout(quickUseThe, 5000);
}

function quickUseThe() {
	type();

	i = 0;
	isOver = false;
	str = "Quick, use the powers you have just learned to get the pencil back.";
	strESP = "\xA1R\xC1pido! Usa las destrezas que ya aprendiste para recuperar el l\xC1piz!";

	setTimeout(butHurry, 7500);
}

function butHurry() {
	type();

	i = 0;
	isOver = false;
	str = "But hurry, do not let the thief escape!";
	strESP = "\xA1Pero apresurarte, no puedes permitir que el ladr\xD3n se escapa!"

	setTimeout(doNotWorry, 8000);
}

function doNotWorry() {

	selectedCharacter = JSON.parse(localStorage.getItem("characterSelected"));


	if (selectedCharacter == "Ajax") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/AjaxCoin.png";
	} else if (selectedCharacter == "Nova") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/NovaCoin.png";
	} else if (selectedCharacter == "Dana") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/DanaCoin.png";
	} else if (selectedCharacter == "Jade") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/JadeCoin.png";
	} else if (selectedCharacter == "Sofia") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/SofiaCoin.png";
	} else if (selectedCharacter == "Quinn") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/QuinnCoin.png";
	} else if (selectedCharacter == "Sage") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/SageCoin.png";
	} else if (selectedCharacter == "Ramon") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/RamonCoin.png";
	}

	type();

	i = 0;
	isOver = false;
	str = "Do not worry, Master Merlin. I will not let you down!";
	strESP = "No se preocupe Se\xD1or Merlin. \xA1Prometo que no voy a fallarse!";

	setTimeout(whatPowerOne, 7000);
}

function whatPowerOne () {

	document.getElementById('speakerCircle').src= "../../Assets/LOGO2.png";

	/*if (isSpanish == 0) {
		document.getElementById("whatPowerUse").play();
	}*/

	type();

	i = 0;
	isOver = false;
	str = "WHAT POWER WILL YOU USE TO GET THE PENCIL BACK?";
	strESP = "\xBFCU\xC1L FUERZA QUIERES USAR PARA RECUPERAR EL L\xC1PIZ?";

	setTimeout(createOptions, 2000);
}

function createOptions () {
	var popup = document.createElement("IMG");
	popup.src = "../../Assets/Popup.png";
	popup.setAttribute("id", "popup");

	document.body.appendChild(popup);

	//-----\\

	var table = document.createElement("TABLE");
	table.setAttribute("id", "optionTable");
	document.body.appendChild(table);

	var row = document.createElement("TR");
	row.setAttribute("id", "myRow");
	document.getElementById('optionTable').appendChild(row);

	var cell = document.createElement("TD");
	var image = document.createElement("IMG");
	image.setAttribute("id", "solveAPuzzle");

	if (isSpanish == 0) {
	image.src = "../../Assets/Options/SolveAPuzzle.png";
} else if (isSpanish == 1) {
	image.src = "../../Assets/Options/SolveAPuzzleESP.png";
}
	image.setAttribute("class", "optionImage");
	cell.appendChild(image);

	document.getElementById("myRow").appendChild(cell);

	var cellTwo = document.createElement("TD");
	var imageTwo = document.createElement("IMG");
	imageTwo.setAttribute("id", "findClues");
	if (isSpanish == 0) {
	imageTwo.src = "../../Assets/Options/FindClues.png";
} else if (isSpanish == 1) {
	imageTwo.src = "../../Assets/Options/FindCluesESP.png";
}
	imageTwo.setAttribute("class", "optionImage");
	cellTwo.appendChild(imageTwo);

	document.getElementById("myRow").appendChild(cellTwo);

	var rowTwo = document.createElement("TR");
	rowTwo.setAttribute("id", "myRowTwo");
	document.getElementById('optionTable').appendChild(rowTwo);

	var cellThree = document.createElement("TD");
	var imageThree = document.createElement("IMG");
	imageThree.setAttribute("id", "buildATrap");
	if (isSpanish == 0) {
	imageThree.src = "../../Assets/Options/BuildATrap.png";
} else if (isSpanish == 1) {
	imageThree.src = "../../Assets/Options/BuildATrapESP.png";
}
	imageThree.setAttribute("class", "optionImage");
	cellThree.appendChild(imageThree);

	document.getElementById("myRowTwo").appendChild(cellThree);

	var cellFour = document.createElement("TD");
	var imageFour = document.createElement("IMG");
	imageFour.setAttribute("id", "readANote");
	if (isSpanish == 0) {
	imageFour.src = "../../Assets/Options/ReadANote.png";
} else if (isSpanish == 1) {
	imageFour.src = "../../Assets/Options/ReadANoteESP.png";
}
	imageFour.setAttribute("class", "optionImage");
	cellFour.appendChild(imageFour);

	document.getElementById("myRowTwo").appendChild(cellFour);



	setTimeout(fadeOptions, 1200);
}

function fadeOptions () {
	document.getElementById('popup').style.transition = "opacity 1s linear 0s";
	document.getElementById('optionTable').style.transition = "opacity 1s linear 0s";
	document.getElementById('popup').style.opacity = 0.9;
	document.getElementById('optionTable').style.opacity = 1;

	document.getElementById('solveAPuzzle').addEventListener("mouseover", function () {

		if (isSpanish == 0) {
	document.getElementById('speakerCircle').src= "../../Assets/Coins/MathCoin.png";
} else if (isSpanish == 1) {
	document.getElementById('speakerCircle').src= "../../Assets/Coins/MathCoinESP.png";
}

			type();

			i = 0;
			isOver = false;
			str = "Solve a puzzle to open a locked door and chase after the thief.";
			strESP = "Resolvar una rompecabeza para abrir esta puerta cerrada y perseguir el ladr\xD3n.";
	});

	document.getElementById('findClues').addEventListener("mouseover", function () {

		if (isSpanish == 0) {
	document.getElementById('speakerCircle').src= "../../Assets/Coins/SocialStudiesCoinTwo.png";
} else if (isSpanish == 1) {
	document.getElementById('speakerCircle').src= "../../Assets/Coins/SocialStudiesCoinTwoESP.png";
}

			type();

			i = 0;
			isOver = false;
			str = "Listen to Master Merlin's story about the magical pencil.";
			strESP = "Escuchar a la cuenta de Se\xD1or Merlin sobre el l\xC1piz m\xC1gico.";
			findCluesCancel = setTimeout(findCluesTwo, 4000);
	});

	document.getElementById('buildATrap').addEventListener("mouseover", function () {

		if (isSpanish == 0) {
	document.getElementById('speakerCircle').src= "../../Assets/Coins/ScienceCoin.png";
} else if (isSpanish == 1) {
	document.getElementById('speakerCircle').src= "../../Assets/Coins/ScienceCoinESP.png";
}
			

			type();

			i = 0;
			isOver = false;
			str = "Build a machine that will trap the thief when he tries to escape.";
			strESP = "Construir una m\xC1quina que puede atrapar el ladr\xD3n cuando trata de escapar.";
	});

	document.getElementById('readANote').addEventListener("mouseover", function () {

		if (isSpanish == 0) {
	document.getElementById('speakerCircle').src= "../../Assets/Coins/LanguageArtsCoin.png";
} else if (isSpanish == 1) {
	document.getElementById('speakerCircle').src= "../../Assets/Coins/LanguageArtsCoinESP.png";
}


			type();

			i = 0;
			isOver = false;
			str = "Read a note left behind by the thief";
			strESP = "Leer una nota que el ladr\xD3n dej\xD3";
			readANoteCancel = setTimeout(readANoteTwo, 3000);
	});

//--------\\
	
	document.getElementById('findClues').addEventListener("mouseout", function () {
			clearTimeout(findCluesCancel);
	});
	document.getElementById('readANote').addEventListener("mouseout", function () {
			clearTimeout(readANoteCancel);
	});

//----------\\

	document.getElementById('solveAPuzzle').addEventListener("click", function () {
			clearTimeout(findCluesCancel);
			clearTimeout(readANoteCancel);

			levelOneSelectedOption = 1;
			localStorage.setItem("levelOneSelectedOption", JSON.stringify(levelOneSelectedOption));


			document.getElementById('optionTable').style.transition = "opacity 1s linear 0s";
			document.getElementById('optionTable').style.opacity = 0;

			var parentDelete = document.body;
			var childDelete = document.getElementById('optionTable');
			parentDelete.removeChild(childDelete);

			setTimeout(solveAPuzzleExe, 250);
	});

	document.getElementById('findClues').addEventListener("click", function () {
			clearTimeout(findCluesCancel);
			clearTimeout(readANoteCancel);

			levelOneSelectedOption = 2;
			localStorage.setItem("levelOneSelectedOption", JSON.stringify(levelOneSelectedOption));

			document.getElementById('optionTable').style.transition = "opacity 1s linear 0s";
			document.getElementById('optionTable').style.opacity = 0;

			var parentDelete = document.body;
			var childDelete = document.getElementById('optionTable');
			parentDelete.removeChild(childDelete);

			setTimeout(findCluesExe, 250);
	});

	document.getElementById('buildATrap').addEventListener("click", function () {
			clearTimeout(findCluesCancel);
			clearTimeout(readANoteCancel);

			levelOneSelectedOption = 3;
			localStorage.setItem("levelOneSelectedOption", JSON.stringify(levelOneSelectedOption));

			document.getElementById('optionTable').style.transition = "opacity 1s linear 0s";
			document.getElementById('optionTable').style.opacity = 0;

			var parentDelete = document.body;
			var childDelete = document.getElementById('optionTable');
			parentDelete.removeChild(childDelete);

			setTimeout(buildATrapExe, 250);
	});

	document.getElementById('readANote').addEventListener("click", function () {
			clearTimeout(findCluesCancel);
			clearTimeout(readANoteCancel);

			levelOneSelectedOption = 4;
			localStorage.setItem("levelOneSelectedOption", JSON.stringify(levelOneSelectedOption));

			document.getElementById('optionTable').style.transition = "opacity 1s linear 0s";
			document.getElementById('optionTable').style.opacity = 0;

			var parentDelete = document.body;
			var childDelete = document.getElementById('optionTable');
			parentDelete.removeChild(childDelete);

			setTimeout(readANoteExe, 250)
	});
}


function findCluesTwo() {
	type();

	i = 0;
	isOver = false;
	str = "Maybe he can give you some clues about what happened.";
	strESP = "Tal vez puede darte algunos pistas sobre qu\xC9 pas\xD3.";
	
}
function readANoteTwo() {
	type();

	i = 0;
	isOver = false;
	str = "to find out where the thief is going.";
	strESP = "para determinar a d\xD3nde va el ladr\xD3n.";

}

//------\\

function solveAPuzzleExe() {
	var selectedOption = document.createElement("IMG");

	if (isSpanish == 0) {
	selectedOption.src = "../../Assets/Coins/MathCoin.png";
} else if (isSpanish == 1) {
	selectedOption.src = "../../Assets/Coins/MathCoinESP.png";
}
	selectedOption.setAttribute("id", "selectedOptionImage");

	document.body.appendChild(selectedOption);

	document.getElementById('speakerCircle').src = "../../Assets/Characters/MerlinCoin.png";


	document.getElementById('selectedOptionImage').style.transition = "opacity 2s linear 0s";
	document.getElementById('selectedOptionImage').style.opacity = 1;

	type();

	i = 0;
	isOver = false;
	str = "Good choice! Now go catch the thief. I know you can do this!";
	strESP = "Una elecci\xD3n muy buena. Ahora va a para el ladr\xD3n. S\xC9 que puedes hacerlo.";

	whichOptionDidYouChoose = 1;

	setTimeout(advanceToSection, 9000);
}
function findCluesExe() {
	var selectedOption = document.createElement("IMG");

	if (isSpanish == 0) {
	selectedOption.src = "../../Assets/Coins/SocialStudiesCoinTwo.png";
} else if (isSpanish == 1) {
	selectedOption.src = "../../Assets/Coins/SocialStudiesCoinTwoESP.png";
}
	selectedOption.setAttribute("id", "selectedOptionImage");

	document.body.appendChild(selectedOption);

	document.getElementById('speakerCircle').src = "../../Assets/Characters/MerlinCoin.png";


	document.getElementById('selectedOptionImage').style.transition = "opacity 2s linear 0s";
	document.getElementById('selectedOptionImage').style.opacity = 1;

	type();

	i = 0;
	isOver = false;
	str = "Good choice! Now go catch the thief. I know you can do this!";
	strESP = "Una elecci\xD3n muy buena. Ahora va a para el ladr\xD3n. S\xC9 que puedes hacerlo.";

	whichOptionDidYouChoose =2;

	setTimeout(advanceToSection, 9000);

}
function buildATrapExe() {
	var selectedOption = document.createElement("IMG");
	if (isSpanish == 0) {
	selectedOption.src = "../../Assets/Coins/ScienceCoin.png";
} else if (isSpanish == 1) {
	selectedOption.src = "../../Assets/Coins/ScienceCoinESP.png";
}
	
	selectedOption.setAttribute("id", "selectedOptionImage");

	document.body.appendChild(selectedOption);

	document.getElementById('speakerCircle').src = "../../Assets/Characters/MerlinCoin.png";


	document.getElementById('selectedOptionImage').style.transition = "opacity 2s linear 0s";
	document.getElementById('selectedOptionImage').style.opacity = 1;

	type();

	i = 0;
	isOver = false;
	str = "Good choice! Now go catch the thief. I know you can do this!";
	strESP = "Una elecci\xD3n muy buena. Ahora va a para el ladr\xD3n. S\xC9 que puedes hacerlo.";

	whichOptionDidYouChoose = 3;

	setTimeout(advanceToSection, 9000);

}
function readANoteExe() {
	var selectedOption = document.createElement("IMG");
	if (isSpanish == 0) {
	selectedOption.src = "../../Assets/Coins/LanguageArtsCoin.png";
} else if (isSpanish == 1) {
	selectedOption.src = "../../Assets/Coins/LanguageArtsCoinESP.png";
}
	selectedOption.setAttribute("id", "selectedOptionImage");

	document.body.appendChild(selectedOption);

	document.getElementById('speakerCircle').src = "../../Assets/Characters/MerlinCoin.png";


	document.getElementById('selectedOptionImage').style.transition = "opacity 2s linear 0s";
	document.getElementById('selectedOptionImage').style.opacity = 1;

	type();

	i = 0;
	isOver = false;
	str = "Good choice! Now go catch the thief. I know you can do this!";
	strESP = "Una elecci\xD3n muy buena. Ahora va a para el ladr\xD3n. S\xC9 que puedes hacerlo.";

	whichOptionDidYouChoose = 4;

	setTimeout(advanceToSection, 9000);
}

function advanceToSection() {
	if (whichOptionDidYouChoose == 1) {
		document.getElementById('selectedOptionImage').style.transition = "opacity 2s linear 0s";
		document.getElementById('selectedOptionImage').style.opacity = 0;

		window.location.href= "LevelOne/Math.html";
		return false;
	} else if (whichOptionDidYouChoose == 2) {
		document.getElementById('selectedOptionImage').style.transition = "opacity 2s linear 0s";
		document.getElementById('selectedOptionImage').style.opacity = 0;

		window.location.href= "LevelOne/SocialStudies.html";
		return false;
	} else if (whichOptionDidYouChoose == 3) {
		document.getElementById('selectedOptionImage').style.transition = "opacity 2s linear 0s";
		document.getElementById('selectedOptionImage').style.opacity = 0;

		window.location.href= "LevelOne/Science.html";
		return false;
	} else if (whichOptionDidYouChoose == 4) {
		document.getElementById('selectedOptionImage').style.transition = "opacity 2s linear 0s";
		document.getElementById('selectedOptionImage').style.opacity = 0;

		window.location.href= "LevelOne/LanguageArts.html";
		return false;
	}
}
//--------L1 LANG ARTS-------------\\

function startLOneLang() {
	isSpanish = JSON.parse(localStorage.getItem("spanish"));

	lastPlayed = new Date();
	var setDate = lastPlayed.toLocaleDateString();
	var setTime = lastPlayed.toLocaleTimeString();

	localStorage.setItem("setDate", JSON.stringify(setDate));
	localStorage.setItem("setTime", JSON.stringify(setTime));

	if (isSpanish == 0 ) {
		document.getElementById('GoblinNote').src = "../../../Assets/L1 Language Arts/GoblinNote.png";
	} else if (isSpanish == 1) {
		document.getElementById('GoblinNote').src = "../../../Assets/L1 Language Arts/GoblinNoteESP.png";
	}

	whichCharacterLOne();

	setTimeout(LOneTextBox, 4000);
}
function LOneTextBox() {
	
	selectedCharacter = JSON.parse(localStorage.getItem("characterSelected"));


	if (selectedCharacter == "Ajax") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/AjaxCoin.png";
	} else if (selectedCharacter == "Nova") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/NovaCoin.png";
	} else if (selectedCharacter == "Dana") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/DanaCoin.png";
	} else if (selectedCharacter == "Jade") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/JadeCoin.png";
	} else if (selectedCharacter == "Sofia") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/SofiaCoin.png";
	} else if (selectedCharacter == "Quinn") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/QuinnCoin.png";
	} else if (selectedCharacter == "Sage") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/SageCoin.png";
	} else if (selectedCharacter == "Ramon") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/RamonCoin.png";
	}

	document.getElementById('hiddenForInvis').style.transition = "opacity 1s";
	document.getElementById('hiddenForInvis').style.opacity = 0.9;
	document.getElementById('speakerCircle').style.transition = "opacity 2s";
	document.getElementById('speakerCircle').style.opacity = 1;


	document.getElementById('textArea').style.opacity = 1;

	setTimeout(hereIsTheNote, 2500);

}

function hereIsTheNote () {
	
	type();

	i = 0;
	isOver = false;
	str = "Oh Look! Here is the note. Let's see what it says here...";
	strESP = "Veemos qu\xC9 dice la nota...";

	setTimeout(noteEnlarge, 4500);
}
function noteEnlarge () {
	document.getElementById('GoblinNote').style.zIndex = 6;
	document.getElementById('GoblinNote').style.transition = "width 3s, margin-top 3s";
	document.getElementById('GoblinNote').style.width = "30vw";
	document.getElementById('GoblinNote').style.marginTop = "1vh";

	setTimeout(hmmNote, 15000);
}

function hmmNote () {
	type();

	i = 0;
	isOver = false;
	str = "Hmmmmmm...";
	strESP = "Hmmmmmm...";

	setTimeout(whereThiefGoing, 10000);
}
function whereThiefGoing() {
	document.getElementById('speakerCircle').src = "../../../Assets/LOGO2.png";
	
	type();

	i = 0;
	isOver = false;
	str = "WHERE IS THE THIEF GOING?";
	strESP = "\xBFA D\xD3NDE VA EL LADR\xD3N?";

	setTimeout(createTableLang, 1500);

}
function createTableLang() {

var table = document.createElement("TABLE");
	table.setAttribute("id", "myTable");
	document.body.appendChild(table);

	var row = document.createElement("TR");
	row.setAttribute("id", "myRow");
	document.getElementById('myTable').appendChild(row);

	var cell = document.createElement("TD");
	var image = document.createElement("IMG");
	if (isSpanish == 0) {
	image.src = "../../../Assets/L1 Language Arts/toTheOcean.png";
} else if (isSpanish == 1) {
	image.src = "../../../Assets/L1 Language Arts/toTheOceanESP.png";
}
	image.setAttribute("class", "myImage");
	image.setAttribute("id", "toTheOcean");
	cell.appendChild(image);

	document.getElementById("myRow").appendChild(cell);

	var cellTwo = document.createElement("TD");
	var imageTwo = document.createElement("IMG");
	if (isSpanish == 0) {
	imageTwo.src = "../../../Assets/L1 Language Arts/toTheDarkForest.png";
} else if (isSpanish == 1) {
	imageTwo.src = "../../../Assets/L1 Language Arts/toTheDarkForestESP.png";
}
	imageTwo.setAttribute("class", "myImage");
	imageTwo.setAttribute("id", "toTheDarkForest");
	cellTwo.appendChild(imageTwo);

	document.getElementById("myRow").appendChild(cellTwo);

	var rowTwo = document.createElement("TR");
	rowTwo.setAttribute("id", "myRowTwo");
	document.getElementById('myTable').appendChild(rowTwo);

	var cellThree = document.createElement("TD");
	var imageThree = document.createElement("IMG");
	if (isSpanish == 0) {
	imageThree.src = "../../../Assets/L1 Language Arts/toTheGreatMountain.png";
} else if (isSpanish == 1) {
	imageThree.src = "../../../Assets/L1 Language Arts/toTheGreatMountainESP.png";
}
	imageThree.setAttribute("class", "myImage");
	imageThree.setAttribute("id", "toTheGreatMountain");
	cellThree.appendChild(imageThree);

	document.getElementById("myRowTwo").appendChild(cellThree);

	var cellFour = document.createElement("TD");
	var imageFour = document.createElement("IMG");
	if (isSpanish == 0) {
	imageFour.src = "../../../Assets/L1 Language Arts/toTheProphecy.png";
} else if (isSpanish == 1) {
	imageFour.src = "../../../Assets/L1 Language Arts/toTheProphecyESP.png";
}
	imageFour.setAttribute("class", "myImage");
	imageFour.setAttribute("id", "toTheProphecy");
	cellFour.appendChild(imageFour);

	document.getElementById("myRowTwo").appendChild(cellFour);


	document.getElementById('popup').style.transition = "opacity 1s linear 0s";
	document.getElementById('popup').style.opacity = 0.9;

	setTimeout(appearOptionTable, 100);

}
function appearOptionTable () {
	document.getElementById('myTable').style.transition = "opacity 1s linear 0s";
	document.getElementById('myTable').style.opacity = 1;

	document.getElementById('toTheOcean').addEventListener("click", function () {
			LOneLangWrong();
	});
	document.getElementById('toTheDarkForest').addEventListener("click", function () {
			LOneLangRight();
	});
	document.getElementById('toTheGreatMountain').addEventListener("click", function () {
			LOneLangWrong();
	});
	document.getElementById('toTheProphecy').addEventListener("click", function () {
			LOneLangWrong();
	});
}

function LOneLangWrong () {
	document.getElementById('speakerCircle').src = "../../../Assets/FalseCoin.png";

	FailLang = FailLang + 1;

	localStorage.setItem("FailLang", JSON.stringify(FailLang));	

	type();

	i = 0;
	isOver = false;
	str = "Hmmmmm...I don't think that's right. TRY AGAIN.";
	strESP = "Hmmmmm...Pienso que no es correcto. TRATA OTRA VEZ.";
}
function LOneLangRight () {

	document.getElementById('speakerCircle').src = "../../../Assets/CheckCoin.png";

	SuccessLang = SuccessLang + 1;

	localStorage.setItem("SuccessLang", JSON.stringify(SuccessLang));	

	type();

	i = 0;
	isOver = false;
	str = "CORRECT! The thief is going to the dark forest.";
	strESP = "\xA1CORRECTO! El ladr\xD3n va al bosque oscuro.";

	document.getElementById('myTable').style.transition = "opacity 1s linear 0s";
	document.getElementById('myTable').style.opacity = 0;

	setTimeout(correctLangCont, 100);	
}
function correctLangCont () {

	document.getElementById("myTable").remove();

	document.getElementById('popup').style.transition = "opacity 1s linear 0s";
	document.getElementById('popup').style.opacity = 0;

	setTimeout(LOneLangThatMust, 4000);
}
function LOneLangThatMust () {

	document.getElementById("popup").remove();

	type();

	i = 0;
	isOver = false;
	str = "That must mean that he is going this way";
	strESP = "Eso debe significar que fui por este camino.";

	var arrowCreated = document.createElement("IMG");
	arrowCreated.setAttribute("id", "osiPointingArrow");
	arrowCreated.src = "../../../Assets/AdvanceArrow.png";

	document.body.appendChild(arrowCreated);

	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 1;

	setTimeout(LOneLangFlashOne, 1500);
}

function LOneLangFlashOne () {
	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 0;

	setTimeout(LOneLangFlashTwo, 1500);
}
function LOneLangFlashTwo () {
	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 1;

	setTimeout(LOneLangFlashThree, 1500);
}
function LOneLangFlashThree () {
	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 0;

	setTimeout(LOneLangFlashFour, 1500);
}
function LOneLangFlashFour () {
	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 1;

	setTimeout(LOneLangFlashFive, 1500);
}
function LOneLangFlashFive () {
	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 0;

	setTimeout(LOneLangFlashSix, 1500);
}
function LOneLangFlashSix () {
	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 1;

	setTimeout(LOneLangArrowDis, 2000);
}
function LOneLangArrowDis () {
	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 0;

	setTimeout(LOneLangTap, 1000);
}
function LOneLangTap () {
	type();

	i = 0;
	isOver = false;
	str = "NOW HURRY! Tap on the right side of the screen to chase after the thief.";
	strESP = "\xA1R\xC1PIDO! Toque en el lado derecho de la pantalla para perseguir al ladr\xD3n.";

	setTimeout(function () {
		window.location.href= "LanguageArtsChase.html";
		return false;
	}, 10000);
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//CONTINUE LANGUAGE ARTS HERE!
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

//--------L1 MATH-------------\\

function LOneMathStart() {
	whichCharacterLOne();

	isSpanish = JSON.parse(localStorage.getItem("spanish"));

	if (isSpanish == 1) {
		document.getElementById('GoblinNote').src = "../../../Assets/L1 Language Arts/GoblinNoteESP.png";
	}

	lastPlayed = new Date();
	var setDate = lastPlayed.toLocaleDateString();
	var setTime = lastPlayed.toLocaleTimeString();

	localStorage.setItem("setDate", JSON.stringify(setDate));
	localStorage.setItem("setTime", JSON.stringify(setTime));

	setTimeout(LOneMathTextBox, 4000);
}

function LOneMathTextBox() {
	selectedCharacter = JSON.parse(localStorage.getItem("characterSelected"));


	if (selectedCharacter == "Ajax") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/AjaxCoin.png";
	} else if (selectedCharacter == "Nova") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/NovaCoin.png";
	} else if (selectedCharacter == "Dana") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/DanaCoin.png";
	} else if (selectedCharacter == "Jade") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/JadeCoin.png";
	} else if (selectedCharacter == "Sofia") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/SofiaCoin.png";
	} else if (selectedCharacter == "Quinn") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/QuinnCoin.png";
	} else if (selectedCharacter == "Sage") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/SageCoin.png";
	} else if (selectedCharacter == "Ramon") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/RamonCoin.png";
	}

	document.getElementById('hiddenForInvis').style.transition = "opacity 1s";
	document.getElementById('hiddenForInvis').style.opacity = 0.9;
	document.getElementById('speakerCircle').style.transition = "opacity 2s";
	document.getElementById('speakerCircle').style.opacity = 1;


	document.getElementById('textArea').style.opacity = 1;

	setTimeout(soThisLockedDoor, 2500);
}
function soThisLockedDoor () {
	type();

	i = 0;
	isOver = false;
	str = "Hmmm...So this is the locked door.";
	strESP = "Hmmm...Entonces esta es la puerta cerrada.";

	setTimeout(interestingPattern, 5000);
}
function interestingPattern() {
	type();

	i = 0;
	isOver = false;
	str = "Interesting, there seems to be a pattern at the top.";
	strESP = "Interesante, parece que hay un dise\xD1o encima de la puerta.";

	setTimeout(maybeIfShapes, 6500);
}
function maybeIfShapes () {
	document.getElementById('speakerCircle').src = "../../../Assets/LOGO2.png";

	type();

	i = 0;
	isOver = false;
	str = "Maybe if you take the shapes from the bottom";
	strESP = "Quizas si pones las formas del fondo";

	setTimeout(putRightPattern, 5000);
}
function putRightPattern() {
	type();

	i = 0;
	isOver = false;
	str = "and put them into the right order for the pattern, then the door will open.";
	strESP = "en el orden correcto para el dise\xD1o, el puerta abrir\xC1";

	setTimeout(letGiveTry, 8500);
}
function letGiveTry () {

	//----PUZZLE CODE-----\\
	document.getElementById('puzzleCode').style.position = "absolute";
	document.getElementById('puzzleCode').style.transition = "width 3s, margin-top 3s, margin-left 3s";
	document.getElementById('puzzleCode').style.width = "40vw";
	document.getElementById('puzzleCode').style.marginTop = "2vh";
	document.getElementById('puzzleCode').style.marginLeft = "30vw";

	//-----TABLE-----\\
	document.getElementById('originalTableoriginal').style.transition = "width 3s, margin-top 3s, margin-right 3s";
	document.getElementById('originalTableoriginal').style.width = "35vw";
	document.getElementById('originalTableoriginal').style.marginTop = "27vh";
	document.getElementById('originalTableoriginal').style.marginRight = "32.5vw";

	//----DIVS-----\\
	document.getElementById('originalDivOneoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivOneoriginal').style.width = "4.5vw";
	document.getElementById('originalDivOneoriginal').style.height = "9vh";
	document.getElementById('originalDivOneoriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivTwooriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivTwooriginal').style.width = "4.5vw";
	document.getElementById('originalDivTwooriginal').style.height = "9vh";
	document.getElementById('originalDivTwooriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivThreeoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivThreeoriginal').style.width = "4.5vw";
	document.getElementById('originalDivThreeoriginal').style.height = "9vh";
	document.getElementById('originalDivThreeoriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivFouroriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivFouroriginal').style.width = "4.5vw";
	document.getElementById('originalDivFouroriginal').style.height = "9vh";
	document.getElementById('originalDivFouroriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivFiveoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivFiveoriginal').style.width = "4.5vw";
	document.getElementById('originalDivFiveoriginal').style.height = "9vh";
	document.getElementById('originalDivFiveoriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivSixoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivSixoriginal').style.width = "4.5vw";
	document.getElementById('originalDivSixoriginal').style.height = "9vh";
	document.getElementById('originalDivSixoriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivSevenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivSevenoriginal').style.width = "4.5vw";
	document.getElementById('originalDivSevenoriginal').style.height = "9vh";
	document.getElementById('originalDivSevenoriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivEightoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivEightoriginal').style.width = "4.5vw";
	document.getElementById('originalDivEightoriginal').style.height = "9vh";
	document.getElementById('originalDivEightoriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivNineoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivNineoriginal').style.width = "4.5vw";
	document.getElementById('originalDivNineoriginal').style.height = "9vh";
	document.getElementById('originalDivNineoriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivTenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivTenoriginal').style.width = "4.5vw";
	document.getElementById('originalDivTenoriginal').style.height = "9vh";
	document.getElementById('originalDivTenoriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivElevenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivElevenoriginal').style.width = "4.5vw";
	document.getElementById('originalDivElevenoriginal').style.height = "9vh";
	document.getElementById('originalDivElevenoriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivTwelveoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivTwelveoriginal').style.width = "4.5vw";
	document.getElementById('originalDivTwelveoriginal').style.height = "9vh";
	document.getElementById('originalDivTwelveoriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivThirteenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivThirteenoriginal').style.width = "4.5vw";
	document.getElementById('originalDivThirteenoriginal').style.height = "9vh";
	document.getElementById('originalDivThirteenoriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivFourteenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivFourteenoriginal').style.width = "4.5vw";
	document.getElementById('originalDivFourteenoriginal').style.height = "9vh";
	document.getElementById('originalDivFourteenoriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivFifteenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivFifteenoriginal').style.width = "4.5vw";
	document.getElementById('originalDivFifteenoriginal').style.height = "9vh";
	document.getElementById('originalDivFifteenoriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivSixteenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivSixteenoriginal').style.width = "4.5vw";
	document.getElementById('originalDivSixteenoriginal').style.height = "9vh";
	document.getElementById('originalDivSixteenoriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivSeventeenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivSeventeenoriginal').style.width = "4.5vw";
	document.getElementById('originalDivSeventeenoriginal').style.height = "9vh";
	document.getElementById('originalDivSeventeenoriginal').style.lineHeight = "9vh";

	document.getElementById('originalDivEighteenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivEighteenoriginal').style.width = "4.5vw";
	document.getElementById('originalDivEighteenoriginal').style.height = "9vh";
	document.getElementById('originalDivEighteenoriginal').style.lineHeight = "9vh";


	document.getElementById('TriYel').style.transition = "width 3s";
	document.getElementById('TriYel').style.width = "4.2vw";

	document.getElementById('TriPin').style.transition = "width 3s";
	document.getElementById('TriPin').style.width = "4.2vw";

	document.getElementById('TriBlu').style.transition = "width 3s";
	document.getElementById('TriBlu').style.width = "4.2vw";

	document.getElementById('TriRed').style.transition = "width 3s";
	document.getElementById('TriRed').style.width = "4.2vw";

	document.getElementById('TriGre').style.transition = "width 3s";
	document.getElementById('TriGre').style.width = "4.2vw";

	document.getElementById('TriOra').style.transition = "width 3s";
	document.getElementById('TriOra').style.width = "4.2vw";

	document.getElementById('SquRed').style.transition = "width 3s";
	document.getElementById('SquRed').style.width = "4.2vw";

	document.getElementById('SquOra').style.transition = "width 3s";
	document.getElementById('SquOra').style.width = "4.2vw";

	document.getElementById('SquGre').style.transition = "width 3s";
	document.getElementById('SquGre').style.width = "4.2vw";

	document.getElementById('SquPin').style.transition = "width 3s";
	document.getElementById('SquPin').style.width = "4.2vw";

	document.getElementById('SquYel').style.transition = "width 3s";
	document.getElementById('SquYel').style.width = "4.2vw";

	document.getElementById('SquBlu').style.transition = "width 3s";
	document.getElementById('SquBlu').style.width = "4.2vw";

	document.getElementById('CirGre').style.transition = "width 3s";
	document.getElementById('CirGre').style.width = "4.2vw";

	document.getElementById('CirBlu').style.transition = "width 3s";
	document.getElementById('CirBlu').style.width = "4.2vw";

	document.getElementById('CirPin').style.transition = "width 3s";
	document.getElementById('CirPin').style.width = "4.2vw";

	document.getElementById('CirYel').style.transition = "width 3s";
	document.getElementById('CirYel').style.width = "4.2vw";

	document.getElementById('CirOra').style.transition = "width 3s";
	document.getElementById('CirOra').style.width = "4.2vw";

	document.getElementById('CirRed').style.transition = "width 3s";
	document.getElementById('CirRed').style.width = "4.2vw";

	//----TDs-----\\
	document.getElementById('paddingTDOne').style.transition = "padding 3s";
	document.getElementById('paddingTDOne').style.padding = "0.5vw";

	document.getElementById('paddingTDTwo').style.transition = "padding 3s";
	document.getElementById('paddingTDTwo').style.padding = "0.5vw";

	document.getElementById('paddingTDThree').style.transition = "padding 3s";
	document.getElementById('paddingTDThree').style.padding = "0.5vw";
	
	document.getElementById('paddingTDFour').style.transition = "padding 3s";
	document.getElementById('paddingTDFour').style.padding = "0.5vw";

	document.getElementById('paddingTDFive').style.transition = "padding 3s";
	document.getElementById('paddingTDFive').style.padding = "0.5vw";

	document.getElementById('paddingTDSix').style.transition = "padding 3s";
	document.getElementById('paddingTDSix').style.padding = "0.5vw";

	document.getElementById('paddingTDSeven').style.transition = "padding 3s";
	document.getElementById('paddingTDSeven').style.padding = "0.5vw";

	document.getElementById('paddingTDEight').style.transition = "padding 3s";
	document.getElementById('paddingTDEight').style.padding = "0.5vw";

	document.getElementById('paddingTDNine').style.transition = "padding 3s";
	document.getElementById('paddingTDNine').style.padding = "0.5vw";

	document.getElementById('paddingTDTen').style.transition = "padding 3s";
	document.getElementById('paddingTDTen').style.padding = "0.5vw";

	document.getElementById('paddingTDEleven').style.transition = "padding 3s";
	document.getElementById('paddingTDEleven').style.padding = "0.5vw";

	document.getElementById('paddingTDTwelve').style.transition = "padding 3s";
	document.getElementById('paddingTDTwelve').style.padding = "0.5vw";

	document.getElementById('paddingTDThirteen').style.transition = "padding 3s";
	document.getElementById('paddingTDThirteen').style.padding = "0.5vw";

	document.getElementById('paddingTDFourteen').style.transition = "padding 3s";
	document.getElementById('paddingTDFourteen').style.padding = "0.5vw";

	document.getElementById('paddingTDFifteen').style.transition = "padding 3s";
	document.getElementById('paddingTDFifteen').style.padding = "0.5vw";

	document.getElementById('paddingTDSixteen').style.transition = "padding 3s";
	document.getElementById('paddingTDSixteen').style.padding = "0.5vw";

	document.getElementById('paddingTDSeventeen').style.transition = "padding 3s";
	document.getElementById('paddingTDSeventeen').style.padding = "0.5vw";

	document.getElementById('paddingTDEighteen').style.transition = "padding 3s";
	document.getElementById('paddingTDEighteen').style.padding = "0.5vw";

	setTimeout(goodIdeaTry, 1500);
}

function goodIdeaTry () {
	selectedCharacter = JSON.parse(localStorage.getItem("characterSelected"));


	if (selectedCharacter == "Ajax") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/AjaxCoin.png";
	} else if (selectedCharacter == "Nova") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/NovaCoin.png";
	} else if (selectedCharacter == "Dana") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/DanaCoin.png";
	} else if (selectedCharacter == "Jade") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/JadeCoin.png";
	} else if (selectedCharacter == "Sofia") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/SofiaCoin.png";
	} else if (selectedCharacter == "Quinn") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/QuinnCoin.png";
	} else if (selectedCharacter == "Sage") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/SageCoin.png";
	} else if (selectedCharacter == "Ramon") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/RamonCoin.png";
	}

	type();

	i = 0;
	isOver = false;
	str = "Good Idea! Let me give it a try.";
	strESP = "\xA1Una buena idea! D\xC9jame tratarlo.";	
}

function checkForPuzzle() {
		if (puzzleOneVal == "TriRed" && puzzleTwoVal && "SquYel" && puzzleThreeVal == "CirGre"){
			setTimeout(puzzleComplete, 150);
		} else {
			setTimeout(puzzleIncomplete, 150);
		}
}

//------\\

function puzzleComplete () {
	document.getElementById('speakerCircle').src = "../../../Assets/LOGO2.png";
	type();

	i = 0;
	isOver = false;
	str = "Great! Now the door has been unlocked thanks to you solving the puzzle.";
	strESP = "\xA1Excellente! Ahora la puerta se ha desbloqueado.";

	setTimeout(puzzleDisappear, 3000);
}
function puzzleDisappear () {
	//----PUZZLE CODE-----\\
	document.getElementById('puzzleCode').style.position = "absolute";
	document.getElementById('puzzleCode').style.transition = "width 3s, margin-top 3s, margin-left 3s";
	document.getElementById('puzzleCode').style.width = "15vw";
	document.getElementById('puzzleCode').style.marginTop = "40vh";
	document.getElementById('puzzleCode').style.marginLeft = "70vw";

	//-----TABLE-----\\
	document.getElementById('originalTableoriginal').style.transition = "width 3s, margin-top 3s, margin-right 3s";
	document.getElementById('originalTableoriginal').style.width = "12vw";
	document.getElementById('originalTableoriginal').style.marginTop = "51vh";
	document.getElementById('originalTableoriginal').style.marginRight = "16.5vw";

	//----DIVS-----\\
	document.getElementById('originalDivOneoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivOneoriginal').style.width = "1.5vw";
	document.getElementById('originalDivOneoriginal').style.height = "3vh";
	document.getElementById('originalDivOneoriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivTwooriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivTwooriginal').style.width = "1.5vw";
	document.getElementById('originalDivTwooriginal').style.height = "3vh";
	document.getElementById('originalDivTwooriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivThreeoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivThreeoriginal').style.width = "1.5vw";
	document.getElementById('originalDivThreeoriginal').style.height = "3vh";
	document.getElementById('originalDivThreeoriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivFouroriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivFouroriginal').style.width = "1.5vw";
	document.getElementById('originalDivFouroriginal').style.height = "3vh";
	document.getElementById('originalDivFouroriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivFiveoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivFiveoriginal').style.width = "1.5vw";
	document.getElementById('originalDivFiveoriginal').style.height = "3vh";
	document.getElementById('originalDivFiveoriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivSixoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivSixoriginal').style.width = "1.5vw";
	document.getElementById('originalDivSixoriginal').style.height = "3vh";
	document.getElementById('originalDivSixoriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivSevenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivSevenoriginal').style.width = "1.5vw";
	document.getElementById('originalDivSevenoriginal').style.height = "3vh";
	document.getElementById('originalDivSevenoriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivEightoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivEightoriginal').style.width = "1.5vw";
	document.getElementById('originalDivEightoriginal').style.height = "3vh";
	document.getElementById('originalDivEightoriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivNineoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivNineoriginal').style.width = "1.5vw";
	document.getElementById('originalDivNineoriginal').style.height = "3vh";
	document.getElementById('originalDivNineoriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivTenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivTenoriginal').style.width = "1.5vw";
	document.getElementById('originalDivTenoriginal').style.height = "3vh";
	document.getElementById('originalDivTenoriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivElevenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivElevenoriginal').style.width = "1.5vw";
	document.getElementById('originalDivElevenoriginal').style.height = "3vh";
	document.getElementById('originalDivElevenoriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivTwelveoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivTwelveoriginal').style.width = "1.5vw";
	document.getElementById('originalDivTwelveoriginal').style.height = "3vh";
	document.getElementById('originalDivTwelveoriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivThirteenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivThirteenoriginal').style.width = "1.5vw";
	document.getElementById('originalDivThirteenoriginal').style.height = "3vh";
	document.getElementById('originalDivThirteenoriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivFourteenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivFourteenoriginal').style.width = "1.5vw";
	document.getElementById('originalDivFourteenoriginal').style.height = "3vh";
	document.getElementById('originalDivFourteenoriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivFifteenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivFifteenoriginal').style.width = "1.5vw";
	document.getElementById('originalDivFifteenoriginal').style.height = "3vh";
	document.getElementById('originalDivFifteenoriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivSixteenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivSixteenoriginal').style.width = "1.5vw";
	document.getElementById('originalDivSixteenoriginal').style.height = "3vh";
	document.getElementById('originalDivSixteenoriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivSeventeenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivSeventeenoriginal').style.width = "1.5vw";
	document.getElementById('originalDivSeventeenoriginal').style.height = "3vh";
	document.getElementById('originalDivSeventeenoriginal').style.lineHeight = "3vh";

	document.getElementById('originalDivEighteenoriginal').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('originalDivEighteenoriginal').style.width = "1.5vw";
	document.getElementById('originalDivEighteenoriginal').style.height = "3vh";
	document.getElementById('originalDivEighteenoriginal').style.lineHeight = "3vh";


	document.getElementById('TriYel').style.transition = "width 3s";
	document.getElementById('TriYel').style.width = "1vw";

	document.getElementById('TriPin').style.transition = "width 3s";
	document.getElementById('TriPin').style.width = "1vw";

	document.getElementById('TriBlu').style.transition = "width 3s";
	document.getElementById('TriBlu').style.width = "1vw";

	document.getElementById('TriRed').style.transition = "width 3s";
	document.getElementById('TriRed').style.width = "1vw";

	document.getElementById('TriGre').style.transition = "width 3s";
	document.getElementById('TriGre').style.width = "1vw";

	document.getElementById('TriOra').style.transition = "width 3s";
	document.getElementById('TriOra').style.width = "1vw";

	document.getElementById('SquRed').style.transition = "width 3s";
	document.getElementById('SquRed').style.width = "1vw";

	document.getElementById('SquOra').style.transition = "width 3s";
	document.getElementById('SquOra').style.width = "1vw";

	document.getElementById('SquGre').style.transition = "width 3s";
	document.getElementById('SquGre').style.width = "1vw";

	document.getElementById('SquPin').style.transition = "width 3s";
	document.getElementById('SquPin').style.width = "1vw";

	document.getElementById('SquYel').style.transition = "width 3s";
	document.getElementById('SquYel').style.width = "1vw";

	document.getElementById('SquBlu').style.transition = "width 3s";
	document.getElementById('SquBlu').style.width = "1vw";

	document.getElementById('CirGre').style.transition = "width 3s";
	document.getElementById('CirGre').style.width = "1vw";

	document.getElementById('CirBlu').style.transition = "width 3s";
	document.getElementById('CirBlu').style.width = "1vw";

	document.getElementById('CirPin').style.transition = "width 3s";
	document.getElementById('CirPin').style.width = "1vw";

	document.getElementById('CirYel').style.transition = "width 3s";
	document.getElementById('CirYel').style.width = "1vw";

	document.getElementById('CirOra').style.transition = "width 3s";
	document.getElementById('CirOra').style.width = "1vw";

	document.getElementById('CirRed').style.transition = "width 3s";
	document.getElementById('CirRed').style.width = "1vw";

	//----TDs-----\\
	document.getElementById('paddingTDOne').style.transition = "padding 3s";
	document.getElementById('paddingTDOne').style.padding = "0.1vw";

	document.getElementById('paddingTDTwo').style.transition = "padding 3s";
	document.getElementById('paddingTDTwo').style.padding = "0.1vw";

	document.getElementById('paddingTDThree').style.transition = "padding 3s";
	document.getElementById('paddingTDThree').style.padding = "0.1vw";
	
	document.getElementById('paddingTDFour').style.transition = "padding 3s";
	document.getElementById('paddingTDFour').style.padding = "0.1vw";

	document.getElementById('paddingTDFive').style.transition = "padding 3s";
	document.getElementById('paddingTDFive').style.padding = "0.1vw";

	document.getElementById('paddingTDSix').style.transition = "padding 3s";
	document.getElementById('paddingTDSix').style.padding = "0.1vw";

	document.getElementById('paddingTDSeven').style.transition = "padding 3s";
	document.getElementById('paddingTDSeven').style.padding = "0.1vw";

	document.getElementById('paddingTDEight').style.transition = "padding 3s";
	document.getElementById('paddingTDEight').style.padding = "0.1vw";

	document.getElementById('paddingTDNine').style.transition = "padding 3s";
	document.getElementById('paddingTDNine').style.padding = "0.1vw";

	document.getElementById('paddingTDTen').style.transition = "padding 3s";
	document.getElementById('paddingTDTen').style.padding = "0.1vw";

	document.getElementById('paddingTDEleven').style.transition = "padding 3s";
	document.getElementById('paddingTDEleven').style.padding = "0.1vw";

	document.getElementById('paddingTDTwelve').style.transition = "padding 3s";
	document.getElementById('paddingTDTwelve').style.padding = "0.1vw";

	document.getElementById('paddingTDThirteen').style.transition = "padding 3s";
	document.getElementById('paddingTDThirteen').style.padding = "0.1vw";

	document.getElementById('paddingTDFourteen').style.transition = "padding 3s";
	document.getElementById('paddingTDFourteen').style.padding = "0.1vw";

	document.getElementById('paddingTDFifteen').style.transition = "padding 3s";
	document.getElementById('paddingTDFifteen').style.padding = "0.1vw";

	document.getElementById('paddingTDSixteen').style.transition = "padding 3s";
	document.getElementById('paddingTDSixteen').style.padding = "0.1vw";

	document.getElementById('paddingTDSeventeen').style.transition = "padding 3s";
	document.getElementById('paddingTDSeventeen').style.padding = "0.1vw";

	document.getElementById('paddingTDEighteen').style.transition = "padding 3s";
	document.getElementById('paddingTDEighteen').style.padding = "0.1vw";

	//----ACTIVE TDs----\\
	document.getElementById('tdHelloOne').style.transition = "padding 3s";
	document.getElementById('tdHelloOne').style.padding = "0.2vw";

	document.getElementById('tdHelloTwo').style.transition = "padding 3s";
	document.getElementById('tdHelloTwo').style.padding = "0.2vw";

	document.getElementById('tdHelloThree').style.transition = "padding 3s";
	document.getElementById('tdHelloThree').style.padding = "0.2vw";

	//----ACTIVE TABLE-------\\
	document.getElementById('activeTable').style.transition = "margin-top 3s, margin-right 3s";
	document.getElementById('activeTable').style.marginTop = "43vh";
	document.getElementById('activeTable').style.marginRight = "16.4vw";

	//------ACTIVE DIVS-----\\
	document.getElementById('dragDivOne').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('dragDivOne').style.width = "1.5vw";
	document.getElementById('dragDivOne').style.height = "3vh";
	document.getElementById('dragDivOne').style.lineHeight = "3vh";

	document.getElementById('dragDivTwo').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('dragDivTwo').style.width = "1.5vw";
	document.getElementById('dragDivTwo').style.height = "3vh";
	document.getElementById('dragDivTwo').style.lineHeight = "3vh";

	document.getElementById('dragDivThree').style.transition = "width 3s, height 3s, line-height 3s";
	document.getElementById('dragDivThree').style.width = "1.5vw";
	document.getElementById('dragDivThree').style.height = "3vh";
	document.getElementById('dragDivThree').style.lineHeight = "3vh";

	setTimeout(doorUnlock, 3500);

}
function doorUnlock () {
	document.getElementById('door').src = "../../../Assets/DoorAnim.gif";

	setTimeout(function () {
		document.getElementById('door').src = "../../../Assets/DoorAnimOpen.gif";
	}, 2600);

	setTimeout(chaseAfter, 3000);
}
function chaseAfter () {
	type();

	i = 0;
	isOver = false;
	str = "The Thief is right through this door!";
	strESP = "\xA1El ladr\xD3n est\xC1 a trav\xC9s de esta puerta!";

	setTimeout(nowHurryChase, 6500);	
}
function nowHurryChase() {
	type();

	i = 0;
	isOver = false;
	str = "NOW HURRY! Tap on the right side of the screen to chase after the thief.";
	strESP = "\xA1R\xC1PIDO! Toque en el lado derecho de la pantalla para perseguir al ladr\xD3n.";

	setTimeout(function () {
		window.location.href= "MathChase.html";
		return false;
	}, 10000);
}
//----------
function puzzleIncomplete () {
	document.getElementById('speakerCircle').src = "../../../Assets/LOGO2.png";
	type();

	i = 0;
	isOver = false;
	str = "Hmmm...I don't think that fits the pattern.";
	strESP = "Hmmm...No pienso que eso no cabe el dise\xD1o.";

	setTimeout(puzzleIncompleteTwo, 6000);
}
function puzzleIncompleteTwo () {
	type();

	i = 0;
	isOver = false;
	str = "TRY AGAIN TO UNLOCK THE DOOR.";
	strESP = "TRATA OTRA VEZ PARA ABRIR LA PUERTA.";
}

//---------------------\\

	function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    levelOnePuzzleNum = levelOnePuzzleNum - 1; 

 }

function dropDifferent(ev, q) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    if (q == 1) {
    	puzzleOneVal = data;
    } else if (q == 2) {
    	puzzleTwoVal = data;
    } else if (q == 3) {
    	puzzleThreeVal = data;
    }

    levelOnePuzzleNum = levelOnePuzzleNum + 1;

    if(levelOnePuzzleNum == 3) {
    checkForPuzzle();
}
}

//--------L1 SOCIAL STUDIES-------------\\

function LOneSocStudiesStart() {
	isSpanish = JSON.parse(localStorage.getItem("spanish"));

	lastPlayed = new Date();
	var setDate = lastPlayed.toLocaleDateString();
	var setTime = lastPlayed.toLocaleTimeString();

	localStorage.setItem("setDate", JSON.stringify(setDate));
	localStorage.setItem("setTime", JSON.stringify(setTime));

	whichCharacterLOne();

	setTimeout(whySteal, 3000);
}

function whySteal () {
	selectedCharacter = JSON.parse(localStorage.getItem("characterSelected"));


	if (selectedCharacter == "Ajax") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/AjaxCoin.png";
	} else if (selectedCharacter == "Nova") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/NovaCoin.png";
	} else if (selectedCharacter == "Dana") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/DanaCoin.png";
	} else if (selectedCharacter == "Jade") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/JadeCoin.png";
	} else if (selectedCharacter == "Sofia") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/SofiaCoin.png";
	} else if (selectedCharacter == "Quinn") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/QuinnCoin.png";
	} else if (selectedCharacter == "Sage") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/SageCoin.png";
	} else if (selectedCharacter == "Ramon") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/RamonCoin.png";
	}

	document.getElementById('hiddenForInvis').style.transition = "opacity 1s";
	document.getElementById('hiddenForInvis').style.opacity = 0.9;
	document.getElementById('speakerCircle').style.transition = "opacity 2s";
	document.getElementById('speakerCircle').style.opacity = 1;


	document.getElementById('textArea').style.opacity = 1;

	setTimeout(tellAboutPencil, 2500);
}
function tellAboutPencil () {
	type();

	i = 0;
	isOver = false;
	str = "Now, Master Merlin, tell me about this magical pencil...";
	strESP = "Vale, Se\xD1or Merlin, cu\xC9ntame sobre este l\xC1piz m\xC1gico...";

	setTimeout(whyWouldSteal, 8000);
}
function whyWouldSteal () {
	type();

	i = 0;
	isOver = false;
	str = "why would someone want to steal it?";
	strESP = "\xBFPor qu\xC9 alguien querr\xCDa robarlo?";

	setTimeout(onceUponTime, 6000);
}
function onceUponTime () {
	document.getElementById('speakerCircle').src = "../../../Assets/Characters/MerlinCoin.png";
	type();

	i = 0;
	isOver = false;
	str = "Well, once upon a time, there was a clan of evil Goblins";
	strESP = "Bueno, hab\xCDa una vez un clan de duendes malvados";

	setTimeout(whoWantedSteal, 8000);
}
function whoWantedSteal () {
	type();

	i = 0;
	isOver = false;
	str = "who wanted to steal our magical pencil";
	strESP = "que quer\xCDan robar nuestro l\xC1piz m\xC1gico";

	setTimeout(completeProphecy, 6000);
}
function completeProphecy () {
	type();

	i = 0;
	isOver = false;
	str = "to complete an ancient prophecy in the dark forest...";
	strESP = "para completar una profec\xCDa antigua en el bosque oscuro.";

	setTimeout(interestingIfGoblins, 8000);
}
function interestingIfGoblins () {
	selectedCharacter = JSON.parse(localStorage.getItem("characterSelected"));


	if (selectedCharacter == "Ajax") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/AjaxCoin.png";
	} else if (selectedCharacter == "Nova") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/NovaCoin.png";
	} else if (selectedCharacter == "Dana") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/DanaCoin.png";
	} else if (selectedCharacter == "Jade") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/JadeCoin.png";
	} else if (selectedCharacter == "Sofia") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/SofiaCoin.png";
	} else if (selectedCharacter == "Quinn") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/QuinnCoin.png";
	} else if (selectedCharacter == "Sage") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/SageCoin.png";
	} else if (selectedCharacter == "Ramon") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/RamonCoin.png";
	}

	type();

	i = 0;
	isOver = false;
	str = "Interesting...If the Goblins tried to steal the magical pencil in the past,";
	strESP = "Interesante...Si los duendes malvados trataron de robar el l\xC1piz m\xC1gico en el pasado,";

	setTimeout(theyMightTry, 10000);
}
function theyMightTry () {
	type();

	i = 0;
	isOver = false;
	str = "they might try to do it again! Maybe the thief is a Goblin!";
	strESP = "\xA1podr\xCDan tratar de hacerlo de nuevo! \xA1Tal vez el ladr\xD3n es un duende!";

	setTimeout(whereThinkGoblinGoing, 10000);
}
function whereThinkGoblinGoing () {
	document.getElementById('speakerCircle').src = "../../../Assets/LOGO2.png";
	type();

	i = 0;
	isOver = false;
	str = "NOW WHERE DO YOU THINK THIS GOBLIN THIEF IS GOING?";
	strESP = "AHORA \xBFA D\xD3NDE PIENSAS ESTE DUENDE VA?";

	setTimeout(createStudiesTable, 1500);
}
function createStudiesTable () {
	var table = document.createElement("TABLE");
	table.setAttribute("id", "myTable");
	document.body.appendChild(table);

	var row = document.createElement("TR");
	row.setAttribute("id", "myRow");
	document.getElementById('myTable').appendChild(row);

	var cell = document.createElement("TD");
	var image = document.createElement("IMG");
	if (isSpanish == 0) {
	image.src = "../../../Assets/L1 Social Studies/toTheGoblinCave.png";
} else if (isSpanish == 1) {
	image.src = "../../../Assets/L1 Social Studies/toTheGoblinCaveESP.png";
}
	image.setAttribute("class", "myImage");
	image.setAttribute("id", "toTheGoblinCave");
	cell.appendChild(image);

	document.getElementById("myRow").appendChild(cell);

	var cellTwo = document.createElement("TD");
	var imageTwo = document.createElement("IMG");
	if (isSpanish == 0) {
	imageTwo.src = "../../../Assets/L1 Social Studies/toTheMysticalVolcano.png";
} else if (isSpanish == 1) {
	imageTwo.src = "../../../Assets/L1 Social Studies/toTheMysticalVolcanoESP.png";
}
	imageTwo.setAttribute("class", "myImage");
	imageTwo.setAttribute("id", "toTheMysticalVolcano");
	cellTwo.appendChild(imageTwo);

	document.getElementById("myRow").appendChild(cellTwo);

	var rowTwo = document.createElement("TR");
	rowTwo.setAttribute("id", "myRowTwo");
	document.getElementById('myTable').appendChild(rowTwo);

	var cellThree = document.createElement("TD");
	var imageThree = document.createElement("IMG");
	if (isSpanish == 0) {
	imageThree.src = "../../../Assets/L1 Social Studies/toTheDarkForest.png";
} else if (isSpanish == 1) {
	imageThree.src = "../../../Assets/L1 Social Studies/toTheDarkForestESP.png";
}
	imageThree.setAttribute("class", "myImage");
	imageThree.setAttribute("id", "toTheDarkForest");
	cellThree.appendChild(imageThree);

	document.getElementById("myRowTwo").appendChild(cellThree);

	var cellFour = document.createElement("TD");
	var imageFour = document.createElement("IMG");
	if (isSpanish == 0) {
	imageFour.src = "../../../Assets/L1 Social Studies/toTheLagoon.png";
} else if (isSpanish == 1) {
	imageFour.src = "../../../Assets/L1 Social Studies/toTheLagoonESP.png";
}
	imageFour.setAttribute("class", "myImage");
	imageFour.setAttribute("id", "toTheLagoon");
	cellFour.appendChild(imageFour);

	document.getElementById("myRowTwo").appendChild(cellFour);


	document.getElementById('popup').style.transition = "opacity 1s linear 0s";
	document.getElementById('popup').style.opacity = 0.9;

	setTimeout(appearStudiesOptionTable, 100);
}
function appearStudiesOptionTable () {
	document.getElementById('myTable').style.transition = "opacity 1s linear 0s";
	document.getElementById('myTable').style.opacity = 1;

	document.getElementById('toTheGoblinCave').addEventListener("click", function () {
			LangWrongOne = LOneStudiesWrongOne();

			clearTimeout(LangWrongThree);
			clearTimeout(LangWrongFour);

			clearTimeout(LangWrongFive);
			clearTimeout(LangWrongSix);
			clearTimeout(LangWrongSeven);
			clearTimeout(LangWrongEight);
			
			clearTimeout(LangWrongNine);
			clearTimeout(LangWrongTen);
			clearTimeout(LangWrongEleven);
			clearTimeout(LangWrongTwelve);


	});
	document.getElementById('toTheMysticalVolcano').addEventListener("click", function () {
			LangWrongFive = LOneStudiesWrongTwo();
			
			clearTimeout(LangWrongSeven);
			clearTimeout(LangWrongEight);

			clearTimeout(LangWrongOne);
			clearTimeout(LangWrongTwo);
			clearTimeout(LangWrongThree);
			clearTimeout(LangWrongFour);
			
			clearTimeout(LangWrongNine);
			clearTimeout(LangWrongTen);
			clearTimeout(LangWrongEleven);
			clearTimeout(LangWrongTwelve);
	});
	document.getElementById('toTheDarkForest').addEventListener("click", function () {
			LOneStudiesRight();

			clearTimeout(LangWrongOne);
			clearTimeout(LangWrongTwo);
			clearTimeout(LangWrongThree);
			clearTimeout(LangWrongFour);

			clearTimeout(LangWrongFive);
			clearTimeout(LangWrongSix);
			clearTimeout(LangWrongSeven);
			clearTimeout(LangWrongEight);
			
			clearTimeout(LangWrongNine);
			clearTimeout(LangWrongTen);
			clearTimeout(LangWrongEleven);
			clearTimeout(LangWrongTwelve);
	});
	document.getElementById('toTheLagoon').addEventListener("click", function () {
			LangWrongNine = LOneStudiesWrongThree();
			
			clearTimeout(LangWrongEleven);
			clearTimeout(LangWrongTwelve);

			clearTimeout(LangWrongOne);
			clearTimeout(LangWrongTwo);
			clearTimeout(LangWrongThree);
			clearTimeout(LangWrongFour);
			
			clearTimeout(LangWrongFive);
			clearTimeout(LangWrongSix);
			clearTimeout(LangWrongSeven);
			clearTimeout(LangWrongEight);
	});
}
function LOneStudiesWrongOne () {
	document.getElementById('speakerCircle').src = "../../../Assets/FalseCoin.png";

	FailSocial = FailSocial + 1;

	localStorage.setItem("FailSocial", JSON.stringify(FailSocial));	

	type();

	i = 0;
	isOver = false;
	str = "Hmmmmm...maybe...";
	strESP = "Hmmmmm...tal vez...";

	LangWrongTwo = setTimeout(dontCompleteProphecyOne, 5000);
}
function dontCompleteProphecyOne () {
	type();

	i = 0;
	isOver = false;
	str = "but I don't think they could complete the prophecy at their hideout.";
	strESP = "pero no creo que puedan completar la profec\xCDa en el escondite de los duendes.";

	LangWrongThree = setTimeout(whereCompleteProphecyOne, 10000);
}
function whereCompleteProphecyOne () {
	type();

	i = 0;
	isOver = false;
	str = "Where might they go to complete the prophecy?";
	strESP = "\xBFD\xD3nde ir\xCDan para completar la profec\xCDa?";

	LangWrongFour = setTimeout(studiesTryAgainOne, 6000);
}
function studiesTryAgainOne () {
	type();

	i = 0;
	isOver = false;
	str = "TRY AGAIN.";
	strESP = "TRATA OTRA VEZ.";
}
//-----\\
function LOneStudiesWrongTwo () {
	document.getElementById('speakerCircle').src = "../../../Assets/FalseCoin.png";

	FailSocial = FailSocial + 1;

	localStorage.setItem("FailSocial", JSON.stringify(FailSocial));	

	type();

	i = 0;
	isOver = false;
	str = "Hmmmmm...maybe...";
	strESP = "Hmmmmm...tal vez...";

	LangWrongSix = setTimeout(dontCompleteProphecyTwo, 5000);
}
function dontCompleteProphecyTwo () {
	type();

	i = 0;
	isOver = false;
	str = "but I don't think they could complete the prophecy at the mystical volcano.";
	strESP = "pero no creo que puedan completar la profec\xCDa en el volc\xC1n m\xCDstico.";

	LangWrongSeven = setTimeout(whereCompleteProphecyTwo, 10000);
}
function whereCompleteProphecyTwo () {
	type();

	i = 0;
	isOver = false;
	str = "Where might they go to complete the prophecy?";
	strESP = "\xBFD\xD3nde ir\xCDan para completar la profec\xCDa?";

	LangWrongEight = setTimeout(studiesTryAgainTwo, 6000);
}
function studiesTryAgainTwo () {
	type();

	i = 0;
	isOver = false;
	str = "TRY AGAIN.";
	strESP = "TRATA OTRA VEZ.";
}
//--------\\
function LOneStudiesWrongThree () {
	document.getElementById('speakerCircle').src = "../../../Assets/FalseCoin.png";

	FailSocial = FailSocial + 1;

	localStorage.setItem("FailSocial", JSON.stringify(FailSocial));	

	type();

	i = 0;
	isOver = false;
	str = "Hmmmmm...maybe...";
	strESP = "Hmmmmm...tal vez...";

	LangWrongTen = setTimeout(dontCompleteProphecyThree, 5000);
}
function dontCompleteProphecyThree () {
	type();

	i = 0;
	isOver = false;
	str = "but I don't think they could complete the prophecy at the lagoon.";
	strESP = "pero no creo que puedan completar la profec\xCDa en el la laguna.";

	LangWrongEleven = setTimeout(whereCompleteProphecyThree, 10000);
}
function whereCompleteProphecyThree () {
	type();

	i = 0;
	isOver = false;
	str = "Where might they go to complete the prophecy?";
	strESP = "\xBFD\xD3nde ir\xCDan para completar la profec\xCDa?";

	LangWrongTwelve = setTimeout(studiesTryAgainThree, 6000);
}
function studiesTryAgainThree () {
	type();

	i = 0;
	isOver = false;
	str = "TRY AGAIN.";
	strESP = "TRATA OTRA VEZ.";
}
//---------------------------\\

function LOneStudiesRight () {
	document.getElementById('speakerCircle').src = "../../../Assets/CheckCoin.png";

	SuccessSocial = SuccessSocial + 1;

	localStorage.setItem("SuccessSocial", JSON.stringify(SuccessSocial));	

	type();

	i = 0;
	isOver = false;
	str = "CORRECT! The thief is probably going to the dark forest.";
	strESP = "\xA1CORRECTO! El ladr\xD3n probablemente va al bosque oscuro.";

	document.getElementById('myTable').style.transition = "opacity 1s linear 0s";
	document.getElementById('myTable').style.opacity = 0;
	document.getElementById('popup').style.transition = "opacity 1s linear 0s";
	document.getElementById('popup').style.opacity = 0;

	setTimeout(deleteMyTable, 100);
}
function deleteMyTable () {

	setTimeout(thatMeanThisWay, 8000);
}
function thatMeanThisWay () {
	document.getElementById("myTable").remove();
	document.getElementById("popup").remove();

	type();

	i = 0;
	isOver = false;
	str = "That must mean that he is going this way!";
	strESP = "Eso debe significar que \xC9l va por este camino";

	var arrowCreated = document.createElement("IMG");
	arrowCreated.setAttribute("id", "osiPointingArrow");
	arrowCreated.src = "../../../Assets/AdvanceArrow.png";

	document.body.appendChild(arrowCreated);

	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 0.9;

	setTimeout(LOneStudiesFlashOne, 1500);
}

function LOneStudiesFlashOne () {
	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 0;

	setTimeout(LOneStudiesFlashTwo, 1500);
}
function LOneStudiesFlashTwo () {
	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 0.9;

	setTimeout(LOneStudiesFlashThree, 1500);
}
function LOneStudiesFlashThree () {
	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 0;

	setTimeout(LOneStudiesFlashFour, 1500);
}
function LOneStudiesFlashFour () {
	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 0.9;

	setTimeout(LOneStudiesFlashFive, 1500);
}
function LOneStudiesFlashFive () {
	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 0;

	setTimeout(LOneStudiesFlashSix, 1500);
}
function LOneStudiesFlashSix () {
	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 0.9;

	setTimeout(LOneStudiesArrowDis, 2000);
}
function LOneStudiesArrowDis () {
	document.getElementById('osiPointingArrow').style.transition = "opacity 1s";
	document.getElementById('osiPointingArrow').style.opacity = 0;

	setTimeout(LOneStudiesTap, 1000);
}
function LOneStudiesTap () {
	type();

	i = 0;
	isOver = false;
	str = "NOW HURRY! Tap on the right side of the screen to chase after the thief.";
	strESP = "\xA1R\xC1PIDO! Toque en el lado derecho de la pantalla para perseguir al ladr\xD3n.";


	setTimeout(function () {
		window.location.href= "SocialStudiesChase.html";
		return false;
	}, 10000);   
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//CONTINUE SOCIAL STUDIES HERE!
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}


//--------L1 SCIENCE-------------\\

function LOneScienceStart () {
	isSpanish = JSON.parse(localStorage.getItem("spanish"));

	lastPlayed = new Date();
	var setDate = lastPlayed.toLocaleDateString();
	var setTime = lastPlayed.toLocaleTimeString();

	localStorage.setItem("setDate", JSON.stringify(setDate));
	localStorage.setItem("setTime", JSON.stringify(setTime));

	whichCharacterLOne();

	setTimeout(LOneScienceTextBox, 6500);
}
function LOneScienceTextBox() {
	
	selectedCharacter = JSON.parse(localStorage.getItem("characterSelected"));


	if (selectedCharacter == "Ajax") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/AjaxCoin.png";
	} else if (selectedCharacter == "Nova") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/NovaCoin.png";
	} else if (selectedCharacter == "Dana") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/DanaCoin.png";
	} else if (selectedCharacter == "Jade") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/JadeCoin.png";
	} else if (selectedCharacter == "Sofia") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/SofiaCoin.png";
	} else if (selectedCharacter == "Quinn") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/QuinnCoin.png";
	} else if (selectedCharacter == "Sage") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/SageCoin.png";
	} else if (selectedCharacter == "Ramon") {
		document.getElementById('speakerCircle').src = "../../../Assets/Characters/RamonCoin.png";
	}

	document.getElementById('hiddenForInvis').style.transition = "opacity 1s";
	document.getElementById('hiddenForInvis').style.opacity = 0.9;
	document.getElementById('speakerCircle').style.transition = "opacity 2s";
	document.getElementById('speakerCircle').style.opacity = 1;


	document.getElementById('textArea').style.opacity = 1;

	setTimeout(bunchOfMaterials, 2500);

}
function bunchOfMaterials () {
	type();

	i = 0;
	isOver = false;
	str = "Look! There are a bunch of materials lying around.";
	strESP = "\xA1Mira! Hay algunos materiales all\xCD.";

	setTimeout(betTrap, 6000);
}
function betTrap () {
	type();

	i = 0;
	isOver = false;
	str = "I bet I could make a trap out of that!";
	strESP = "Pienso que puedes hacer una trampa con estos materiales.";

	setTimeout(pieceOldTrap, 7000);
}
function pieceOldTrap () {
	document.getElementById('speakerCircle').src = "../../../Assets/Characters/MerlinCoin.png";
	type();

	i = 0;
	isOver = false;
	str = "Of course! Those are pieces of an old mouse trap";
	strESP = "\xA1Seguro! Son partes de una ratonera vieja";

	setTimeout(usedToHaveCastle, 5500);
}
function usedToHaveCastle () {
	type();

	i = 0;
	isOver = false;
	str = "we used to have in the castle.";
	strESP = "que ten\xCDamos en el castillo.";

	setTimeout(putPartsTogether, 5000);
}
function putPartsTogether () {
	type();

	i = 0;
	isOver = false;
	str = "If you put the parts back together, you could trap the thief.";
	strESP = "Si pones los partes juntos, podr\xCDas atrapar al ladr\xD3n.";

	setTimeout(hintLayoutShow, 9000);
}
function hintLayoutShow () {

	document.getElementById('layoutHint').style.transition = "opacity 3s";
	document.getElementById('layoutHint').style.opacity = 1;

	document.getElementById('speakerCircle').src = "../../../Assets/LOGO2.png";

	type();

	i = 0;
	isOver = false;
	str = "Here! Use the shadow on the wall";
	strESP = "\xA1Aqu\xCD! USa la sombra en la pared";

	setTimeout(toPutPieces, 5500);
}
function toPutPieces () {
	type();

	i = 0;
	isOver = false;
	str = "to put the parts in the right places";
	strESP = "para poner los partes en los lugares correctos";

	setTimeout(dialogBoxFade, 8500);
}
function dialogBoxFade () {
	document.getElementById('hiddenForInvis').style.transition = "opacity 1s";
	document.getElementById('hiddenForInvis').style.opacity = 0;
	document.getElementById('speakerCircle').style.transition = "opacity 2s";
	document.getElementById('speakerCircle').style.opacity = 0;


	document.getElementById('textArea').style.opacity = 0;

	setTimeout(boxZIndex, 2000);
}
function boxZIndex () {
	document.getElementById('hiddenForInvis').remove();
	document.getElementById('speakerCircle').remove();
	document.getElementById('textArea').remove();
}

//---------\\

function checkScience () {
	if (scienceOneVal == "cageTwoOriginal" && scienceTwoVal == "counterWeightTwoOriginal" && scienceThreeVal == "plankTwoOriginal" && scienceFourVal == "pivotTwoOriginal" && scienceFiveVal == "beamTwoOriginal" && scienceSixVal == "tripWireTwoOriginal") {
		setTimeout(disHintLayout, 100);
	}
}
function disHintLayout () {
	document.getElementById('layoutHint').style.transition = "opacity 3s";
	document.getElementById('layoutHint').style.opacity = 0;

	setTimeout(createTextTrap, 2000);
}
function createTextTrap () {
	var hiddenDiv = document.createElement("DIV");
	hiddenDiv.setAttribute("id", "hiddenForInvis");
	document.body.appendChild(hiddenDiv);

	var darkDiv = document.createElement("DIV");
	darkDiv.setAttribute("id", "darkerblue");
	darkDiv.setAttribute("class", "textBox");
	document.getElementById('hiddenForInvis').appendChild(darkDiv);

	var lightDiv = document.createElement("DIV");
	lightDiv.setAttribute("id", "lighterblue");
	lightDiv.setAttribute("class", "textBox");
	document.getElementById('hiddenForInvis').appendChild(lightDiv);

	var speakerCircle = document.createElement("IMG");
	speakerCircle.setAttribute("id", "speakerCircle");
	document.body.appendChild(speakerCircle);

	var texttextDiv = document.createElement("DIV");
	texttextDiv.setAttribute("id", "texttextBox");
	document.body.appendChild(hiddenDiv);

	var textArea = document.createElement("H1");
	textArea.setAttribute("id", "textArea");
	document.getElementById('texttextBox').appendChild(textArea);

	document.getElementById('speakerCircle').src = "../../../Assets/CheckCoin.png";

	setTimeout(fadeTextTrap, 100);	
}
function fadeTextTrap () {
	document.getElementById('hiddenForInvis').style.transition = "opacity 1s";
	document.getElementById('hiddenForInvis').style.opacity = 0.9;
	document.getElementById('speakerCircle').style.transition = "opacity 2s";
	document.getElementById('speakerCircle').style.opacity = 1;

	document.getElementById('textArea').style.opacity = 1;

	setTimeout(perfectTrap, 2000);
	str = "";
	strESP = "";
}
function perfectTrap () {
	type();

	i = 0;
	isOver = false;
	str = "Perfect! You built the trap.";
	strESP = "\xA1Perfecto! Construiste la trampa.";

	setTimeout(greatWorkPerfectly, 4500);
}
function greatWorkPerfectly () {
	document.getElementById('speakerCircle').src = "../../../Assets/Characters/MerlinCoin.png";
	type();

	i = 0;
	isOver = false;
	str = "Great! Your trap is going to work perfectly.";
	strESP = "\xA1Vale! Tu trampa va a funcionar perfectamente";

	setTimeout(waitCaught, 5500);
}
function waitCaught () {
	type();

	i = 0;
	isOver = false;
	str = "Now we just need to wait for the thief to get caught in your trap.";
	strESP = "Solo necesitamos esperar para el ladr\xD3n.";

	setTimeout(trappingPhase, 10000);
}
function trappingPhase () {
	document.getElementById('hiddenForInvis').style.transition = "opacity 1s";
	document.getElementById('hiddenForInvis').style.opacity = 0;
	document.getElementById('speakerCircle').style.transition = "opacity 2s";
	document.getElementById('speakerCircle').style.opacity = 0;

	document.getElementById('textArea').style.opacity = 0;

	setTimeout(goblinWalks, 8000);
}
function goblinWalks () {
	document.getElementById('goblin').style.transition = "margin-right 5s";
	document.getElementById('goblin').style.marginRight = "28.2vw";

	setTimeout(trappedByTrap, 3500);
}
function trappedByTrap () {
	document.getElementById('beamDiv').style.transition = "transform 1s, margin-top 1s, margin-left 1s";
    document.getElementById("beamDiv").style.WebkitTransform = "rotate(-90deg)"; 
    document.getElementById("beamDiv").style.msTransform = "rotate(-90deg)"; 
    document.getElementById("beamDiv").style.transform = "rotate(-90deg)";
    document.getElementById("beamDiv").style.marginTop = "71vh";
    document.getElementById("beamDiv").style.marginLeft = "46.6vw";
    //--

    setTimeout(trappedByTrapTwo, 100);

}
function trappedByTrapTwo () {

	document.getElementById('plankDiv').style.transition = "transform 0.8s, margin-top 0.8s, margin-left 0.8s";
    document.getElementById('plankDiv').style.WebkitTransform = "rotate(65deg)"; 
    document.getElementById('plankDiv').style.msTransform = "rotate(65deg)"; 
    document.getElementById('plankDiv').style.transform = "rotate(65deg)";
    document.getElementById('plankDiv').style.marginTop = "58.5vh";
    document.getElementById('plankDiv').style.marginLeft = "25.9vw";

    document.getElementById('counterWeightDiv').style.transition = "transform 0.8s, margin-top 1.5s, margin-left 1.5s";
    document.getElementById("counterWeightDiv").style.msTransform = "rotate(65deg)"; 
    document.getElementById("counterWeightDiv").style.transform = "rotate(65deg)";
    document.getElementById("counterWeightDiv").style.WebkitTransform = "rotate(65deg)"; 
    document.getElementById("counterWeightDiv").style.marginTop = "5vh";
    document.getElementById("counterWeightDiv").style.marginLeft = "125vw";

    setTimeout(trappedByTrapThree, 100);
}
function trappedByTrapThree () {
	str = null;
	strESP = null;

	document.getElementById('cageDiv').style.transition = "margin-bottom 1s";
	document.getElementById('cageDiv').style.marginBottom = "-1vh";

	setTimeout(goblinShock, 500);


}
function goblinShock () {
	document.getElementById('goblin').src = "../../../Assets/Goblin/PencilGoblinStandardShocked.png";

	setTimeout(caughtGoblinText, 4000);


}
function caughtGoblinText () {
	document.getElementById('speakerCircle').src = "../../../Assets/LOGO2.png";

	document.getElementById('plankDiv').style.zIndex = "-1";
	document.getElementById('beamDiv').style.zIndex = "-2";
	document.getElementById('pivotDiv').style.zIndex = "-3";
	document.getElementById('tripWireDiv').style.zIndex = "-3";

	document.getElementById('hiddenForInvis').style.transition = "opacity 1s";
	document.getElementById('hiddenForInvis').style.opacity = 0.9;
	document.getElementById('hiddenForInvis').style.zIndex = "69";
	
	document.getElementById('speakerCircle').style.transition = "opacity 2s";
	document.getElementById('speakerCircle').style.opacity = 1;
	document.getElementById('speakerCircle').style.zIndex = "69";


	setTimeout(caughtGoblin, 2000);
}
function caughtGoblin () {

	document.getElementById('textArea').style.opacity = 1;
	str = "CAUGHT!";
	strESP = "\xA1ATRAPADO!";

	youCaughtThief();
}
function youCaughtThief () {
	type();

	i = 0;
	isOver = false;

	setTimeout(finalCaughtGoblin, 12000);
	
}
function finalCaughtGoblin () {
	window.location.href= "../levelOneOutcome.html";
		return false;
}
//---------\\

function allowDropScience(ev) {
    ev.preventDefault();
}

function dragScience(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropScience(ev, q) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    if (q == 1) {
    	scienceOneVal = null;
    } else if (q == 2) {
    	scienceTwoVal = null;
    } else if (q == 3) {
    	scienceThreeVal = null;
    } else if (q == 4) {
    	scienceThreeVal = null;
    } else if (q == 5) {
    	scienceThreeVal = null;
    } else if (q == 6) {
    	scienceThreeVal = null;
    }
 }

function dropDifferentScience(ev, q) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    if (q == 1) {
    	scienceOneVal = data;
    } else if (q == 2) {
    	scienceTwoVal = data;
    } else if (q == 3) {
    	scienceThreeVal = data;
    } else if (q == 4) {
    	scienceFourVal = data;
    } else if (q == 5) {
    	scienceFiveVal = data;
    } else if (q == 6) {
    	scienceSixVal = data;
    }

   checkScience();
}

//---------L1 OUTCOME-----------\\

function levelOneOutcome () {
	isSpanish = JSON.parse(localStorage.getItem("spanish"));

	lastPlayed = new Date();

	var setDate = lastPlayed.toLocaleDateString();
	var setTime = lastPlayed.toLocaleTimeString();

	localStorage.setItem("setDate", JSON.stringify(setDate));
	localStorage.setItem("setTime", JSON.stringify(setTime));

	whichCharacter();

	levelOneSelectedOption = JSON.parse(localStorage.getItem("levelOneSelectedOption"));

	setTimeout(theThiefGoblinLoad, 2500);
}
function theThiefGoblinLoad() {
	selectedCharacter = JSON.parse(localStorage.getItem("characterSelected"));


	if (selectedCharacter == "Ajax") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/AjaxCoin.png";
	} else if (selectedCharacter == "Nova") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/NovaCoin.png";
	} else if (selectedCharacter == "Dana") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/DanaCoin.png";
	} else if (selectedCharacter == "Jade") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/JadeCoin.png";
	} else if (selectedCharacter == "Sofia") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/SofiaCoin.png";
	} else if (selectedCharacter == "Quinn") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/QuinnCoin.png";
	} else if (selectedCharacter == "Sage") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/SageCoin.png";
	} else if (selectedCharacter == "Ramon") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/RamonCoin.png";
	}

	document.getElementById('hiddenForInvis').style.transition = "opacity 1s";
	document.getElementById('hiddenForInvis').style.opacity = 0.9;
	document.getElementById('speakerCircle').style.transition = "opacity 2s";
	document.getElementById('speakerCircle').style.opacity = 1;


	document.getElementById('textArea').style.opacity = 1;

	setTimeout(theThiefGoblin, 1500);
}
function theThiefGoblin() {
	type();

	i = 0;
	isOver = false;
	str = "The thief is a Goblin?";
	strESP = "\xBFEl ladr\xD3n es un duende?";

	setTimeout(yesGoblinEnemy, 4000);
}

function yesGoblinEnemy () {
	document.getElementById('speakerCircle').src = "../../Assets/Characters/MerlinCoin.png";

	type();

	i = 0;
	isOver = false;
	str = "Yes. The Goblins have been our enemies for a long time...";
	strESP = "S\xCD. Los duendes han sido nuestros enemigos por mucho tiempo...";

	setTimeout(butWeHavePencil, 6500);
}

function butWeHavePencil () {
	type();

	i = 0;
	isOver = false;
	str = "But it doesn't matter, because we have gotten the pencil back.";
	strESP = "Pero no importa, porque hemos recuperado el l\xC1piz.";

	setTimeout(iBeenCaught, 7000);
}

function iBeenCaught () {
	document.getElementById('speakerCircle').src = "../../Assets/Characters/GoblinCoin.png";

	type();

	i = 0;
	isOver = false;
	str = "No! I've been caught. But it doesn't matter.";
	strESP = "\xA1No! Me han sorprendido. Pero no importa.";

	setTimeout(fellowGoblins, 6000);
}

function fellowGoblins () {
	type();

	i = 0;
	isOver = false;
	str = "I have 10 of my fellow Goblins on their way to the Castle right now";
	strESP = "Tengo 10 de mis compa\xD1eros en su camino hacia el Castillo ahora";

	setTimeout(toCompleteProphecy, 8000);
}

function toCompleteProphecy () {
	document.getElementById('merlin').src = "../../Assets/Characters/Single/MerlinSuprised.gif";
	type();

	i = 0;
	isOver = false;
	str = "to complete the prophecy of the magical pencil.";
	strESP = "para completar la profecía del l\xC1piz m\xC1gico.";

	setTimeout(hopesComeTrue, 6000);
}

function hopesComeTrue () {
	type();

	i = 0;
	isOver = false;
	str = "Our hopes will soon come true...";
	strESP = "Nuestras esperanzas pronto se har\xC1n realidad..."

	setTimeout(thanksYoungOne, 9000);
}

function thanksYoungOne () {
	document.getElementById('merlin').src = "../../Assets/Characters/Single/MerlinBlinking.gif";
	document.getElementById('speakerCircle').src = "../../Assets/Characters/MerlinCoin.png";

	type();

	i = 0;
	isOver = false;
	str = "Thank you, young one.";
	strESP = "Gracias, joven.";

	setTimeout(youHaveHelped, 5000);
}

function youHaveHelped () {
	type();

	i = 0;
	isOver = false;
	str = "You have helped me a lot by finding the thief who stole our magical pencil.";
	strESP = "Me has ayudado mucho para encontrar al ladr\xD3n que rob\xD3 nuestro l\xC1piz m\xC1gico.";

	setTimeout(youWillRewarded, 9000);
}

function youWillRewarded () {
	type();

	i = 0;
	isOver = false;
	str = "You will be rewarded with 100 Power-Gems and more experience points.";
	strESP = "Usted ser\xC1 recompensado con 100 Power-Gems y m\xC1s puntos de experiencia.";

	setTimeout(cannotThanks, 9000);
}

function cannotThanks () {
	type();

	i = 0;
	isOver = false;
	str = "I cannot thank you enough.";
	strESP = "No puedo agradecerte lo suficiente.";

	setTimeout(itIsHonor, 6000);
}

function itIsHonor () {
	selectedCharacter = JSON.parse(localStorage.getItem("characterSelected"));

	if (selectedCharacter == "Ajax") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/AjaxCoin.png";
	} else if (selectedCharacter == "Nova") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/NovaCoin.png";
	} else if (selectedCharacter == "Dana") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/DanaCoin.png";
	} else if (selectedCharacter == "Jade") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/JadeCoin.png";
	} else if (selectedCharacter == "Sofia") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/SofiaCoin.png";
	} else if (selectedCharacter == "Quinn") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/QuinnCoin.png";
	} else if (selectedCharacter == "Sage") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/SageCoin.png";
	} else if (selectedCharacter == "Ramon") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/RamonCoin.png";
	}

	type();

	i = 0;
	isOver = false;
	str = "It is an honor to fight in the name of the Wisdom Warriors!";
	strESP = "\xA1Es un honor a luchar en el nombre de los Guerreros Sabios!";

	setTimeout(congratsRewards, 6000);
}

function congratsRewards() {
	document.getElementById('speakerCircle').src = "../../Assets/LOGO2.png";

	levelOneSelectedOption = JSON.parse(localStorage.getItem("levelOneSelectedOption"));

	if (levelOneSelectedOption == 1 && isSpanish == 0) {
		document.getElementById('popup').src = "../../Assets/RewardsMath.png";
		document.getElementById('selectedPowerText').innerHTML = "";
	} else if (levelOneSelectedOption == 2 && isSpanish == 0) {
		document.getElementById('popup').src = "../../Assets/RewardsSocialStudies.png";
		document.getElementById('selectedPowerText').innerHTML = "";
	} else if (levelOneSelectedOption == 3 && isSpanish == 0) {
		document.getElementById('popup').src = "../../Assets/RewardsScience.png";
		document.getElementById('selectedPowerText').innerHTML = "";
	} else if (levelOneSelectedOption == 4 && isSpanish == 0) {
		document.getElementById('popup').src = "../../Assets/RewardsLangArts.png";
		document.getElementById('selectedPowerText').innerHTML = "";
	} 


	else if (levelOneSelectedOption == 1 && isSpanish == 1) {
		document.getElementById('popup').src = "../../Assets/RewardsMathESP.png";
		document.getElementById('selectedPowerText').innerHTML = "";
	} else if (levelOneSelectedOption == 2 && isSpanish == 1) {
		document.getElementById('popup').src = "../../Assets/RewardsSocialStudiesESP.png";
		document.getElementById('selectedPowerText').innerHTML = "";
	} else if (levelOneSelectedOption == 3 && isSpanish == 1) {
		document.getElementById('popup').src = "../../Assets/RewardsScienceESP.png";
		document.getElementById('selectedPowerText').innerHTML = "";
	} else if (levelOneSelectedOption == 4 && isSpanish == 1) {
		document.getElementById('popup').src = "../../Assets/RewardsLangArtsESP.png";
		document.getElementById('selectedPowerText').innerHTML = "";
	}

	document.getElementById('opacityTransition').style.transition = "opacity 3s";
	document.getElementById('opacityTransition').style.opacity = 1;

	setTimeout(rewardsText, 500);

}
function rewardsText () {
	type();

	i = 0;
	isOver = false;

	var strPtOne = "CONGRATULATIONS, ";
	var strPtOneESP = "\xA1CONGRATULACIONES, ";

	userName = JSON.parse(localStorage.getItem("Name"));

	var strPtTwo = userName;

	var strPtOneConcat = strPtOne.concat(strPtTwo);
	var strPtOneConcatESP = strPtOneESP.concat(strPtTwo);

	var strPtThree = "! You have gained 100 Power-Gems";
	var strPtThreeESP = "! \xA1Has ganado 100 Power-Gems";

	var strPtTwoConcat = strPtOneConcat.concat(strPtThree);
	var strPtTwoConcatESP = strPtOneConcatESP.concat(strPtThreeESP);

	str = strPtTwoConcat;
	strESP = strPtTwoConcatESP;

	actualGems = actualGems + 100;

	j = 0;
	gemLimit = 100;
	countGems();

}
function goToXP () {

	levelOneSelectedOption = JSON.parse(localStorage.getItem("levelOneSelectedOption"));
	defineFavoriteSubject = JSON.parse(localStorage.getItem("favoriteSubject"));
	defineWorstSubject = JSON.parse(localStorage.getItem("worstSubject"));

	if (levelOneSelectedOption == 1) {
		var strPtOne = "and ";
		var strPtOneESP = "y ";

		if (defineFavoriteSubject == "Math") {
			var strPtTwo = "75";
			actualMathXP = actualMathXP + 75;
			xpLimit = 75;
		} else if (defineWorstSubject == "Math") {
			var strPtTwo = "80";
			actualMathXP = actualMathXP + 80;
			xpLimit = 80;
		} else {
			var strPtTwo = "50";
			actualMathXP = actualMathXP + 50;
			xpLimit = 50;
		}

		var strPtOneConcat = strPtOne.concat(strPtTwo);
		var strPtOneConcatESP = strPtOneESP.concat(strPtTwo);

		var strPtThree = " Math Experience Points - XP!";
		var strPtThreeESP = " Puntos de Experiencia de Matem\xC1ticas!";

		type();

		i = 0;
		isOver = false;

		strPtTwoConcat = strPtOneConcat.concat(strPtThree);
		strPtTwoConcatESP = strPtOneConcatESP.concat(strPtThreeESP);

		str = strPtTwoConcat;
		strESP = strPtTwoConcatESP;

	} else if (levelOneSelectedOption == 2) {
		var strPtOne = "and ";
		var strPtOneESP = "y ";

		if (defineFavoriteSubject == "Social Studies") {
			var strPtTwo = "75";
			actualSocialXP = actualSocialXP + 75;
			xpLimit = 75;
		} else if (defineWorstSubject == "Social Studies") {
			var strPtTwo = "80";
			actualSocialXP = actualSocialXP + 80;
			xpLimit = 80;
		} else {
			var strPtTwo = "50";
			actualSocialXP = actualSocialXP + 50;
			xpLimit = 50;
		}

		var strPtOneConcat = strPtOne.concat(strPtTwo);
		var strPtOneConcatESP = strPtOneESP.concat(strPtTwo);

		var strPtThree = " Social Studies Experience Points - XP!";
		var strPtThreeESP = " Puntos de Experiencia de Historia";

		type();

		i = 0;
		isOver = false;

		strPtTwoConcat = strPtOneConcat.concat(strPtThree);
		strPtTwoConcatESP = strPtOneConcatESP.concat(strPtThreeESP);

		str = strPtTwoConcat;
		strESP = strPtTwoConcatESP;
	}
	else if (levelOneSelectedOption == 3) {
		var strPtOne = "and ";
		var strPtOneESP = "y ";

		if (defineFavoriteSubject == "Science") {
			var strPtTwo = "75";
			actualScienceXP = actualScienceXP + 75;
			xpLimit = 75;
		} else if (defineWorstSubject == "Science") {
			var strPtTwo = "80";
			actualScienceXP = actualScienceXP + 80;
			xpLimit = 80;
		} else {
			var strPtTwo = "50";
			actualScienceXP = actualScienceXP + 50;
			xpLimit = 50;
		}

		var strPtOneConcat = strPtOne.concat(strPtTwo);
		var strPtOneConcatESP = strPtOneESP.concat(strPtTwo);

		var strPtThree = " Science Experience Points - XP!";
		var strPtThreeESP = " Puntos de Experiencia de Ciencias";

		type();

		i = 0;
		isOver = false;

		strPtTwoConcat = strPtOneConcat.concat(strPtThree);
		strPtTwoConcatESP = strPtOneConcatESP.concat(strPtThreeESP);

		str = strPtTwoConcat;
		strESP = strPtTwoConcatESP;
	} else if (levelOneSelectedOption == 4) {
		var strPtOne = "and ";
		var strPtOneESP = "y ";

		if (defineFavoriteSubject == "Language Arts") {
			var strPtTwo = "75";
			actualLangXP = actualLangXP + 75;
			xpLimit = 75;
		} else if (defineWorstSubject == "Language Arts") {
			var strPtTwo = "80";
			actualLangXP = actualLangXP + 80;
			xpLimit = 80;
		} else {
			var strPtTwo = "50";
			actualLangXP = actualLangXP + 50;
			xpLimit = 50;
		}

		var strPtOneConcat = strPtOne.concat(strPtTwo);
		var strPtOneConcatESP = strPtOneESP.concat(strPtTwo);

		var strPtThree = " Language Arts Experience Points - XP!";
		var strPtThreeESP = " Puntos de Experiencia de Lingua";

		type();

		i = 0;
		isOver = false;

		strPtTwoConcat = strPtOneConcat.concat(strPtThree);
		strPtTwoConcatESP = strPtOneConcatESP.concat(strPtThreeESP);

		str = strPtTwoConcat;
		strESP = strPtTwoConcatESP;
	}

	j = 0;
	countXP();

}

function keepUpWork () {
	type();

		i = 0;
		isOver = false;

		str = "Keep up the good work!";
		strESP = "\xA1Mantener el buen trabajo!";

		localStorage.setItem("gems", JSON.stringify(actualGems));
		localStorage.setItem("mathXP", JSON.stringify(actualMathXP));
		localStorage.setItem("langXP", JSON.stringify(actualLangXP));
		localStorage.setItem("scienceXP", JSON.stringify(actualScienceXP));
		localStorage.setItem("socialXP", JSON.stringify(actualSocialXP));


		setTimeout(whatGoblinMeanOne, 5000);
} 
function whatGoblinMeanOne () {
	document.getElementById('opacityTransition').style.transition = "opacity 3s";
	document.getElementById('opacityTransition').style.opacity = 0;

	setTimeout(whatGoblinMeanTwo, 3000);
}
function whatGoblinMeanTwo () {
	selectedCharacter = JSON.parse(localStorage.getItem("characterSelected"));


	if (selectedCharacter == "Ajax") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/AjaxCoin.png";
	} else if (selectedCharacter == "Nova") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/NovaCoin.png";
	} else if (selectedCharacter == "Dana") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/DanaCoin.png";
	} else if (selectedCharacter == "Jade") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/JadeCoin.png";
	} else if (selectedCharacter == "Sofia") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/SofiaCoin.png";
	} else if (selectedCharacter == "Quinn") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/QuinnCoin.png";
	} else if (selectedCharacter == "Sage") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/SageCoin.png";
	} else if (selectedCharacter == "Ramon") {
		document.getElementById('speakerCircle').src = "../../Assets/Characters/RamonCoin.png";
	}

	type();

		i = 0;
		isOver = false;

		str = "Master Merlin...What does the Goblin mean?";
		strESP = "Se\xD1or Merlin...\xBFQu\xC9 significa el duende?";

		setTimeout(whatMagicalProphecy, 6000);
}

function whatMagicalProphecy () {
	type();

		i = 0;
		isOver = false;

		str = "What is this magical prophecy he was speaking about?";
		strESP = "\xBFDe qu\xC9 profec\xCDa m\xC1gica hablaba?";

		setTimeout(notEnoughTime, 7500);
}
function notEnoughTime () {
	document.getElementById('speakerCircle').src = "../../Assets/Characters/MerlinCoin.png";

	var strPtOne = "There is not enough time to explain, ";
	var strPtOneESP = "No hay tiempo suficiente para explicar, ";
	userName = JSON.parse(localStorage.getItem("Name"));
	var strPtTwo = userName;
	var strPtOneConcat = strPtOne.concat(strPtTwo);
	var strPtOneConcatESP = strPtOneESP.concat(strPtTwo);
	var strPtTwoConcat = strPtOneConcat.concat(".");
	var strPtTwoConcatESP = strPtOneConcatESP.concat(".");

	type();

		i = 0;
		isOver = false;

		str = strPtTwoConcat;
		strESP = strPtTwoConcatESP;
	setTimeout(otherGoblins, 7000);
}
function otherGoblins () {
	type();

		i = 0;
		isOver = false;

		str = "The other Goblins are on their way to the Castle as we speak.";
		strESP = "Los otros duendes se dirigen al Castillo mientras hablamos.";
	setTimeout(prepareDefend, 9000);
}
function prepareDefend () {
	type();

		i = 0;
		isOver = false;

		str = "Now hurry, you must prepare to defend the Castle from the Goblins.";
		strESP = "Ahora date prisa, debes que prepararte para defender el Castillo contra los duendes.";
	setTimeout(castleNeedHelp, 11000);
}
function castleNeedHelp () {

	type();

		i = 0;
		isOver = false;

		str = "HURRY! THE CASTLE NEEDS YOUR HELP!";
		strESP = "\xA1PRISA! \xA1EL CASTILLO NECESITA SU AYUDA!";
}

//--------Count XP-------\\
function countXP () {
	if (j == xpLimit) {
		setTimeout(keepUpWork, 6000);
	} else {
		j = j + 1;
		document.getElementById('numXP').innerHTML = j;

		setTimeout(countXP, 50);
	}
}

//------Count Gems------\\
function countGems () {
	if (j == gemLimit) {
		setTimeout(goToXP, 4000);
	} else {
		j = j + 1;
		document.getElementById('numGems').innerHTML = j;

		setTimeout(countGems, 50);
	}
}

//----------------------\\
function type() {

	if (isSpanish == 1) {
		text = strESP.slice(0, ++i);
    
    document.getElementById('textArea').innerHTML = text;

		if(i == strESP.length) {
    	isOver = true;
    } else {
    	isOver = false; 
    }

    if (isOver == true) {
    	return; 
    }
   
    setTimeout(type, scrollSpeed);
} else {
	text = str.slice(0, ++i);
    
    document.getElementById('textArea').innerHTML = text;

		if(i == str.length) {
    	isOver = true;
    } else {
    	isOver = false; 
    }

    if (isOver == true) {
    	return; 
    }
   
    setTimeout(type, scrollSpeed);
}

}

/*-------------------------
---------------------------
---------------------------
---------------------------
---------------------------
---------------------------
---------------------------
---------------------------
-------------------------*/

//--------SPANISH----------\\

function spanishButton() {
	if (isSpanish == 0) {

		changeToSpanish();

	isSpanish = 1;

	localStorage.setItem("spanish", JSON.stringify(isSpanish));

} else if (isSpanish == 1) {

		changeToEnglish();

	isSpanish = 0;

	localStorage.setItem("spanish", JSON.stringify(isSpanish));
	
}
}

function changeToSpanish() {

	//Start Page
	if (onLoadParam == 0) {
	document.getElementById('spanishCoin').src = "../../Assets/ESP/Coin-ENG.png";
	document.getElementById('titletitleTwo').src = "../../Assets/ESP/clickToSTART-ESP.png";
	document.getElementById('titletitle').src = "../../Assets/ESP/TITLEFOREST-ESP.png";
}

	//Character Menu Page
	if (onLoadParam == 1) {
	document.getElementById('ClickToStart').src = "../../Assets/ESP/ClickToStart-Small-ESP.png";
	document.getElementById('letsGetStarted').src = "../../Assets/Text/LetsGetStartedESP.png";
	document.getElementById('StartButton').src = "../../Assets/StartButtonESP.png";
}
}

function changeToEnglish() {

	//Start Page
	if (onLoadParam == 0){
	document.getElementById('spanishCoin').src = "../../Assets/ESP/Coin-ESP.png";
	document.getElementById('titletitleTwo').src = "../../Assets/clickToSTART.png";
	document.getElementById('titletitle').src = "../../Assets/TITLEFORESTFULL.png";
}

	//Character Menu Page
	if (onLoadParam == 1) {
	document.getElementById('ClickToStart').src = "../../Assets/Text/ClickToStart.png";

}
}
//--------MISC--------------\\



//--------MENU FUNCTIONS--------------\\

function goToMenu () {
	document.getElementById('tdOne').addEventListener("click", proceedToLogin);
	document.getElementById('tdTwo').addEventListener("click", proceedToProgress);
	document.getElementById('tdThree').addEventListener("click", proceedToSettings);
	document.getElementById('tdFour').addEventListener("click", proceedToDev);
}

function backButtonDoes() {
	
	if (isItMainMenu == 1) {
		document.getElementById('tdOne').removeEventListener("click", proceedToLogin);
	document.getElementById('tdTwo').removeEventListener("click", proceedToProgress);
	document.getElementById('tdThree').removeEventListener("click", proceedToSettings);
	document.getElementById('tdFour').removeEventListener("click", proceedToDev);

		window.location.href = "start.html"
		return false;

	} else if (isItMainMenu == 0) {
		document.getElementById('devPassword').value = null;
		document.getElementById('reset').style.opacity = 0;
		document.getElementById('reset').style.zIndex = -1;

		document.getElementById('download').style.opacity = 0;
		document.getElementById('download').style.zIndex = -1;

		document.getElementById('reset').removeEventListener("click", resetGame);
		document.getElementById('passwordForm').style.opacity = 0;
		document.getElementById('enterButton').style.opacity = 0;
		document.getElementById('passwordForm').style.zIndex = -1;
		document.getElementById('enterButton').style.zIndex = -1;
		document.getElementById('enterButton').removeEventListener("click", passwordEnter);

		document.getElementById('tdOne').addEventListener("click", proceedToLogin);
	document.getElementById('tdTwo').addEventListener("click", proceedToProgress);
	document.getElementById('tdThree').addEventListener("click", proceedToSettings);
	document.getElementById('tdFour').addEventListener("click", proceedToDev);

		document.getElementById('MenuMain').src = "../../Assets/MenuMain.png";
		isItMainMenu = 1;
		return false;
	}
}

function resetFalse() {
	return false;
}

function proceedToLogin() {
	document.getElementById('tdOne').removeEventListener("click", proceedToLogin);
	document.getElementById('tdTwo').removeEventListener("click", proceedToProgress);
	document.getElementById('tdThree').removeEventListener("click", proceedToSettings);
	document.getElementById('tdFour').removeEventListener("click", proceedToDev);


	isItMainMenu = 0;
	document.getElementById('MenuMain').src = "../../Assets/MenuCredits.png";
}
function proceedToProgress() {

	userName = JSON.parse(localStorage.getItem("Name"));
	selectedCharacter = JSON.parse(localStorage.getItem("characterSelected"));
	defineFavoriteSubject = JSON.parse(localStorage.getItem("favoriteSubject"));
	defineWorstSubject = JSON.parse(localStorage.getItem("worstSubject"));	

	actualGems = JSON.parse(localStorage.getItem("gems"));
	actualMathXP = JSON.parse(localStorage.getItem("mathXP"));
	actualSocialXP = JSON.parse(localStorage.getItem("socialXP"));
	actualScienceXP = JSON.parse(localStorage.getItem("scienceXP"));
	actualLangXP = JSON.parse(localStorage.getItem("langXP"));

	isSpanish = JSON.parse(localStorage.getItem("spanish"));

	
	var setDate = JSON.parse(localStorage.getItem("setDate"));
	var setTime = JSON.parse(localStorage.getItem("setTime"));


	SuccessSocial = JSON.parse(localStorage.getItem("SuccessSocial"));
	SuccessLang = JSON.parse(localStorage.getItem("SuccessLang"));

	FailSocial = JSON.parse(localStorage.getItem("FailSocial"));
	FailLang = JSON.parse(localStorage.getItem("FailLang"));

	var successRate = Math.round(100*((SuccessLang + SuccessSocial + SuccessScience + SuccessMath)/(FailLang + FailSocial + FailScience + FailMath + SuccessSocial + SuccessLang + SuccessMath + SuccessScience)));

	if (successRate == NaN) {
		successRate = 0;
	}

	if (FailLang == null) {
		FailLang = 0;
	}

	if (SuccessSocial == null) {
		SuccessSocial = 0;
	} else if (FailSocial == null) {
		FailSocial = 0;
	} else if (SuccessLang == null) {
		SuccessLang = 0;
	} else if (FailLang == null) {
		FailLang = 0;
	}


	var whatSpanish;

	if (isSpanish == 0) {
		whatSpanish = "English";
	} else if (isSpanish == 1) {
		whatSpanish = "Spanish";
	}

	var textData = "Wisdom Warriors Student Progress Report\n\n" + DateNowTime + "\n\n\nStudent Name: " + userName + "\n\nCharacter: " + selectedCharacter + "\nFavorite Subject: " + defineFavoriteSubject + "\nImprovement Subject: " + defineWorstSubject + "\n\nCurrent Game Language: " + whatSpanish + "\n\nPower-Gems: " + actualGems + "\nMath Experience Points: " + actualMathXP + "\nLanguage Arts Experience Points: " + actualLangXP + "\nScience Experience Points: " + actualScienceXP + "\nSocial Studies Experience Points: " + actualSocialXP + "\n\nLast Played: " + setDate + " " + setTime + "\n\nOverall Question Success Rate: " + successRate + "%\n\nCorrect Answers - Math: " + SuccessMath + "\nCorrect Answers - Language Arts: " + SuccessLang + "\nCorrect Answers - Science: " + SuccessScience + "\nCorrect Answers - Social Studies: " + SuccessSocial + "\n\nIncorrent Answers - Math: " + FailMath + "\nIncorrent Answers - Language Arts: " + FailLang + "\nIncorrent Answers - Science: " + FailScience + "\nIncorrent Answers - Social Studies: " + FailSocial;

	var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

   	var firstPart = "ProgressReport-";
   	var concated  = firstPart.concat(userName);
    document.getElementById('downloadlink').download = concated;

    textFile = window.URL.createObjectURL(data);

    return textFile;
  };


  var create = document.getElementById('create');
    //textbox = document.getElementById('textbox');

    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(textData);
    link.style.display = 'block';
 

	document.getElementById('download').style.opacity = 1;
	document.getElementById('download').style.zIndex = 100;

	document.getElementById('tdOne').removeEventListener("click", proceedToLogin);
	document.getElementById('tdTwo').removeEventListener("click", proceedToProgress);
	document.getElementById('tdThree').removeEventListener("click", proceedToSettings);
	document.getElementById('tdFour').removeEventListener("click", proceedToDev);

	isItMainMenu = 0;
	document.getElementById('MenuMain').src = "../../Assets/MENUProgress.png";

}
function proceedToSettings() {
	document.getElementById('tdOne').removeEventListener("click", proceedToLogin);
	document.getElementById('tdTwo').removeEventListener("click", proceedToProgress);
	document.getElementById('tdThree').removeEventListener("click", proceedToSettings);
	document.getElementById('tdFour').removeEventListener("click", proceedToDev);

	isItMainMenu = 0;
	document.getElementById('MenuMain').src = "../../Assets/MENUSettings.png";
	
}

function proceedToDev() {

	document.getElementById('passwordForm').style.zIndex = 100;
		document.getElementById('enterButton').style.zIndex = 100;

	document.getElementById('tdOne').removeEventListener("click", proceedToLogin);
	document.getElementById('tdTwo').removeEventListener("click", proceedToProgress);
	document.getElementById('tdThree').removeEventListener("click", proceedToSettings);
	document.getElementById('tdFour').removeEventListener("click", proceedToDev);

	isItMainMenu = 0;
	document.getElementById('MenuMain').src = "../../Assets/MENUDev.png";
	document.getElementById('passwordForm').style.opacity = 1;
	document.getElementById('enterButton').style.opacity = 1;

	document.getElementById('enterButton').addEventListener("click", passwordEnter);
	

	
//document.getElementById('devPassword').style.display = 'block'; 

}
function passwordEnter () {
	var inputPassword = document.getElementById('devPassword').value;
	var password = "WisdomWarriors";

	if (inputPassword == password) {
		document.getElementById('enterButton').removeEventListener("click", passwordEnter);
		document.getElementById('passwordForm').style.opacity = 0;
	document.getElementById('enterButton').style.opacity = 0;
	document.getElementById('passwordForm').style.zIndex = -1;
		document.getElementById('enterButton').style.zIndex = -1;
		document.getElementById('reset').style.opacity = 1;
	document.getElementById('reset').style.zIndex = 101;

	document.getElementById('reset').addEventListener("click", resetGame);

	} else {
		alert('Oops! Wrong Password. Please try again.');
	}
}

function resetGame () {
	localStorage.clear();
	alert('Game Reset');
}

//--------LEVEL SELECT OR SETUP--------\\

function levelOrSetup() {

	selectedCharacter = JSON.parse(localStorage.getItem("characterSelected"));
	userName = JSON.parse(localStorage.getItem("Name"));
	defineFavoriteSubject = JSON.parse(localStorage.getItem("favoriteSubject"));
	defineWorstSubject = JSON.parse(localStorage.getItem("worstSubject"));

	if (selectedCharacter == null || userName == null || defineFavoriteSubject == null || defineWorstSubject == null) {
		window.location.href = "name.html";
	} else {
		window.location.href = "levelOne.html";
	}
}

//---------LOCAL STORAGE RESET-------------\\

function devReset() {
	localStorage.clear();
}

//--------SETUP FUNCTIONS---------\\

function definefavorite(x) {
	if (x == 1) {
		defineFavoriteSubject = "Math";
	} else if (x == 2) {
		defineFavoriteSubject = "Science";
	} else if (x == 3) {
		defineFavoriteSubject = "Social Studies";
	} else {
		defineFavoriteSubject = "Language Arts";
	}

	localStorage.setItem("favoriteSubject", JSON.stringify(defineFavoriteSubject));

	window.location.href = "worstSubject.html";
}

function defineworst(x) {
	if (x == 1) {
		defineWorstSubject = "Math";
	} else if (x == 2) {
		defineWorstSubject = "Science";
	} else if (x == 3) {
		defineWorstSubject = "Social Studies";
	} else {
		defineWorstSubject = "Language Arts";
	}

	localStorage.setItem("worstSubject", JSON.stringify(defineWorstSubject));

	window.location.href = "levelOne.html";
}

function submitName(x) {
	userName = document.getElementById('nameinput').value;

	isSpanish = JSON.parse(localStorage.getItem("spanish"));

if (JSON.parse(localStorage.getItem("spanish")) != null){
isSpanish = JSON.parse(localStorage.getItem("spanish"));
} else {
	isSpanish = 0;
}

if (userName == null || userName == "") {

	if (isSpanish == 1) {
	alert("Por favor, ingrese su nobmre.");
	return false;
} else {
alert("Please Enter your Name.");
	return false;
}
} else {

	localStorage.setItem("Name", JSON.stringify(userName));

	window.location.href = "characterSelect.html";
	return false;
}

}

function characterSelected(a) {
		selectedCharacter = a;

    // Store
    localStorage.setItem("characterSelected", JSON.stringify(selectedCharacter));


		window.location.href= "../favoriteSubject.html";
		return false;
	}

//-------------------------------------------------------\\

function whichCharacter() {

    selectedCharacter = JSON.parse(localStorage.getItem("characterSelected"));


	if (selectedCharacter == "Ajax") {
		document.getElementById('character').src = "../../Assets/Characters/Single/Ranger.gif";
	} else if (selectedCharacter == "Nova") {
		document.getElementById('character').src = "../../Assets/Characters/Single/Ninja.gif";
	} else if (selectedCharacter == "Dana") {
		document.getElementById('character').src = "../../Assets/Characters/Single/Guardian.gif";
	} else if (selectedCharacter == "Jade") {
		document.getElementById('character').src = "../../Assets/Characters/Single/Pirate.gif";
	} else if (selectedCharacter == "Sofia") {
		document.getElementById('character').src = "../../Assets/Characters/Single/Knight.gif";
	} else if (selectedCharacter == "Quinn") {
		document.getElementById('character').src = "../../Assets/Characters/Single/Paladin.gif";
	} else if (selectedCharacter == "Sage") {
		document.getElementById('character').src = "../../Assets/Characters/Single/Hunter.gif";
	} else if (selectedCharacter == "Ramon") {
		document.getElementById('character').src = "../../Assets/Characters/Single/Scout.gif";
	}
}
function whichCharacterLOne() {

    selectedCharacter = JSON.parse(localStorage.getItem("characterSelected"));


	if (selectedCharacter == "Ajax") {
		document.getElementById('character').src = "../../../Assets/Characters/Single/Ranger.gif";
	} else if (selectedCharacter == "Nova") {
		document.getElementById('character').src = "../../../Assets/Characters/Single/Ninja.gif";
	} else if (selectedCharacter == "Dana") {
		document.getElementById('character').src = "../../../Assets/Characters/Single/Guardian.gif";
	} else if (selectedCharacter == "Jade") {
		document.getElementById('character').src = "../../../Assets/Characters/Single/Pirate.gif";
	} else if (selectedCharacter == "Sofia") {
		document.getElementById('character').src = "../../../Assets/Characters/Single/Knight.gif";
	} else if (selectedCharacter == "Quinn") {
		document.getElementById('character').src = "../../../Assets/Characters/Single/Paladin.gif";
	} else if (selectedCharacter == "Sage") {
		document.getElementById('character').src = "../../../Assets/Characters/Single/Hunter.gif";
	} else if (selectedCharacter == "Ramon") {
		document.getElementById('character').src = "../../../Assets/Characters/Single/Scout.gif";
	}
}


//----------------------------------------------------

//----------------------------------------------------

//----------------------------------------------------

//----------------------------------------------------

//----------------------------------------------------

//----------------------------------------------------

//----------------------------------------------------

//----------------------------------------------------

//----------------------------------------------------

//----------------------------------------------------

//----------------------------------------------------


function nameStartFunc() {
	isSpanish = JSON.parse(localStorage.getItem("spanish"));

if (JSON.parse(localStorage.getItem("spanish")) != null){
isSpanish = JSON.parse(localStorage.getItem("spanish"));
} else {
	isSpanish = 0;
}

	if (isSpanish == 1) {
		document.getElementById('nameinput').placeholder = "TU NOMBRE";
		document.getElementById('WhatIsName').src = "../../Assets/WhatIsNameESP.png";
	}
}

function selectCharFunc() {
	isSpanish = JSON.parse(localStorage.getItem("spanish"));

if (JSON.parse(localStorage.getItem("spanish")) != null){
isSpanish = JSON.parse(localStorage.getItem("spanish"));
} else {
	isSpanish = 0;
}

	if (isSpanish == 1) {
		document.getElementById('ChooseACharacter').src = "../../Assets/Characters/ChooseACharacterESP.png";
	}
}

function favoriteSubjectFunc() {
	isSpanish = JSON.parse(localStorage.getItem("spanish"));

if (JSON.parse(localStorage.getItem("spanish")) != null){
isSpanish = JSON.parse(localStorage.getItem("spanish"));
} else {
	isSpanish = 0;
}

	if (isSpanish == 1) {
		document.getElementById('favoriteSubject').src = "../../Assets/favoriteSubjectESP.png";
		document.getElementById('mathCoinCoin').src = "../../Assets/Coins/MathCoinESP.png";
		document.getElementById('mathCoinCoin').setAttribute("class", "leftpaddingoneone");
		document.getElementById('scienceCoinCoin').src = "../../Assets/Coins/ScienceCoinESP.png";
		document.getElementById('scienceCoinCoin').setAttribute("class", "rightpaddingoneone");
		document.getElementById('socCoinCoin').src = "../../Assets/Coins/SocialStudiesCoinTwoESP.png";
		document.getElementById('socCoinCoin').setAttribute("class", "leftpaddingtwoone");
		document.getElementById('langCoinCoin').src = "../../Assets/Coins/LanguageArtsCoinESP.png";
		document.getElementById('langCoinCoin').setAttribute("class", "rightpaddingtwoone");
	}
}

function worstSubjectFunc() {
	isSpanish = JSON.parse(localStorage.getItem("spanish"));

if (JSON.parse(localStorage.getItem("spanish")) != null){
isSpanish = JSON.parse(localStorage.getItem("spanish"));
} else {
	isSpanish = 0;
}

	if (isSpanish == 1) {
		document.getElementById('improveSubject').src = "../../Assets/improveSubjectESP.png";
		document.getElementById('mathCoinCoin').src = "../../Assets/Coins/MathCoinESP.png";
		document.getElementById('mathCoinCoin').setAttribute("class", "leftpaddingoneone");
		document.getElementById('scienceCoinCoin').src = "../../Assets/Coins/ScienceCoinESP.png";
		document.getElementById('scienceCoinCoin').setAttribute("class", "rightpaddingoneone");
		document.getElementById('socCoinCoin').src = "../../Assets/Coins/SocialStudiesCoinTwoESP.png";
		document.getElementById('socCoinCoin').setAttribute("class", "leftpaddingtwoone");
		document.getElementById('langCoinCoin').src = "../../Assets/Coins/LanguageArtsCoinESP.png";
		document.getElementById('langCoinCoin').setAttribute("class", "rightpaddingtwoone");
	}
}
