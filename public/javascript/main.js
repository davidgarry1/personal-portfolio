var vendors = ['-moz-','-webkit-','-o-','-ms-','-khtml-',''];
function toCamelCase(str){
    return str.toLowerCase().replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');});
};
function setCss3Style(element,prop,val){
    var el = document.getElementById(element);
    for(var i=0,l=vendors.length;i<l;i++){
        el.style[toCamelCase(vendors[i] + prop)] = val;
    }
};
   
hideLine(); //Will be moved to CSS once determined final

function hideLine(){
  var path = document.querySelector('.squiggle-animated path');
  var length = path.getTotalLength();
  // Clear any previous transition
  path.style.transition = path.style.WebkitTransition ='none';
  // Set up the starting positions
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
}

function retractLine(){
  var path = document.querySelector('.squiggle-animated path');
  var length = path.getTotalLength();
  // Clear any previous transition
  // Set up the starting positions
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in';
  path.style.strokeDasharray = length + ' ' + length;
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  path.getBoundingClientRect();
  // Define our transition
  // Go!
  path.style.strokeDashoffset = length;
}

function animateLine(){
  var path = document.querySelector('.squiggle-animated path');
  var length = path.getTotalLength();
  // Clear any previous transition
  path.style.transition = path.style.WebkitTransition ='none';
  // Set up the starting positions
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  path.getBoundingClientRect();
  // Define our transition
  path.style.transition = path.style.WebkitTransition ='stroke-dashoffset 10s ease-in-out';
  // Go!
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
      animateLine();
      $("#dg").attr("src","../dg.jpg"); //loaded a little beforehand
      setCss3Style('dyno', 'background-image', 'none !important');
      setCss3Style('dyno', 'background-color', 'none !important');
      swap("#intro","#about");
      $("#dyno").css("background-image","url(../white.jpg)");
      $("#dyno").css("background-color","white");
      setCss3Style('dyno', 'background-image', '1s ease-in');
  });
  $("#abouttext").click(function(){
      swap("#about","#experience");
  });
  $("#experiencetext").click(function(){
      swap("#experience","#projects");
  });
  $("#projectstext").click(function(){
      swap("#projects","#resume");
  });
  $("#resumetext").click(function(){
      retractLine();
      swap("#resume","#intro");
      $("#dyno").css("background-image","url(../estate.jpg)");
  });
});

function swap(a,b){
  $(a).fadeOut(250, function() {
        $("#dyno").scrollTop(0);
        $(b).fadeIn(250);
    });
}
