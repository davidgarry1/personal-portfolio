hideSVG("hammer");
hideSVG("case");
hideSVG("body");
hideSVG("mouse");
hideSVG("computer");

function hideSVG(elementID){
  var path = document.getElementById(elementID);
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = path.style.MozTransition = path.style.OTransition = path.style.MSTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
}

function retractSVG(elementID){
  var path = document.getElementById(elementID);
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = path.style.MozTransition = path.style.OTransition = path.style.MSTransition = 'stroke-dashoffset 2s ease-out';
  path.style.strokeDasharray = length + ' ' + length;
  path.getBoundingClientRect();
  path.style.strokeDashoffset = length;
}

function animateSVG(elementID){
  var path = document.getElementById(elementID);
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = path.style.MozTransition = path.style.OTransition = path.style.MSTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = path.style.MozTransition = path.style.OTransition = path.style.MSTransition = 'stroke-dashoffset 10s ease';
  path.style.strokeDashoffset = '0';
}

$('.scroll_item').on('click', function() {
    var elem = $('#'+$(this).data('page')).click();
});

history.pushState({urlPath:'/'},"",'/');

var div = document.getElementById('fadetitle');
var letters = div.textContent.split('');

while(div.hasChildNodes()) div.removeChild(div.firstChild);

for(var i = 0; i < letters.length; i++) {
  var letter = document.createElement('span');
  var style = 'opacity ' + (Math.random() * 1) + 's linear';
  letter.appendChild(document.createTextNode(letters[i]));
  letter.style.WebKitTransition = letter.style.MozTransition = letter.style.MSTransition = letter.style.OTransition = letter.style.transition = style;
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

var version = detectIE();
if(version != false) {
  $(".shape").addClass("altbrowser");
  $(".text").addClass("altbrowser");
}

function fillUnsplashStats(){
  var views = "600,000+";
  var viewsForMonth = "90,000+";
  var downloads = "6,000+";
  $.getJSON("https://api.unsplash.com/users/davidgarry1/statistics?client_id=8172afeb14105037ff6de59034a618b8011808bc4c64ab348041daf2c25128f0", function(stats) {
    views = stats["views"]["total"];
    viewsForMonth = stats["views"]["historical"]["change"];
    downloads = stats["downloads"]["total"];
    if(views){
      views = numberWithCommas(views);
    }
    if(viewsForMonth){
      viewsForMonth = numberWithCommas(viewsForMonth);
    }
    if(downloads){
      downloads = numberWithCommas(downloads);
    }
  }).complete(function() {
    $("#usplashviewnum").text(views);
    $("#usplashdownloadnum").text(downloads);
    $("#usplashviewmonthnum").text(viewsForMonth);
  });
}

$("document").ready(function(){
  makeDotActive("resumetext");
  if(version != 10 && version != 11){
    $("#svgtitle").show();
  }
  preloadImage("../estate.jpg");
  $("#dg").attr("src","../dg.jpg");
  $("#introhead").attr("src","http://www-scf.usc.edu/~dgarry/img/headshot.jpg");
  setTimeout(function(){
         $("#dyno").css("background-image","url(../estate.jpg)");
  }, 1000);
  
  fillUnsplashStats();
  
  $("#introtext").click(function(){
      animateSVG("body");
      hideInnerBG();
      swap("#about");
      makeDotActive("introtext");
  });
  $("#abouttext").click(function(){
      animateSVG("hammer");
      animateSVG("case");
      hideInnerBG();
      swap("#experience");
      makeDotActive("abouttext");
  });
  $("#experiencetext").click(function(){
      animateSVG("mouse");
      animateSVG("computer");
      hideInnerBG();
      swap("#projects");
      makeDotActive("experiencetext");
  });
  $("#projectstext").click(function(){
      hideInnerBG();
      swap("#resume");
      makeDotActive("projectstext");
  });
  $("#resumetext").click(function(){
      retractSVG("mouse");
      retractSVG("computer");
      retractSVG("hammer");
      retractSVG("body");
      retractSVG("case");
      swap("#intro");
      $("#dyno").addClass("fading");
      setTimeout(function(){
        $("#dyno").css("background-image","url(../estate.jpg)");
      }, 50);
      makeDotActive("resumetext");
  });
});

function makeDotActive(dotText){
    var elem = $('#dot'+dotText);
    elem.addClass('scroll_item_active').siblings('.scroll_item_active').removeClass('scroll_item_active');
}

function hideInnerBG(){
  $("#dyno").removeClass("fading");
  $("#dyno").css("background-image","url(../white.jpg)");
  $("#dyno").css("background-color","white");
}

function swap(e){
  $(".inner-body section:not("+e+")").each(function() {
      $(this).fadeOut(250);
  });
  $(".inner-body section:not("+e+")").promise().done(function() {
      $("#dyno").scrollTop(0);
      $(e).fadeIn(250);
  });
}

// Returns version of IE or false, if browser is not Internet Explorer
function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    //return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    return 10;
  }
  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    //return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    return 11;
  }
  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    //return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    return 12;
  }
  // other browser
  return false;
}
