

document.getElementById("heading").innerHTML = "TO DO LIST";

function myFunction() {

    const addNew = document.getElementById("myText");
    const para = document.createElement("p");
    const rad = document.createElement("img");
           img.src="https://github.com/ron-thecertifiedbomb/To-Do-List/blob/main/assets/red.png");
    const leftContainer = document.getElementById("content-left");
    const righttContainer = document.getElementById("content-right");
    

    if (addNew.value == 0) {
        alert("please type something");
    }
    else {
        para.innerText = addNew.value;
        
        document.getElementById("content-left").appendChild(rad);
        document.getElementById("content-right").appendChild(para);
        addNew.value = "";

        rad.addEventListener('click', function removeList() {
            leftContainer.removeChild(rad);
            righttContainer.removeChild(para);
        })

    }
}


function changeHeading() {
    document.getElementById("heading").style.fontFamily = "titillium web";

}







