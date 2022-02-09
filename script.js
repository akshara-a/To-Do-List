// Adding items in To-Do list
function addFunction(){
    // Parent Shell creation
    var parentShell = document.createElement("div");
    parentShell.className = "individualItems";
    // Value part
    document.getElementById("items").appendChild(parentShell);
    var itemVal = document.getElementById("toDo").value;
    var addItem = document.createElement("p");
    addItem.innerHTML = itemVal;
    addItem.className = "itemVal";
    parentShell.appendChild(addItem);
    // Striking tasks 
    var strikeButton = document.createElement("button");
    strikeButton.innerHTML = "&#10003"; // HTML code for tick symbol
    strikeButton.className = "strikeButton";
    var strike = document.getElementsByClassName("strikeButton");
    parentShell.appendChild(strikeButton);
    var j;
    for(j=0;j<strike.length;j++){
        strike[j].onclick = function(){
            var parTarget = this.parentElement;
            var childTarget = parTarget.children[0];
            childTarget.style.textDecoration = "line-through";
        }
    }
    // Closing button part
    var addCloseButton = document.createElement("button");
    addCloseButton.innerHTML = "&#10060"; // HTML code for crossmark symbol
    addCloseButton.className = "delButton";
    parentShell.appendChild(addCloseButton);
    var close = document.getElementsByClassName("delButton");
    var i;
    for(i=0;i<close.length;i++){
        close[i].onclick = function(){
            var divTarget = this.parentElement;
            divTarget.style.display = "none";
        }
    }
}