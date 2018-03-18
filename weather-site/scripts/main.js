var section = document.querySelector('main>section.franklinTowns');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var weathe = request.response;
    showTowns(weathe);
};


function showTowns(jsonObj) {
    var theTowns = jsonObj['towns'];

    for (var i = 0;i<theTowns.length; i++) {
    if (
    theTowns[i].name == "Franklin" ||
    theTowns[i].name == "Greenville" ||
    theTowns[i].name == "Springfield"
    ){
    
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myPara5 = document.createElement('p');
    var myList = document.createElement('ul');
    

    myH2.textContent = theTowns[i].name;
    myPara1.textContent = 'Motto: "' + theTowns[i].motto + '"';
    myPara2.textContent = 'Year of Foundation: ' + theTowns[i].yearFounded;
    myPara3.textContent = 'Current Population: ' + theTowns[i].currentPopulation;
    myPara4.textContent = 'Average Rainfall: ' + theTowns[i].averageRainfall + ' inches';
    myPara5.textContent = 'Events: ';

    var townEvents = theTowns[i].events;
    for (var j = 0; j < townEvents.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = townEvents[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
        
    
        }
        else{
            continue;
        }
    }
}