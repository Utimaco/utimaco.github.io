var content = document.getElementById("multi-item-example");
var button = document.getElementById("viewAllBtn");

button.onclick = function() {

    if(content.className == "open") {

        //shrink the box
        content.className = "";
        button.innerHTML = "View All";

    } else {

        //expand the box
        content.className = "open";
        button.innerHTML = "Hide";
    }
}