var input = document.getElementById("userInput");
var enterButton = document.getElementById("enter");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}
function listlength() {
    return item.value;

}

function createListElement() {
    li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut() {
        li.classList.toggle("done");
    }
    li.addEventListener("click", crossOut)


    var dBTN = document.createElement("button");
    dBTN.appendChild(document.createTextNode("X"));
    li.appendChild(dBTN);

    function deletelistItem() {
        li.classList.add("delete");
    }

    dBTN.addEventListener("click", deletelistItem);
}

function addListitemAfterclick() {
    if (inputLength() > 0);
    createListElement();
}
enterButton.addEventListener("click", addListitemAfterclick);

// var input = document.getElementById("userInput");
// input.addEventListener("keypress", function (input){
//     if(input.key ==="Enter"){
//         input.preventDefault();
//         document.getElementById("enter").click();
//     }
// })

// another way of doing it
function addListafterkeypress(event){
    if (inputLength()> 0 && event.which ===13){
        createListElement()
    }
}

enterButton.addEventListener("click",addListitemAfterclick)
input. addEventListener("keypress, addlistAfterkeypress")


