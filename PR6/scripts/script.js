const requestURL= "https://semegenkep.github.io/json/example.json";
const header = document.querySelector('header');
const section = document.querySelector('section');
const request=new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType='json';
request.send()
request.onload=function(){
    const superHeroes=request.response
    populateHeader(superHeroes)
    showHeroes(superHeroes)
    console.log(superHeroes)
}
function populateHeader(superHeroes){
const h1=document.createElement('h1');
const description=document.createElement('p');
h1.textContent=superHeroes.squadName; 
header.appendChild(h1);
// description.textContent="HomeTown:"+superHeroes.homeTown;
description.textContent=`HomeTown: ${superHeroes.homeTown} // Formed ${superHeroes.formed}`;
header.appendChild(description);
}
function showHeroes(superHeroes){
    for (let i=0; i<superHeroes.members.length;i++){
        const p=document.createElement("p");
        const article=document.createElement("article");
        const h2=document.createElement("h2");
        h2.textContent=superHeroes.members[i].name;
        article.appendChild(h2);
        p.innerHTML = `Secret Identity: ${superHeroes.members[i].secretIdentity}` +"<br>"+
                 `Age: ${superHeroes.members[i].age}` +"<br>"+
                 `Superpowers:`;
        article.appendChild(p);
        
        const listContainer=document.createElement("ul");
        for(let j=0; j<superHeroes.members[i].powers.length; j++){
            const listElement=document.createElement("li");
            listElement.textContent=superHeroes.members[i].powers[j];
            listContainer.appendChild(listElement);
        }
        article.appendChild(listContainer)
        section.appendChild(article);
    }
}

// function showHeroes(superHeroes){
//     const listcontainer=document.createElement("ul");
//     let article=document.createElement("article");
//     const h2=document.createElement("h2");
//     const p=document.createElement("p");
//     for (let i=0; i<superHeroes.members.length;i++){
//         h2.textContent=superHeroes.members[i].name;
//         article.appendChild(h2);
//         section.appendChild(article);
//     }
// }