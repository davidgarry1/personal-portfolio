// Parse the URL parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

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

if(getParameterByName("c")){
  $("#intro").hide();
  $("#"+c).show();
  if(c=="thanks"){
    $("#fadetitle").css("background-image","url(../glow.jpg)");
  }
}

$("document").ready(function(){
  history.pushState({urlPath:'/'},"",'/');
  $("#introtext").click(function(){
      swap("#intro","#about","");
      history.pushState({urlPath:'/'},"",'?c=about');
  });
  $("#abouttext").click(function(){
      swap("#about","#experience","");
      history.pushState({urlPath:'/'},"",'?c=experience');
      //Preload image
      img1 = new Image();
      img1.src = "../glow.jpg";
  });
  $("#experiencetext").click(function(){
      swap("#experience","#projects","");
      history.pushState({urlPath:'/'},"",'?c=projects');
  });
  $("#projectstext").click(function(){
      swap("#projects","#resume","../glow.jpg");
      history.pushState({urlPath:'/'},"",'?c=thanks');
  });
  $("#resumetext").click(function(){
      swap("#resume","#intro","");
      history.pushState({urlPath:'/'},"",'/');
  });
});

function swap(a,b,c){
  $(a).fadeOut(250);
  $(b).delay(250).fadeIn(250);
  $("#fadetitle").css("background-image","url("+c+")");
}
