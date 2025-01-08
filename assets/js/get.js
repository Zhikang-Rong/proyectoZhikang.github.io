

function fetchJSONData() {
    fetch("assets/js/games.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>{
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            
            var content = "";

            if(document.getElementById("juegos") !== null){
                if(urlParams.has("genero")){
                    for (const game of data) {
                        if(game.genero === urlParams.get("genero")){
                            content +="<a href='juego.html?gameId="+game.id+"' target='_self' tabindex='0'>";
                            content +="<div class='juego'>";
                            content +="<img src='assets/img/"+game.image+"' alt='"+game.name+"'>";
                            content +="<h3>"+game.name+"</h3>";             
                            if(game.price == 0){
                                content +="<p class='precio'>Gratis</p>";
                            }else{
                                content +="<p class='precio'>"+game.price+"€</p>";
                            }
                            content +="</div>";
                            content +="</a>";
                        }
                    }
                }else{
                    for (const game of data) {
                        content +="<a href='juego.html?gameId="+game.id+"' target='_self' tabindex='0'>";
                        content +="<div class='juego'>";
                        content +="<img src='assets/img/"+game.image+"' alt='"+game.name+"'>";
                        content +="<h3>"+game.name+"</h3>";
                        if(game.price == 0){
                            content +="<p class='precio'>Gratis</p>";
                        }else{
                            content +="<p class='precio'>"+game.price+"€</p>";
                        }
                        content +="</div>";
                        content +="</a>";
                    }
                }
                document.getElementById("juegos").innerHTML += content;
            }
            else if(document.getElementById("juego") !== null){
                let found = false;
                for (const game of data) {
                    if(found == true){
                        break;
                    }
                    if(game.id == urlParams.get("gameId")){
                        found = true;
                        content += "<img src='../../assets/img/"+game.image+"' alt='"+game.name+"'>";
                        content += "<div>";
                        content += "<h2>"+game.name+"</h2>";
                        content += "<table>";
                        content += "<tr>";
                        content += "<td>Desarrollador</td>";
                        content += "<td>"+game.developer+"</td>";
                        content += "</tr>";
                        content += "<tr>";
                        content += "<td>Lanzado el</td>";
                        content += "<td>"+game.launch+"</td>";
                        content += "</tr>";
                        content += "</table>";
                        content += "<p tabindex='0'>"+game.description+"</p>";
                        content += "</div>";
                        content += "<div>";
                        if(game.price == 0){
                            content +="<span class='price'>Gratis</span>";
                        }else{
                            content +="<span class='price'>"+game.price+"€</span>";
                        }
                        content += "<button tabindex='0' id='buy' aria-labelledby='price buy'>Comprar</button>";
                        content += "</div>";
                    }
                }
                document.getElementById("juego").innerHTML += content;
            }
            
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
};