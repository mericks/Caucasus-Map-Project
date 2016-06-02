var russian = document.getElementById('Russian');
var russiaBlurb = document.getElementById('russiaBlurb');
var turkish = document.getElementById('Turkish');
var turkeyBlurb = document.getElementById('turkeyBlurb');
var persian = document.getElementById('Persian');
var iranBlurb = document.getElementById('iranBlurb');
var azeri = document.getElementById('Azeri');
var azerBlurb = document.getElementById('azerBlurb');
var georgian = document.getElementById('Georgian');
var georgiaBlurb = document.getElementById('georgiaBlurb');
var armenian = document.getElementById('Armenian');
var armeniaBlurb = document.getElementById('armeniaBlurb');
var chechen = document.getElementById('Chechen');
var chechnyaBlurb = document.getElementById('chechnyaBlurb');
var ossetian = document.getElementById('Ossetian');
var ossetiaBlurb = document.getElementById('ossetiaBlurb');
var laz = document.getElementById('Laz');
var lazBlurb = document.getElementById('lazBlurb');
var avar = document.getElementById('Avar');
var avarBlurb = document.getElementById('avarBlurb');
var abkhaz = document.getElementById('Abkhaz');
var abkhaziaBlurb = document.getElementById('abkhaziaBlurb');
var kurd = document.getElementById('Kurd');
var kurdBlurb = document.getElementById('kurdBlurb');
var legend = document.getElementById('legend');
var russianHello = document.getElementById('russianHello');
russianHello.play();

var array = [[russian, russiaBlurb, []], [turkish, turkeyBlurb], [persian, iranBlurb], [azeri, azerBlurb], [georgian, georgiaBlurb], [armenian, armeniaBlurb], [chechen, chechnyaBlurb], [ossetian, ossetiaBlurb], [laz, lazBlurb], [avar, avarBlurb], [abkhaz, abkhaziaBlurb], [kurd, kurdBlurb]];

function iOn(i) {
  return function() {
    array[i][1].style.display = 'block';
    legend.style.display = 'none';
  };
}

function iOff(i) {
  return function() {
    array[i][1].style.display = 'none';
    legend.style.display = 'block';
  };
}

function mouseMovt() {

  for (var i = 0; i < array.length; i++) {
    var mouseOn = iOn(i);
    array[i][0].addEventListener('mouseover', mouseOn);
    var mouseOff = iOff(i);
    array[i][0].addEventListener('mouseout', mouseOff);
  }
}

mouseMovt();

// Local Storage for User Language/Country information
// ––––––––––––––––––––––––––––––––––––––––––––––––––
//Connect app.js to the DOM
var uCountry = document.getElementById('uCountry');
var uLanguage = document.getElementById('uLanguage');
var uVisited = document.getElementsByName('uVisited');
var uSpeaks = document.getElementsByName('uSpeaks');
var langSubmit = document.getElementById('langSubmit');

//check to see if local storage exists
var checkLocalStorage = localStorage.userLang;
if (!checkLocalStorage) {
  console.log('No local storage');
}
else{
  //pull data out of local storage and reassign to form
  console.log('Local storage found');
  var userLangBack = JSON.parse(localStorage.userLang);
  uCountry.value = userLangBack.uCountry;
  uLanguage.value = userLangBack.uLanguage;
  for (var xx = 0; xx < uVisited.length; xx++){
    if(uVisited[xx].value === userLangBack.uVisited){
      uVisited[xx].checked = true;
    }
  }
  for (var yy = 0; yy < uSpeaks.length; yy++){
    if(uSpeaks[yy].value === userLangBack.uSpeaks){
      uSpeaks[yy].checked = true;
    }
  }
  // uSpeaks.value = userLangBack.uSpeaks;
}

//Create event listener
langSubmit.addEventListener('click', writeLangInput);

//write function that stores lang/country information
function writeLangInput(event){
  event.preventDefault();
  var visit = '';
  var speaks = '';
  for(var ii = 0; ii < uVisited.length; ii++){
    if(uVisited[ii].checked === true){
      visit = uVisited[ii].value;
      vIndex = ii;
    }
  }
  for(var ii = 0; ii < uSpeaks.length; ii++){
    if(uSpeaks[ii].checked === true){
      speaks = uSpeaks[ii].value;
      uIndex = ii;
    }
  }
  var user = new userLang(uCountry.value, uLanguage.value, visit, speaks);
  console.log(user);
  localStorage.userLang = JSON.stringify(user);
}

//create an object constructor to store lang/country information
function userLang (uCountry, uLanguage, visit, speaks){
  this.uCountry = uCountry;
  this.uLanguage = uLanguage;
  this.uVisited = visit;
  this.uSpeaks = speaks;
}

// uVisited, uSpeaks uVisited.value, uSpeaks.value
