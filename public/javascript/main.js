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
  $("#fadetitle").css("background-image","url(../black.jpg)");
  $("#dyno").css("background-image","url(../estate.jpg)");
  preloadImage("../rock.jpg");
    
  wow = new WOW({
      boxClass:     'wow',      
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
  });
  wow.init();
  
  $("#introtext").click(function(){
      swap("#intro","#about","../rock.jpg");
      $("#dyno").css("background-image","url(../white.jpg)");
      preloadImage("../sky.jpg");
      preloadImage("../hexed.jpg");
      preloadImage("../glow.jpg");
  });
  $("#abouttext").click(function(){
      swap("#about","#experience","../hexed.jpg");
     
  });
  $("#experiencetext").click(function(){
      swap("#experience","#projects","../glow.jpg");
      preloadImage("../dg.jpg");
      $("#dg").attr("src","../dg.jpg");
  });
  $("#projectstext").click(function(){
      swap("#projects","#resume","../sky.jpg");
  });
  $("#resumetext").click(function(){
      swap("#resume","#intro","../black.jpg");
      $("#dyno").css("background-image","url(../estate.jpg)");
  });
});

function swap(a,b,c){
  $("#fadetitle").css("background-image","url("+c+")");
  $(a).fadeOut(250, function() {
        $("#dyno").scrollTop(0);
        $(b).fadeIn(250);
    });
}
