hideSVG("line");
hideSVG("hammer");
hideSVG("body");


function hideSVG(elementID){
  var path = document.getElementById(elementID);
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition ='none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
}

function retractSVG(elementID){
  var path = document.getElementById(elementID);
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in';
  path.style.strokeDasharray = length + ' ' + length;
  path.getBoundingClientRect();
  path.style.strokeDashoffset = length;
}

function animateSVG(elementID){
  var path = document.getElementById(elementID);
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition ='none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition ='stroke-dashoffset 10s ease-in-out';
  path.style.strokeDashoffset = '0';
}

history.pushState({urlPath:'/'},"",'/');

var div = document.getElementById('fadetitle'),
    letters = div.textContent.split('');

while(div.hasChildNodes()) div.removeChild(div.firstChild);

for(var i = 0; i < letters.length; i++) {
  var letter = document.createElement('span'),
      style = 'opacity ' + (Math.random() * 1) + 's linear';
  letter.appendChild(document.createTextNode(letters[i]));
    letter.style.WebKitTransition = letter.style.MozTransition =
    letter.style.MSTransition = letter.style.OTransition = letter.style.transition = style;
  letter.style.opacity = 0;
  div.appendChild(letter);
}

setTimeout(function() {
  for(var i = 0; i < div.childNodes.length; i++) {
    div.childNodes[i].style.opacity = 1;
  }
}, 0);

var images = [];
var i = 0;
function preloadImage(e){
    img = new Image();
    img.src = e;
    images[i++] = img;
}

$("document").ready(function(){
  preloadImage("../estate.jpg");
  setTimeout(function(){
         $("#dyno").css("background-image","url(../estate.jpg)");
  }, 1000);
 
  $("#introtext").click(function(){
      animateSVG("body");
      $("#dg").attr("src","../dg.jpg"); //loaded a little beforehand
      $("#dyno").removeClass("fading");
      swap("#intro","#about");
      $("#dyno").css("background-image","url(../white.jpg)");
      $("#dyno").css("background-color","white");
  });
  $("#abouttext").click(function(){
      animateSVG("hammer");
      swap("#about","#experience");
  });
  $("#experiencetext").click(function(){
      animateSVG("line");
      swap("#experience","#projects");
  });
  $("#projectstext").click(function(){
      swap("#projects","#resume");
  });
  $("#resumetext").click(function(){
      retractLine();
      swap("#resume","#intro");
      $("#dyno").addClass("fading");
      $("#dyno").css("background-image","url(../estate.jpg)");
  });
});

function swap(a,b){
  $(a).fadeOut(250, function() {
        $("#dyno").scrollTop(0);
        $(b).fadeIn(250);
    });
}
