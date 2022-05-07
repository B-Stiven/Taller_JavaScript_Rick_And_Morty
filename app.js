const URL="https://rickandmortyapi.com/api/character";
const UR='https://rickandmortyapi.com/api/character/?name=';
const nameC= document.getElementById("nameC");


window.addEventListener("load", getCharacters());
nameC.addEventListener('keyup', checkCharacter());



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

function checkCharacter(){
    while(Card.lastChild){
        Card.removeChild(Card.lastChild)
    }
    getCharactersByKeys(nameC.value);  
}

function getCharactersByKeys(searchCharacter){
    fetch(UR+searchCharacter)
    .then(response => response.json())
     .then(data =>{
        data.results.forEach(element =>{
            createElements(element.name, element.image)
            console.log(element.name)
                                          
         });
     })
    }