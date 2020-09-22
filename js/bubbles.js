var data = [
  {name: "USA", rate: 701, population: 2300000},
  {name: "China", rate: 120, population: 1700000},
  {name: "Brazil", rate: 348, population: 746532},
  {name: "Russia", rate: 346, population: 499406},
  {name: "India", rate: 34, population: 466084},
  {name: "Thailand", rate: 531, population: 367993},
  {name: "Indonesia", rate: 99, population: 266584},
  {name: "Turkey", rate: 324, population: 264842},
  {name: "Iran", rate: 294, population: 240000},
  {name: "Philippines", rate: 179, population: 215000},
  {name: "Mexico", rate: 163, population: 203364},
  {name: "South Africa", rate: 275, population: 163015},
  {name: "Vietnam", rate: 128, population: 123697},
  {name: "Colombia", rate: 246, population: 123005},
  {name: "Ethiopia", rate: 127, population: 113727},
  {name: "Egypt", rate: 116, population: 106000},
  {name: "Argentina", rate: 230, population: 103209},
  {name: "Myanmar", rate: 171, population: 92000},
  {name: "Peru", rate: 278, population: 90934},
  {name: "Bangladesh", rate: 52, population: 88211},
  {name: "Morocco", rate: 237, population: 85767},
  {name: "Pakistan", rate: 38, population: 77275},
  {name: "Poland", rate: 195, population: 74130},
  {name: "Malaysia", rate: 230, population: 74000},
  {name: "Nigeria", rate: 36, population: 72627},
  {name: "France", rate: 105, population: 70818},
  {name: "Germany", rate: 77, population: 63851},
  {name: "Algeria", rate: 151, population: 63000},
  {name: "Saudi Arabia", rate: 197, population: 61000},
  {name: "Taiwan", rate: 258, population: 60956},
  {name: "Italy", rate: 101, population: 60769},
  {name: "Spain", rate: 124, population: 58457},
  {name: "Cuba", rate: 510, population: 57337},
  {name: "Venezuela", rate: 178, population: 57096},
  {name: "Uganda", rate: 124, population: 55229},
  {name: "South Korea", rate: 109, population: 55198},
  {name: "Ukraine", rate: 148, population: 52863},
  {name: "Kenya", rate: 102, population: 51130},
  {name: "Japan", rate: 39, population: 48802},
  {name: "Iraq", rate: 126, population: 45000},
  {name: "Uzbekistan", rate: 150, population: 43900},
  {name: "Australia", rate: 170, population: 43032},
  {name: "Chile", rate: 232, population: 42921},
  {name: "Ecuador", rate: 233, population: 40006},
  {name: "Canada", rate: 107, population: 39579},
  {name: "El Salvador", rate: 590, population: 38114},
  {name: "Cambodia", rate: 220, population: 36600},
  {name: "Tanzania", rate: 59, population: 35803},
  {name: "Belarus", rate: 343, population: 32500},
  {name: "Afghanistan", rate: 87, population: 30748},
  {name: "Cameroon", rate: 124, population: 30701},
  {name: "Turkmenistan", rate: 552, population: 30452},
  {name: "Kazakhstan", rate: 156, population: 29081},
  {name: "Dominican Republic", rate: 237, population: 26045},
  {name: "Guatemala", rate: 143, population: 25414},
  {name: "Madagascar", rate: 93, population: 24928},
  {name: "Angola", rate: 93, population: 24000},
  {name: "Nepal", rate: 79, population: 23775},
  {name: "Sri Lanka", rate: 105, population: 23355},
  {name: "Azerbaijan", rate: 235, population: 23319},
  {name: "Zambia", rate: 123, population: 22823},
  {name: "Tunisia", rate: 195, population: 22663},
  {name: "Cote d'Ivoire", rate: 82, population: 21186},
  {name: "Czech Republic", rate: 197, population: 21048},
  {name: "Sudan", rate: 52, population: 21000},
  {name: "Nicaragua", rate: 332, population: 20918},
  {name: "Romania", rate: 107, population: 20578},
  {name: "Democratic Republic of Congo", rate: 29, population: 20550},
  {name: "Honduras", rate: 229, population: 20506},
  {name: "Jordan", rate: 198, population: 20060},
  {name: "Mozambique", rate: 63, population: 19832},
  {name: "Zimbabwe", rate: 114, population: 19382},
  {name: "Israel", rate: 234, population: 19376},
  {name: "Costa Rica", rate: 374, population: 19226},
  {name: "Bolivia", rate: 158, population: 18195},
  {name: "Panama", rate: 401, population: 16953},
  {name: "Hungary", rate: 173, population: 16947},
  {name: "Ghana", rate: 52, population: 15463},
  {name: "Malawi", rate: 76, population: 14778},
  {name: "Yemen", rate: 53, population: 14000},
  {name: "Paraguay", rate: 199, population: 13607},
  {name: "Portugal", rate: 125, population: 12789},
  {name: "Singapore", rate: 199, population: 11737},
  {name: "Senegal", rate: 68, population: 11547},
  {name: "Belgium", rate: 95, population: 10883},
  {name: "Serbia", rate: 156, population: 10852},
  {name: "Burundi", rate: 85, population: 10832},
  {name: "Slovakia", rate: 195, population: 10665},
  {name: "Syria", rate: 60, population: 10599},
  {name: "Netherlands", rate: 61, population: 10464},
  {name: "Uruguay", rate: 295, population: 10243},
  {name: "Greece", rate: 95, population: 10216},
  {name: "Kyrgyzstan", rate: 161, population: 10142},
  {name: "New Zealand", rate: 201, population: 9893},
  {name: "United Arab Emirates", rate: 104, population: 9826},
  {name: "Georgia", rate: 262, population: 9740},
  {name: "Niger", rate: 44, population: 9570},
  {name: "Tajikistan", rate: 121, population: 9317},
  {name: "Libya", rate: 139, population: 9100},
  {name: "Bulgaria", rate: 125, population: 9028},
  {name: "Laos", rate: 130, population: 9000},
  {name: "Haiti", rate: 80, population: 8882},
  {name: "Chad", rate: 59, population: 8700},
  {name: "Austria", rate: 98, population: 8692},
  {name: "Benin", rate: 68, population: 7890},
  {name: "Burkina Faso", rate: 39, population: 7812},
  {name: "Namibia", rate: 295, population: 7400},
  {name: "South Sudan", rate: 50, population: 7000},
  {name: "Lebanon", rate: 144, population: 6966},
  {name: "Switzerland", rate: 81, population: 6943},
  {name: "Moldova", rate: 194, population: 6855},
  {name: "Sweden", rate: 61, population: 6210},
  {name: "Lithuania", rate: 221, population: 6138},
  {name: "Mali", rate: 33, population: 5209},
  {name: "Togo", rate: 66, population: 5109},
  {name: "Papua New Guinea", rate: 62, population: 5087},
  {name: "Albania", rate: 177, population: 5045},
  {name: "Sierra Leone", rate: 60, population: 4732},
  {name: "Kuwait", rate: 117, population: 4662},
  {name: "Gabon", rate: 241, population: 4476},
  {name: "Botswana", rate: 208, population: 4343},
  {name: "Trinidad and Tobago", rate: 292, population: 3999},
  {name: "Ireland, Republic of", rate: 79, population: 3950},
  {name: "Jamaica", rate: 138, population: 3866},
  {name: "Guinea", rate: 28, population: 3782},
  {name: "Denmark", rate: 63, population: 3635},
  {name: "Latvia", rate: 183, population: 3522},
  {name: "Bahrain", rate: 234, population: 3485},
  {name: "Swaziland", rate: 258, population: 3453},
  {name: "Mongolia", rate: 110, population: 3398},
  {name: "Croatia", rate: 79, population: 3217},
  {name: "Norway", rate: 60, population: 3190},
  {name: "Finland", rate: 53, population: 2910}
];
var containerWidth = 1230;
var containerHeight = 830;
var diameterRatio = 5000;
var leftRatio = 3000;
var topRatio = 1.25;

if (window.innerWidth < 451) {
  containerWidth = window.innerWidth;
  containerHeight = window.innerHeight * .9;
  diameterRatio = 10000;
  leftRatio = 13500;
  topRatio = 1.5;
}

var bubbles = document.getElementById('bubbles');
var bubblesInner = document.getElementById('bubbles-inner');
var bubbleHeader = document.getElementById('bubble-header');

function scaleBubbles() {
  var heightRatio = window.innerHeight/(containerHeight + 150);
  var widthRatio = window.innerWidth/(containerWidth + 150);
  var smallestRatio = (heightRatio > widthRatio) ? widthRatio : heightRatio;

  if (window.innerHeight < containerHeight || window.innerWidth < containerWidth) {
    bubbles.style.transform = 'scale(' + smallestRatio + ')';
  }
}
scaleBubbles();
window.addEventListener("orientationchange", scaleBubbles);
window.addEventListener("resize", scaleBubbles);
//todo: redraw bubbles when switching from desktop to mobile?

bubbles.style.display = "block";
data.forEach(function(country, i){

  var div = document.createElement("div");

  var innerDiv = document.createElement("div");
  innerDiv.classList = "country-bubble-inner";
  innerDiv.innerHTML = country.name;
  div.appendChild(innerDiv);

  div.classList = 'country-bubble';
  if (country.population < 250000) {
    div.classList.add('country-bubble-small');
  }
  if (country.rate > 400) {
    div.classList.add('country-bubble-high-rate');
  }
  if (country.name === "USA") {
    div.id = "country-bubble-usa";
    var innerUSA = div.querySelectorAll(".country-bubble-inner");

    var usaRate = document.createElement("div");
    usaRate.id = "usa-bubble-rate";
    usaRate.innerHTML = "Rank per capita: 1";
    innerUSA[0].appendChild(usaRate);

    var usaCount = document.createElement("div");
    usaCount.id = "usa-bubble-count";
    usaCount.innerHTML = "Rank in absolute: 1";
    innerUSA[0].appendChild(usaCount);
  }
  div.style.position = 'absolute';

  var diameter = Math.floor(country.population / diameterRatio);
  div.style.left = Math.floor(country.population / leftRatio) + 'px';
  div.style.top = containerHeight - (diameter/2) - Math.floor(country.rate / topRatio) + 'px';
  div.style.width = diameter + 'px';
  div.style.height = diameter + 'px';
  div.style.zIndex = data.length - i;

  if (country.name == 'Japan') {
    div.classList.add('japan');
    div.style.zIndex = 1000;
  }

  bubblesInner.appendChild(div);
})

function recalculateUSA(prisoners) {
  var usa = document.getElementById("country-bubble-usa");
  var rate = (prisoners/328000000) * 100000;

  var usaCount = document.getElementById("usa-bubble-count");
  usaCount.innerHTML = "Rank in absolute: " + getRankPopulation(prisoners);

  var usaRate = document.getElementById("usa-bubble-rate");
  usaRate.innerHTML = "Rank per capita: " + getRankRate(rate);

  var diameter = Math.floor(prisoners / diameterRatio);
  usa.style.left = Math.floor(prisoners / leftRatio) + 'px';
  usa.style.top = containerHeight - (diameter/2) - Math.floor(rate / topRatio) + 'px';
  usa.style.width = diameter + 'px';
  usa.style.height = diameter + 'px';
}

function getRankPopulation(population) {
  var rank = 0;
  data.forEach(function(country){
    if (country.population > population) {
      rank++;
    }
  });
  return rank || 1;
}

function getRankRate(rate) {
  var rank = 0;
  data.forEach(function(country){
    if (country.rate > rate) {
      rank++;
    }
  });
  return rank || 1;
}

var usa_prisoners = 2300000;
var checks = document.querySelectorAll('.release');
checks.forEach(function(check) {
  check.addEventListener('change', function(e){
    var change = parseInt(e.target.value);

    if (e.target.checked) {
      usa_prisoners -= change;
    }
    else {
      usa_prisoners += change;
    }
    recalculateUSA(usa_prisoners);
  });
})

var radios = document.querySelectorAll('.release-radio');
radios.forEach(function(radio){
  radio.addEventListener('change', function(e){
    var change = parseInt(e.target.value);
    var sibiling = document.getElementById(e.target.dataset.sibiling);
    sibiling.checked = false;
    usa_prisoners -= change;
    recalculateUSA(usa_prisoners);
  })
})
