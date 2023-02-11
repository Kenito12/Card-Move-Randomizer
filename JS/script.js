console.log("Script is working");

//Random a card move from moves.json
function Randomized(){
    var xhttp = new XMLHttpRequest();//using AJAX to send a request to retrieve data from moves.json
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){  //check the state of moves.json
            var myObj = JSON.parse(this.responseText);//convert moves.json data into myObj Arrays
            var randomed = myObj[Math.floor(Math.random()*myObj.length)]; //radom one array out of Myobj
            

            var move = `<div class="moveName">${randomed.title}</div>
            <iframe width="898" height="506" src="${randomed.link}" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <div><button onclick="Randomized()" class="button">Next</button></div>`
            var canvas = document.getElementById("canvas");//prepare to manipulate the dom
            canvas.innerHTML = "";//clean the element 
            canvas.innerHTML += move;//manipulate
        }
    }
    xhttp.open("GET", "moves.json", true);
    xhttp.send();
}



