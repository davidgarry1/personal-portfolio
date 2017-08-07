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

function preloadImage(e){
    img1 = new Image();
    img1.src = e;
}

$("document").ready(function(){
  history.pushState({urlPath:'/'},"",'/');
  preloadImage("../stand.jpg");
  $("#introtext").click(function(){
      swap("#intro","#about","../stand.jpg");
      preloadImage("../flame.jpg");
  });
  
  $("#abouttext").click(function(){
      swap("#about","#experience","../flame.jpg");
      preloadImage("../hexed.jpg");
  });
  
  $("#experiencetext").click(function(){
      swap("#experience","#projects","../hexed.jpg");
      preloadImage("../glow.jpg");
  });
  
  $("#projectstext").click(function(){
      swap("#projects","#resume","../glow.jpg");

  });
  $("#resumetext").click(function(){
      swap("#resume","#intro","");

  });
});

function swap(a,b,c){
  $(a).fadeOut(250);
  $(b).delay(250).fadeIn(250);
  $("#fadetitle").css("background-image","url("+c+")");
}
