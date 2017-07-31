var randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var randomColor = function () {
  var h = randomInt(0, 360);
  var s = randomInt(42, 98);
  var l = randomInt(38, 94);
  return "hsl(" + h + "," + s + "%," + l + "%)";
};

var reactiveCircles = function() {
  svg.addEventListener("mouseover", function(e) {
    var el = e.target;
    if (el == svg) return;
    var map = new Map();
    map.set("el", [el]);
    map.set("cx", [el.getAttribute("cx"), randomInt(0, maxX)]);
    map.set("cy", [el.getAttribute("cy"), randomInt(0, maxY)]);
    map.set("duration", 1500);
    map.set("easing", "easeOutElastic");
    animate(map);
  });
};

var svgNS = "http://www.w3.org/2000/svg";
var create = function (el) {
  return document.createElementNS(svgNS, el);
};

var svg = create("svg");
svg.setAttribute("version", 1.1);
svg.setAttribute("xmlns", svgNS);

var maxX = window.innerWidth;
var maxY = window.innerHeight;

var params = [];
var i = 500;
while (i--) {
  var circle = create("circle");
  circle.setAttribute("fill", randomColor());
  svg.appendChild(circle);

  var map = new Map();
  map.set("el", [circle]);
  map.set("cx", [maxX/2, randomInt(0, maxX)]);
  map.set("cy", [maxY/2, randomInt(0, maxY)]);
  map.set("r", [0, randomInt(4, 20)]);
  map.set("delay", i*2);
  map.set("duration", 4500);
  map.set("easing", "easeOutElastic");
  if (i < 1) map.set("complete", reactiveCircles);
  params.push(map);
}

document.body.appendChild(svg);
params.forEach(animate);