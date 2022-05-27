const URL="https://rickandmortyapi.com/api/character";

const nameC= document.getElementById("nameC");
const car2=document.getElementById("card")


window.addEventListener("load", getCharacters());
nameC.addEventListener('keyup', cleaner);



function getCharacters(){
    fetch(URL)
    .then(response=>response.json())
    .then(data=>{
        data.results.forEach(element => {
            createElements(element.name, element.image);
        }); 
    });     
}

function createElements(name, img){
    const card=document.getElementById("card");
    const ContainerCard=document.createElement("div");
    const imaCard=document.createElement("img");
    const nameCard=document.createElement("h1");

    imaCard.classList.add("imaCard");
    ContainerCard.classList.add("ContainerCard");
    ContainerCard.style.width="342px";
    ContainerCard.style.height="384px";

    imaCard.setAttribute('src', img);
    imaCard.setAttribute('alt', name);
    nameCard.textContent = name;
    nameCard.style.color="white";
    ContainerCard.appendChild(imaCard);
    ContainerCard.appendChild(nameCard);
    card.appendChild(ContainerCard);

    return card;   
}

const URLCar = "https://rickandmortyapi.com/api/character/?name=";
function cleaner(){
    while(car2.lastChild){
        car2.removeChild(car2.lastChild);
    }
    getCharacters2(nameC.value);


}

function getCharacters2(setatrubute){
    fetch(URLCar+setatrubute)
    .then(response=>response.json())
    .then(data=>{ 
        data.results.forEach(element => {
            createElements(element.name,element.image)
            console.log(element.name)
        }); 

    }); 
}