const mainTitle = document.querySelector(".start-here");
mainTitle.textContent = "main title";
//
const locate = mainTitle.nextElementSibling.firstElementChild;
const newSub = document.createElement("li");
newSub.innerText = "subtitle 4";
locate.appendChild(newSub);
console.dir(locate);
//
const lastLi = mainTitle.parentElement.lastElementChild.remove();
//
const title = document.querySelector("title");
title.innerText = "Master Of The Dom";
//
const p = document.querySelector("div p");
p.innerText = "lorem";
