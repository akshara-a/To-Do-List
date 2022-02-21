// Adding items in To-Do list
function addFunction(){
    if(document.getElementById("toDo").value.length == 0)
        alert("Please do enter the task to proceed!");
    else{
        // Parent Shell creation
        var parentShell = document.createElement("div");
        parentShell.className = "individualItems";
        document.getElementById("items").appendChild(parentShell);
        // Value part
        var addItem = document.createElement("p");
        addItem.innerHTML = document.getElementById("toDo").value;
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
                this.previousElementSibling.style.textDecoration = "line-through";
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
                this.parentElement.style.display = "none";
            }
        }
        // Resetting the value of the input text to empty
        document.getElementById("toDo").value = "";
    }
}
