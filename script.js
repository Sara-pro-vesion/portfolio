
function morphdrop(){
  const btn=document.querySelector("button");
  btn.classList.add('morphing');
  btn.onclick = null;
  btn.innerText = " ";
  setTimeout(() =>{
    btn.remove();
    createspalsh();
  }, 1100);
}

function createspalsh (){
  const splash = document.createElement("div");
  splash.className = "splash";
  document.body.appendChild(splash);

  setTimeout(() => {
    splash.remove();
  }, 600);

}





