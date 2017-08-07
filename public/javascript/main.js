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

$("document").ready(function(){
  $("#introtext").click(function(){
      swap("#intro","#about");
  });
  $("#abouttext").click(function(){
      swap("#about","#experience");
  });
  $("#expereincetext").click(function(){
      swap("#experience","#projects");
  });
  $("#projectstext").click(function(){
      swap("#projects","#resume");
  });
  $("#resumetext").click(function(){
      swap("#resume","#intro");
  });
});

function swap(a,b){
  $(a).fadeOut(250);
  $(b).delay(250).fadeIn(250);
}
