var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
var counter = 1;

btn.addEventListener("click", function() {
    
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + counter + '.json');
    ourRequest.onload = function() {
        theData = JSON.parse(ourRequest.responseText);   //theData = ourRequest.responseText; 
        renderHTML(theData);
        counter++;
        if(counter > 3){
            btn.classList.add("hide-me");
        }
    };
    ourRequest.send();

});

function renderHTML(data) {
    var htmlString = '';

    for(let i=0; i<data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>"
    }

    animalContainer.insertAdjacentHTML('beforeend',htmlString);
}

