function general(){
  if(document.getElementById("simpleCookieConsent") != null){
    checkCookie();
  }

  
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "theme-light");
    console.log("themes");
  };
  document.getElementsByTagName("main")[0].className = localStorage.getItem("theme");
  document.getElementById("theme-change-light").addEventListener("click",function(){
    if (localStorage.theme !== "light") {
      localStorage.setItem("theme", "theme-light");
    };
    document.getElementsByTagName("main")[0].className = localStorage.getItem("theme");
  });
  document.getElementById("theme-change-dark").addEventListener("click",function(){
    if (localStorage.theme !== "dark") {
      localStorage.setItem("theme", "theme-dark");
    };
    document.getElementsByTagName("main")[0].className = localStorage.getItem("theme");
  });

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

    if (cookie !== "") {
        console.log("yes");
    } else {
        document.getElementById("simpleCookieConsent").classList.remove('hideThis');
        console.log("no");
        document.getElementsByClassName("cookieConsentAllow")[0].addEventListener("click",function(){
            setCookie("tienda","hola",90);
            document.getElementById("simpleCookieConsent").classList.add('hideThis');
        });
        document.getElementsByClassName("cookieConsentDeny")[0].addEventListener("click",function(){
          window.location.replace("https://google.com");
        });
    }
}

