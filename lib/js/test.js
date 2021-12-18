
var first = true;
document.onclick = function(){
  if(first == true) audio.play()
  setTimeout(()=> logo.classList.remove('active'),2000)
  setTimeout(()=> menu.classList.add('active'),3000)
  first = false;
}