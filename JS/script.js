

document.getElementById("heading").innerHTML = "TO DO LIST";


function myDynamic() {
    const para = document.createElement("p");
    const rad = document.createElement("img");

    rad.setAttribute("src", "red.png");

    para.innerText = "This is a radio button.";
    document.getElementById("content-left").appendChild(rad);
    document.getElementById("content-right").appendChild(para);

    rad.addEventListener('click', function removeList() {
        const rad = document.getElementById("content-left");
        const para = document.getElementById("content-right");
        rad.removeChild(rad.firstElementChild);
        para.removeChild(para.firstElementChild);
    })

}





function myFunction() {

    const addNew = document.getElementById("myText");
    const para = document.createElement("p");
    const rad = document.createElement("img");
    rad.setAttribute("src", "red.png");
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







