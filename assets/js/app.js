window.onload = function(){
  if(document.getElementById("simpleCookieConsent") != null){
    checkCookie();
  }

    //TERMINOS Y CONDICIONES
    if(document.getElementById("submit") != null){
      document.getElementById("submit").addEventListener("click",function(){
        if(document.getElementById("politicas").checked){
            document.getElementById("sel").innerHTML = "";
        }
        else{
            document.getElementById("sel").innerHTML = "Lea los términos y condiciones";
        }
    });
    }
    
    
    //MENU PLEGABLE
    
    let pleg = document.getElementById("pleg");
    pleg.addEventListener("click", function() {
        
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          } 
    });
    



    //ANIMACIÓN EN EL LOGO
    document.getElementById('logo').onclick = function() {

      let i = Math.floor(Math.random() * 9);
      if(i == 0){
        document.getElementById('logo').className = 'logo2';
        setTimeout(function(){
            document.getElementById('logo').className = 'noLogo';
        }, 1100);
      }else{
        document.getElementById('logo').className = 'logo';
        setTimeout(function(){
            document.getElementById('logo').className = 'noLogo';
        }, 500);
      }
        
    }
}


//FUNCIONES
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
    let cookie = getCookie("tienda");
    console.log(cookie);
    console.log(document.cookie);
    if (cookie != "") {
        console.log("yes");
        document.getElementById("simpleCookieConsent").style.display = "none"; 
    } else {
        console.log("no");
        document.getElementById("simpleCookieConsent").style.display = "block";
        document.getElementsByClassName("cookieConsentAllow")[0].addEventListener("click",function(){
            setCookie("tienda","hola",90);
            location.reload();
        });
        document.getElementsByClassName("cookieConsentDeny")[0].addEventListener("click",function(){
            //mandar a google
        });
    }
}

